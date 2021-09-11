import Link from 'next/link';

import { ArrowCircleLeftIcon } from '@heroicons/react/outline';

export function HomeButton() {
  return (
    <Link href="/">
      <a className="inline-flex items-center space-x-2 text-gray-400 mb-12 -ml-2">
        <ArrowCircleLeftIcon className="w-8 h-8" />
        <span className="font-semibold">Home</span>
      </a>
    </Link>
  );
}
