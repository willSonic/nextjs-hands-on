import React from 'react';
import Head from 'next/head';

export default ({ children, title = 'The Universal Blog' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" />
      <link rel="stylesheet" href="/static/css/normalize.css" />
      <link rel="stylesheet" href="/static/css/skeleton.css" />
      <link rel="stylesheet" href="/static/css/app.css" />

    </Head>

    {children}

    <footer>I'm always here</footer>
  </div>
);
