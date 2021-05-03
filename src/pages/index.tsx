import { Box, Flex } from '@chakra-ui/react';
import Head from 'next/head';
import { Header } from '../components/Header';

export default function Home():     JSX.Element {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>




      <Flex py="27" bg="red" align="center" justify="center">
        <Header />
      </Flex>

      <main>
        <h1>Welcome to Next.js!</h1>
      </main>

      <footer />
    </div>
  );
}
