
import React from 'react';
import Head from 'next/head';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Jumbotron from '../components/Jumbotron';
import PostList from "../components/PostList";

export default ({ children, title = 'The Universal Blog' }) => (
  <Layout>
    <Header>
    <Jumbotron>
      <h1>{title}</h1>
    </Jumbotron>
    </Header>
    <PostList/>
  </Layout>
);
