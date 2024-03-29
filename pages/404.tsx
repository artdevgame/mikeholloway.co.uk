import Head from 'next/head';

import { Button } from '../components/buttons/Button';

export default function NotFoundPage() {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <div className="max-w-max mx-auto">
        <main className="sm:flex">
          <p className="text-4xl font-extrabold text-indigo-600 sm:text-5xl">404</p>
          <div className="sm:ml-6">
            <div className="sm:border-l sm:border-gray-200 sm:pl-6">
              <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Page not found</h1>
              <p className="mt-1 text-base text-gray-500">Please check the URL in the address bar and try again.</p>
            </div>
            <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
              <Button onPress={() => (location.href = '/')}>Go back home</Button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
