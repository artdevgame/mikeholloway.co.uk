---
title: "Tech-related projects that I've worked on over the past year"
dateTime: '2021-01-27'
description: "I love to create digital toys. Here's a review of my latest to date."
---

### Tailwind-UI (React)

I really like the design practices of Steve Schoger (Refactoring UI) and have been keen to try out Tailwind CSS (created by Adam Wathan) for some time. The pair collaborated and created [Tailwind UI](https://tailwindui.com), so recently I purchased a license to use their work.

The components are provided as HTML patterns that can be copy/pasted, but as I predominantly use React in my projects I’ve decided to create a layer to make them more reusable (and remove a lot of the boilerplate). It’s also given me a reason to try [React-Aria](https://react-spectrum.adobe.com/react-aria/index.html) and [StoryBook](https://storybook.js.org)

Unfortunately, due to licensing restrictions, I’m unable to share this project publicly but hopefully soon you’ll get to see the results in the next version of Shots Fired.

### Shots Fired v5

One of my goals for 2021 is to release v5 of Shots Fired, my Overwolf app to automate your game streams. I’ve created some [initial mocks](https://www.figma.com/file/ffTQVhKbM1xDazWezyjqKe/Shots-Fired) that demonstrate some of the new functionality, but the UI is likely to change due to my settlement on Tailwind-UI (see above). I’ll also be moving the Webhook functionality into its own part of the app, rather than having it tied to an event.

The user base of the [current version](https://www.overwolf.com/app/Mike_Holloway-Shots_Fired) of Shots Fired has continued to grow without active marketing, so I’m hopeful with a little bit of help promoting the next version, I could see a healthy increase in numbers.

### Stock-Bot

I use [Trading 212](https://www.trading212.com/invite/GIlTriRm) to try and grow my wealth, and I prefer to buy stocks that have dividend payments so there are monthly returns. I like to understand visually what those returns are, but unfortunately Trading 212 doesn't provide an API.

So I wrote [stock-bot](https://github.com/artdevgame/stock-bot) that connects to your account using [Puppeteer](https://developers.google.com/web/tools/puppeteer) and automates the retrieval of your dividend payments. Once it has those, it processes the data and displays a monthly chart using [Recharts](https://recharts.org).

### Crypto-Bot

I like the idea of playing with the volatility of cryptocurrencies, so I wrote a bot to connect to a sandbox account on [Coinbase Pro](https://pro.coinbase.com/) (or [Coinbase Affiliate Link](https://www.coinbase.com/join/hollow_hx) 😉) and have it perform market trades automatically. The first version tried to buy and sell based on Candlestick patterns but in the end I switched this to trade based on profit margins alone. I have the ability to either set a stop-loss or not (these are used to protect your investment if the currency is dropping in value) but generally I keep it in a HODL mode, in a nutshell, it doesn’t make trades when the value is dropping.

It works in principle, but I haven’t committed it into the production environment as 1. It’s a toy, and I don’t want to expose myself to that kind of risk, 2. I don’t want a tax headache at the end of the financial year.

Because it messes with money, and because I wouldn’t want my toy to cause anyone financial ruin, I won’t be sharing the bot.

Interesting side-note, I had this bot running on my android phone as a Node.js process sitting on a Termux session.

### Marketing List Amalgamator

My wife works at a vets that recently changed the underlying CRM system to Merlin Business Software, unfortunately the migration didn’t go as smoothly as expected and she was left with reports that were unusable in their current form.

The data used to contact their customer base contained duplicates and emails of users that had previously unsubscribed.

So to help, I wrote some Node.js scripts that de-duped the dataset based on a number of columns in an Excel document, refined them further, formatted them into a known structure and compared them with another separate dataset (CSV) from Mailchimp (their marketing platform of choice)

The result was one clean, trustworthy CSV to market to, and several other ancillary CSV files that could show the records Merlin had that Mailchimp didn’t (and vice versa), which records were removed because they were exact duplicates, and which records were removed during refinement because it was the same customer but with different pets.

### Street Cred

During my first stint of furlough (May - Nov 2020), I worked a US-based contract for a software house called Elegant Software Solutions. I was tasked with building an Overwolf app for [Street Cred](https://www.overwolf.com/app/Elegant_Software_Solutions-Street_Cred), which is used to rate and review gamers and help weed out toxicity in the gaming community.

It was the first time I’d really put any effort into using TypeScript and have since become a massive proponent of the tech.

It was also the first time I’ve worked a contract, and also the first time with a group of Americans (I’ve worked with European cultures mostly - Italian, German, Bulgarian, Portugese). I’m pleased to say I had a good experience from all of it.

The project itself was exciting, I’m passionate about games, so the work felt very meaningful to me.

### Project 52 (2020)

Every week for the entire year, [I produced a piece of “music”](https://soundcloud.com/mr-holloway/sets/2020-project-52). I have had no prior music theory education, but learnt how to use Ableton Suite from scratch and produced a couple of “ok” tracks.

I discovered a newfound love of DnB and Flamenco.

I’d like to take this new set of skills forward into 2021, with the ambition of producing one polished song of at least 3 minutes in length.

### German Skills

Prior to being furloughed, I worked in a team that was predominantly full of German speaking people. I felt a need to study the language so I could communicate better and had aimed to complete all of DuoLingo German skills (up to level 2) by the end of 2020. I missed it by a slither (there’s a lot of work!), but I did manage to get a 520 day-streak before the year closed. Although I’m no longer in the team, I intend to continue learning the language regardless.

### This Website

I find it peculiar that a developer doesn’t have a website, like a builder that doesn’t work on their own property. I fell into this category for many years, purely because I had so many other focuses and blogging isn’t a favourite pastime of mine. That being said, I wanted to create a space that I could have an outlet without relying on Social Media (I think this is a terrible invention) - although it’s been up for a while, I haven’t used it much. I see it growing organically over time.

### Sketch Palette Generator

I used to use Sketch (before I switched to Figma) and the Sketch Palettes plugin. I also used to use Color Lovers to find colour themes for my projects. So I wrote a script to generate a Sketch Palettes compatible file from a Color Lovers URL, check it out: https://sketch-palette-generator.netlify.app

### Mask Translator

I wrote a Google Docs add-on to toggle values between a masked-entity and a Human-readable string (i.e. `[[DEVELOPER]]` becomes `Mike Holloway`). It’s called [Mask Translator](https://gsuite.google.com/marketplace/app/mask_translator/915191283805)

The add-on is useful for Content Writers that use templates but need to customise them based on something such as company name, or other unique values.

### HX Conference Day Talk: TypeScript in Tripapp

One of the projects that powers the Holiday Extras website is named Tripapp. It’s a mixture of tech built up over many years of development, but nowadays it’s almost entirely powered by React and Redux (the data comes via a GraphQL API).

It’s complex. One of the things I think that could benefit the project is to introduce TypeScript. Between Nov-Dec last year, I created a roundtable discussion to float the idea and gauge other people's opinions. The general consensus was that it would be a good idea, but there was a little bit of fear of the learning curve.

So during a conference day we hold internally each year, I prepared [a high-level talk](https://docs.google.com/presentation/d/17-Bz90E9hG-ggJ1YcDIvW_PoTvwFhYJ3ECKSzYm0v2s/edit?usp=sharing) around the subject and gave a demo that showed how this would look concretely.

Given the responses I had, it seemed to go down well. Unfortunately I was furloughed for a second time in January, but hopefully next time I return, I will have the opportunity to push it forward.
