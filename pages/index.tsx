import type { NextPage } from "next";
import { promises as fs } from 'fs';
import matter from 'gray-matter';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import path from 'path';

import { BookOpenIcon, LightBulbIcon } from '@heroicons/react/outline';

import { RecommendationsCta } from '../components/cta/RecommendationsCta';
import { ShotsFiredCta } from '../components/cta/ShotsFiredCta';
import dayjs from '../helpers/dayjs';

interface Post {
  date: string;
  dateTime: string;
  description: string;
  slug: string;
  title: string;
}

interface HomeProps {
  posts: Post[];
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Mike Holloway</title>
      </Head>
      <section>
        <BookOpenIcon className="-ml-2 w-8 h-8 text-yellow-400" />
        <div className="mt-8 relative mx-auto divide-y-2 divide-gray-200">
          <div className="grid gap-14 lg:gap-y-10">
            {posts.map((post) => (
              <div key={post.title}>
                <p className="text-sm text-gray-500">
                  <time dateTime={post.dateTime}>{post.date}</time>
                </p>
                <Link href={`/posts/${post.slug}`}>
                  <a className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {post.description}
                    </p>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mt-20">
        <LightBulbIcon className="-ml-2 w-8 h-8 text-yellow-400 mb-8" />
        <ShotsFiredCta />
      </section>
      <section className="mt-20">
        <RecommendationsCta />
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const contentDirectory = path.join(process.cwd(), "content");
  const filenames = await fs.readdir(contentDirectory);

  const postsPromise = filenames.map(async (filename) => {
    const filePath = path.resolve(contentDirectory, filename);
    const content = await fs.readFile(filePath, "utf8");

    const { data: frontmatter } = matter(content);

    return {
      ...frontmatter,
      date: dayjs(frontmatter.dateTime).format("ddd Do MMMM, YYYY"),
      slug: filename.replace(".md", ""),
    } as Post;
  });

  const posts = (await Promise.all(postsPromise)).sort((a, b) => {
    const aDate = dayjs(a.dateTime);
    const bDate = dayjs(b.dateTime);

    if (aDate.isSame(bDate)) return 0;

    return bDate.isBefore(aDate) ? -1 : 1;
  });

  return {
    props: {
      posts,
    },
  };
};

export default Home;
