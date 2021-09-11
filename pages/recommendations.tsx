import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { ReactNode } from 'react';

import { HomeButton } from '../components/buttons/HomeButton';

interface RecommendationProps {
  children: ReactNode;
  title: string;
  url: string;
}

const Recommendation = ({ children, title, url }: RecommendationProps) => {
  return (
    <article className="mb-24">
      <Link href={url}>
        <a className="mt-2 block prose lg:prose-lg text-gray-600">
          <h3>{title}</h3>
          {children}
        </a>
      </Link>
    </article>
  );
};

const Recommendations: NextPage = () => {
  return (
    <>
      <Head>
        <html lang="en" />
        <title>Recommendations | Mike Holloway</title>
        <meta name="description" content="A site dedicated to thoughts and ideas." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeButton />

      <div className="prose lg:prose-lg mb-12">
        <h2 className="font-secular-one">Recommendations</h2>
      </div>

      <Recommendation
        title="You are a badass: How to stop doubting your greatness and start living an awesome life"
        url="https://amzn.to/2V9qzH0"
      >
        <p className="font-semibold">This book changed my life.</p>

        <p>
          One day I&apos;ll write a full review on my blog as it was so transformational. Jen&apos;s tone is really
          accessible, a little crass at times but the message she delivers is like a fact-train hitting you square in
          the face.
        </p>

        <p>
          You should read this book if you&apos;re feeling in a rut or a little stagnant in life. I challenge you to
          read it and not feel like you&apos;ve just discovered you had super powers all along.
        </p>
      </Recommendation>

      <Recommendation
        title="Entrepreneur Revolution: How to Develop your Entrepreneurial Mindset and Start a Business that Works"
        url="https://amzn.to/2XvozdH"
      >
        <p>A sentence very early in Dan&apos;s powerful, inspirational and motivational book got me hooked:</p>

        <blockquote className="text-lg">
          <p>
            If you went back to the late 1900s you would find people working on the new machines - computers - making
            data. These are &lsquo;white-collar&rsquo; factory workers.
          </p>
          <p>
            ...They sit at their work station and repeat their tasks for hours on end until the day is over. That is
            just how it is for most people who live in the industrial age.
          </p>
        </blockquote>

        <p>
          Have you ever had that questioning inside that asks why you&apos;re not using your own skills for your own
          passions? If so, this book is a must read.
        </p>
      </Recommendation>

      <Recommendation
        title="The Idea in You: How to Find It, Build It, and Change Your Life"
        url="https://amzn.to/2yvzrxx"
      >
        <p>
          Understand how to form ideas and how to develop them into reality. I really like the language used in this
          book, it&apos;s very simple to follow and really inspirational. Good examples of ideas to monetize.
        </p>
      </Recommendation>

      <Recommendation
        title="Side Hustle: Build a Side Business and Make Extra Money – Without Quitting Your Day Job"
        url="https://amzn.to/3aNvpir"
      >
        <p>
          I&apos;m really inspired by others that have managed to break free of the 9-5 and chart their own course in
          life by following their passion but it can seem so daunting if you have bills to pay and other
          responsibilities that prevent you going all in. This book is great for giving you ideas on how to build side
          projects when you have a little downtime and how to monetize them.
        </p>
        <p>
          If you don&apos;t have ideas of your own, still read this book as the author gives you some of his to use
          instead. One of my favourite nuggets of information is in the appendix -{' '}
          <em>How to validate an idea with $10 and a Facebook account</em>.
        </p>
      </Recommendation>

      <Recommendation title="Contagious: How to Build Word of Mouth in the Digital Age" url="https://amzn.to/34xf0fM">
        <p>
          You&apos;ve built a product or service but you&apos;re not sure how to market it effectively. This book can
          offer you years of experience on how to tap into triggers that motivate buyers.{' '}
        </p>
        <p>
          One of my favourite examples in this book is how Kit Kat paired their product with coffee in advertising
          during 2007 to revive sales. The pairing created a subliminal thought in people so that whenever they were
          around coffee, they were thinking of Kit Kat.{' '}
        </p>
        <p>There&apos;s plenty of similar examples so it&apos;s easy to apply to your own offering.</p>
      </Recommendation>

      <Recommendation title="Scrum: The Art of Doing Twice the Work in Half the Time" url="https://amzn.to/34B33Wv">
        <p>Written by a co-creator of Scrum, this book is about project management and team building.</p>
        <p>
          I especially like Jeff&apos;s ideas around removing titles from people, practicing working hour limits and how
          to play planning poker effectively.{' '}
        </p>
        <p>
          There&apos;s so much useful information in this book and largely written anecdotally, which makes it more
          relatable than other books on this subject.
        </p>
      </Recommendation>
    </>
  );
};

export default Recommendations;
