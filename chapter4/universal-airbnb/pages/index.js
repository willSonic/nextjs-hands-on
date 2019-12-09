import React from 'react';
import Head from 'next/head';

import {
  Container,
  Column,
  Layout,
  Row,
  Link,
  Nav,
  H3,
  Header,
  ExploreCard,
  } from '../components';

const exploreData = [
  {
    imgUrl:
      'http://res.cloudinary.com/christekh/image/upload/v1514638156/8b7519ec-2c82-4c09-8233-fd4d2715bbf9_hhpqad.png',
    title: 'Homes'
  },
  {
    imgUrl:
      'http://res.cloudinary.com/christekh/image/upload/v1514638156/d3811ff7-cc34-471b-8aee-b0d613db0052_hxqnbc.png',
    title: 'Experience'
  },
  {
    imgUrl:
      'http://res.cloudinary.com/christekh/image/upload/v1514638157/da2d8e97-90b7-409f-94ac-5ab0327c289b_pxxgzx.png',
    title: 'Restaurants'
  }
];

// const items = [
//   {
//     imgUrl:
//       'http://res.cloudinary.com/christekh/image/upload/v1514718786/38e66319-0c9b-4d9b-a938-6c1de781edd2_f5b3vb.png',
//     title: 'Tour with an Enthusiastic Local!',
//     caption: 'Entertainment · Vancouver',
//     type: 'experience',
//     price: 3
//   },
//   {
//     imgUrl:
//       'http://res.cloudinary.com/christekh/image/upload/v1514718786/fc84f11e-bd04-4efb-bc4e-65a2070ce49_yotaih.png',
//     title: 'Retro Photoshoot in NYC',
//     caption: 'photography · New York',
//     type: 'experience',
//     price: 49
//   },
//   {
//     imgUrl:
//       'http://res.cloudinary.com/christekh/image/upload/v1514718786/Screen_Shot_2017-12-11_at_1.44.40_PM_rmuhw6.png',
//     title: "Discover the city's party scene",
//     caption: 'Nightlife · New York',
//     type: 'experience',
//     price: 35
//   },
//   {
//     imgUrl:
//       'http://res.cloudinary.com/christekh/image/upload/v1514718786/7665753c-6de6-4b28-8d13-6bfec32708c1_puayjp.png',
//     title: 'Must Have L.A. Pictures!',
//     caption: 'photo class · Los Angeles',
//     type: 'experience',
//     price: 39
//   },
//   {
//     imgUrl:
//       'http://res.cloudinary.com/christekh/image/upload/v1514720327/06bf6fed_original_noj6ev.png',
//     title: 'Unique Cob Cottage',
//     caption: 'Nightlife · New York',
//     type: 'homes',
//     price: 39
//   },
//   {
//     imgUrl:
//       'http://res.cloudinary.com/christekh/image/upload/v1514720327/d67-66c050b57c1f_zqitoa.png',
//     title: 'The Joshua Tree House',
//     caption: 'Nightlife · New York',
//     type: 'homes',
//     price: 128
//   },
//   {
//     imgUrl:
//       'http://res.cloudinary.com/christekh/image/upload/v1514720327/089_180b2f6e_original_zto8md.png',
//     title: "A Pirate's Life For Me - Houseboat!",
//     caption: 'Nightlife · New York',
//     type: 'homes',
//     price: 250
//   }
// ];
//
// const featuredItems = [
//   {
//     imgUrl: 'http://res.cloudinary.com/christekh/image/upload/v1514722204/paris_ouasq2.png',
//     city: 'Paris'
//   },
//   {
//     imgUrl: 'http://res.cloudinary.com/christekh/image/upload/v1514722204/tokyo_skmmap.png',
//     city: 'Tokyo'
//   },
//   {
//     imgUrl: 'http://res.cloudinary.com/christekh/image/upload/v1514722204/miami_bh0h6x.png',
//     city: 'Miami'
//   },
//   {
//     imgUrl: 'http://res.cloudinary.com/christekh/image/upload/v1514722204/capetown_fmuwd9.png',
//     city: 'Cape town'
//   },
//   {
//     imgUrl: 'http://res.cloudinary.com/christekh/image/upload/v1514722204/seoul_eqceof.png',
//     city: 'Seoul'
//   },
//   {
//     imgUrl: 'http://res.cloudinary.com/christekh/image/upload/v1514722204/havana_wy5ubj.png',
//     city: 'Havana'
//   }
// ];

const Index = props => (
  <div>
    <Layout>
      <Nav />
      <Container>
        <Row>
          <Column>
            <Header showSearch />
          </Column>
        </Row>
        <div className="explore">
          <H3>Explore Airbnb</H3>
          <Row>
            {exploreData.map(explore => (
              <Column width="250px">
                <ExploreCard imgUrl={explore.imgUrl} title={explore.title} />
              </Column>
            ))}
          </Row>
        </div>
      </Container>
    </Layout>
    <style jsx>{`
      .explore {
        margin-top: 50px;
      }
    `}</style>
  </div>
);

export default Index;
