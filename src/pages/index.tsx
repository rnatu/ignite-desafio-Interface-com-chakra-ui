import { Divider } from '@chakra-ui/layout';
import Head from 'next/head';

import { Banner } from '../components/Banner';
import { Header } from '../components/Header';
import { TravelTypes } from '../components/TravelTypes';

export default function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Banner />

      <TravelTypes />

      <Divider
        mt="20"
        mx="auto"
        width="90px"
        borderWidth="1px"
        borderColor="#47585B"
      />

      <main>
        <h1>Welcome to Next.js!</h1>
      </main>

      <footer />
    </div>
  );
}
