/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useRef } from 'react';

import OverwolfLogo from '../../public/overwolf-h.svg';
import { Button } from '../buttons/Button';
import { Carousel } from '../Carousel';

import type { Type } from '@glidejs/glide';
export function ShotsFiredCta() {
  const glideRef = useRef();
  const glideOptions = {
    autoplay: 5000,
    focusAt: 'center',
    perView: 1,
    type: 'carousel' as Type,
  };
  return (
    <div className="bg-gray-700 rounded-lg shadow-2xl w-full">
      <Carousel options={glideOptions} ref={glideRef}>
        <img
          src="/content/projects/shots-fired/screenshot1.jpg"
          className="w-full h-full object-cover rounded-t-lg"
          alt=""
        />
        <img
          src="/content/projects/shots-fired/screenshot2.jpg"
          className="w-full h-full object-cover rounded-t-lg"
          alt=""
        />
        <img
          src="/content/projects/shots-fired/screenshot3.jpg"
          className="w-full h-full object-cover rounded-t-lg"
          alt=""
        />
        <img
          src="/content/projects/shots-fired/screenshot4.jpg"
          className="w-full h-full object-cover rounded-t-lg"
          alt=""
        />
        <img
          src="/content/projects/shots-fired/screenshot5.jpg"
          className="w-full h-full object-cover rounded-t-lg"
          alt=""
        />
      </Carousel>
      <div className="px-8 lg:px-8 py-8 pt-6 lg:py-12 lg:pt-8">
        <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">Shots Fired</p>
        <p className="mt-3 text-lg text-gray-100">Shots Fired is your automated stream manager.</p>
        <p className="mt-3 text-lg text-gray-300">
          No more fiddling with buttons on a stream deck, or trying to remember a hotkey whilst you&apos;re deep in
          action. Just setup, save and let Shots Fired take control whilst you sit back and play.
        </p>
        <div className="mt-8 flex justify-between items-center">
          <div className="inline-flex rounded-md shadow">
            <Link href="https://www.overwolf.com/app/Mike_Holloway-Shots_Fired" passHref>
              <Button>Download</Button>
            </Link>
          </div>
          <OverwolfLogo className="h-10 text-white opacity-40" />
        </div>
      </div>
    </div>
  );
}
