import React from 'react';
import Head from 'next/head';

import { Input, TextArea } from '../components/Form';

const Contact = props => (
  <div>
    <Head>
     <link  rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/in.css"/>
    </Head>
    <Input type="text" placeholder="Full Name" />
    <TextArea placeholder="Your question..."></TextArea>

  </div>
);

export default Contact;
