
import React from 'react';
import Head from 'next/head';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Jumbotron from '../components/Jumbotron';
import TeamList from '../components/TeamList';

export default ({ children, title = 'The Universal Blog' }) => (
  <Layout>
    <Header>
      <Jumbotron centered>
        <h1>{'About | ' + title}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation
        </p>
      </Jumbotron>
    </Header>
    <TeamList />
  </Layout>
);
