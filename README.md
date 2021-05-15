# Zendesk-Ticket-Viewer

The project is to let the user connects Zendesk API and show a list of personal tickets.

## Requirements

- Connect to the Zendesk API using http requests tickets
- Display the ticket in either GUI or CLI in a list
- Show individual ticket details
- Pagination features the maximum number of 25 tickets for each page
- Clear and pretty user interface 😃

## Getting Started

#### Prerequisite Installations

- [NodeJS](https://nodejs.org/en/) LTS Version or greater

Step 1 - Download files from my repository

```
$ git clone https://github.com/TingChiehLin/Zendesk-TicketViewer
```

or Download Zip to your local machine by clicking ``Code`` button

Step 2 - Go to your folder's `path`

```
cd zendesk-coding-challenge
```

Step 3 - Install dependencies

```bash
npm install 
# or
yarn install
```

Step 4 - In order to connect Zendesk API, you have to create .env file and fill in your API Key and account information

In the .env file:

```
  API_TOKEN=
  EMAIL=
  SUBDO_MAIN=
```

Step 5 - Running the application

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Step 6 - Running testing

```bash
  npm run test
# or 
  yarn run test
```

## Technical Use

- Javascript (ES6)
- Next.js
- React.js
- Tailwind CSS

## Application Structure

#### Page (Route)

- ```page/index.js``` : Entry point connection between front-end and back-end side
- ```page/tickets``` : Specific Tickets' details page
- ```page/_app.js``` : Rendering pages and Layout
- ```page/404.js``` : 404 Error Page
- ```page/api/ticket``` : Back-End Api on the server side

#### Public

- ```public``` : Including Logo and image assets

#### styles

- ```global``` : To import global styling
- ```Layout``` : Default Layout Design

#### components

- ```layout``` : Fixed layout across different routes
- ```ticket``` : To show a list of tickets
- ```ui``` : Resuable Button and ErrorMessage component

## Process & Decision Making

#### Why did I choose Next.js and React.js for the coding challenge?

From my research, I can see Zendesk use React.js library to develop front-end and this is also my favourite tech so why
not I use it to develop the application. Moreover, Next.js is ```pre server-side-rendering``` which enables Zendesk to
accept a lot of requests in order to provide better user experience. Furthermore, Next.js is a good for full-stack
development.

#### TailwildCSS is to develop as fast as possible

I used TailwildCSS is because there are two reasons. One is CSS-JS; thus, rendering styling is better. The second one is
that TailwildCSS allows me to use their default design system so I am able to focus on my coding.

#### Encoding my API Key token

The first difficult is encoding in Javascript. This issue made me confused for a long time. However, I check resources
from [Encoing Base64](https://stackoverflow.com/questions/246801/how-can-you-encode-a-string-to-base64-in-javascript)
to try to solve my problems but it does not run on the server side so I keep looking for further
details [Buffers in Node.js](https://nodejs.org/dist/latest/docs/api/buffer.html#buffer_buffers_and_character_encodings)
and then I am able to fetch data.

#### Fetch API

I use [Axios](https://github.com/axios/axios) to fetch data. To fetch loading data. I do not use ``useEffect``. Instead,
I utilised ``getStaticProps``.

#### Test-driven development

- Testing Ticket Item whether it renders correctly including testing data.

- Testing Ticket List whether it renders all ticket items correctly.

#### Design

I follow Zendesk Design System to create ticket viewer by [Tailwind CSS](https://tailwindcss.com/)

[Zendesk Brand](https://brandland.zendesk.com/brand-identity)

[Montserrat](https://fonts.google.com/specimen/Montserrat?query=mo#standard-styles) is my main font instead of Proxima
Nova

## Resources

I found resources from Zendesk official documents that are beneficial for me to develop the application

- Zendesk Documents and Tutorials

    - [Zendesk API](https://develop.zendesk.com/hc/en-us/categories/360000003388)

    - [Tickets](https://developer.zendesk.com/rest_api/docs/support/tickets)

    - [Ticket Import](https://developer.zendesk.com/rest_api/docs/support/ticket_import)

    - [Basic Authentication](https://developer.zendesk.com/rest_api/docs/support/introduction#basic-authentication)

    - [Pagination](https://developer.zendesk.com/rest_api/docs/support/introduction#pagination)

- Next.js

    - [Next Official Document](https://nextjs.org/docs/getting-started)

    - [How to Set Up Jest and React Testing Library with Next.js](https://www.kyrelldixon.com/blog/setup-jest-and-react-testing-library-with-nextjs)

    - [Setting Up Testing Library with NextJS](https://frontend-digest.com/setting-up-testing-library-with-nextjs-a9702cbde32d)

    - [Testing & Error Handling](https://www.youtube.com/watch?v=yPBtVxDEC0w)

    - [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
  