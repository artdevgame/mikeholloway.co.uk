import matter, { GrayMatterFile } from 'gray-matter';
import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula as codeTheme } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import { HomeButton } from '../../components/buttons/HomeButton';
import dayjs from '../../helpers/dayjs';
import NotFoundPage from '../404';

type Props = GrayMatterFile<any>;

const Page: NextPage<Props> = ({ content, data: frontmatter }) => {
  if (!content) {
    return <NotFoundPage />;
  }

  return (
    <>
      <Head>
        <title>{`${frontmatter.title} | Mike Holloway`}</title>
      </Head>
      <HomeButton />
      <article className="prose prose-blue lg:prose-lg text-gray-600">
        <h2 className="font-secular-one">{frontmatter.title}</h2>
        <p className="text-sm text-gray-500">
          <time dateTime={frontmatter.dateTime}>
            {dayjs(frontmatter.dateTime).format("ddd Do MMMM, YYYY")}
          </time>
        </p>
        <ReactMarkdown
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  language={match[1]}
                  style={codeTheme}
                  PreTag={"div"}
                  customStyle={{
                    background: "unset",
                    padding: "unset",
                    margin: "unset",
                  }}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {content}
        </ReactMarkdown>
      </article>
    </>
  );
};

Page.getInitialProps = async (ctx) => {
  const { slug } = ctx.query;
  const content = await import(`../../content/${slug}.md`);
  return matter(content.default);
};

export default Page;
