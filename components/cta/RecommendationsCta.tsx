import Link from 'next/link';

export function RecommendationsCta() {
  return (
    <div className="py-16 sm:py-20">
      <h2 className="text-3xl font-extrabold sm:text-4xl">
        <span className="block">Need inspiration?</span>
      </h2>
      <p className="mt-4 text-lg leading-6 ">
        I&apos;ve got a few{' '}
        <Link href="/recommendations">
          <a className="text-blue-500 font-medium underline">recommendations</a>
        </Link>{' '}
        to get those ideas flowing.
      </p>
    </div>
  );
}
