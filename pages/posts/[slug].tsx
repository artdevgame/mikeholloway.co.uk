import matter, { GrayMatterFile } from 'gray-matter';
import { NextPage } from 'next';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';

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
        <title>{frontmatter.title} | Mike Holloway</title>
        <meta name="description" content="A site dedicated to thoughts and ideas." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeButton />
      <article className="prose prose-blue lg:prose-lg text-gray-600">
        <h2 className="font-secular-one">{frontmatter.title}</h2>
        <p className="text-sm text-gray-500">
          <time dateTime={frontmatter.dateTime}>{dayjs(frontmatter.dateTime).format('ddd Do MMMM, YYYY')}</time>
        </p>
        <ReactMarkdown>{content}</ReactMarkdown>
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
