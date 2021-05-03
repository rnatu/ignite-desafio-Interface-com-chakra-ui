import Head from 'next/head';

import { Banner } from '../components/Banner';
import { Header } from '../components/Header';

export default function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Banner />
      <main>
        <h1>Welcome to Next.js!</h1>
      </main>

      <footer />
    </div>
  );
}
