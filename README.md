# Introduction

This is a React clinet for car dealer app.
## Tech Stack

React, Jest, Vite, Tailwind CSS, StoryBook

## Setup

To install

```sh
npm i
```

To start website

```sh
npm run client:dev
```

To list all car:

```html
http://localhost:3000/
```


## Installing / Developing

Install using:

```shell
npm i
```

This will install the dependencies required to run the app.

```shell
npm run dev
```

These scripts run your client and storybook in development mode.

The default PORTS are:

- `3000` for the client
- `6006` for the storybook

If you don't like to call all scripts at once, you can also run:

```shell
npm run client:dev
npm run storybook
```

## Building

To build the project, run:

```shell
npm run build
```

This will build the client, server and storybook.

```shell
npm start
```

In production, you have a single server serving everything.

`/storybook` is the Storybook.  
`/*` is the client.

## Tests

To run Jest tests:

```shell
npm test
```

Or in watch mode:

```shell
npm testw
```