import React from 'react';

import GithubSvg from '../public/github.svg';
import InstagramSvg from '../public/instagram.svg';
import TwitchSvg from '../public/twitch.svg';
import TwitterSvg from '../public/twitter.svg';
import { Button } from './buttons/Button';

export function Footer() {
  return (
    <footer className="flex justify-between items-center px-8 pt-20 pb-8">
      <ul className="flex space-x-8">
        <li>
          <a href="https://www.instagram.com/artdevgame" target="_blank" rel="noopener noreferrer">
            <span className="sr-only">Instagram</span>
            <InstagramSvg className="text-gray-400 fill-current h-5 w-5" />
          </a>
        </li>
        <li>
          <a href="https://www.twitch.tv/artdevgame" target="_blank" rel="noopener noreferrer">
            <span className="sr-only">Twitch</span>
            <TwitchSvg className="text-gray-400 fill-current h-5 w-5" />
          </a>
        </li>
        <li>
          <a href="https://github.com/artdevgame" target="_blank" rel="noopener noreferrer">
            <span className="sr-only">GitHub</span>
            <GithubSvg className="text-gray-400 fill-current h-5 w-5" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/artdevgame" target="_blank" rel="noopener noreferrer">
            <span className="sr-only">Twitter</span>
            <TwitterSvg className="text-gray-400 fill-current h-5 w-5" />
          </a>
        </li>
      </ul>
      <div>
        <Button
          onPress={() =>
            (window.location.href = 'https://drive.google.com/file/d/0B0THrnkn5ZKBXzRiam1BNzJ5S0k/view?usp=sharing')
          }
        >
          Download CV
        </Button>
      </div>
    </footer>
  );
}
