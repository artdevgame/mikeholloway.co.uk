import Link from 'next/link';
import { ReactNode } from 'react';

import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col h-full">
      <header className="bg-sky-blue-500 pt-8 pb-24 bg-clouds bg-repeat-x bg-bottom">
        <div className="mx-auto max-w-2xl px-8 md:px-0">
          <Link href="/">
            <a className="text-sky-blue-300 font-montserrat">Mike Holloway</a>
          </Link>
          <h1 className="text-white text-4xl font-secular-one mt-4 text-shadow-tight leading-tight">
            A site dedicated to thoughts and ideas.
          </h1>
        </div>
      </header>
      <main className="px-8 pt-8 flex-grow">
        <div className="mx-auto max-w-2xl">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
