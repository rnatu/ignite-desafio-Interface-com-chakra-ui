import Head from 'next/head';

import { ContinentSlide } from '../../components/ContinentSlide';
import { Header } from '../../components/Header';

export default function Continent(): JSX.Element {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <ContinentSlide />
      </main>
    </>
  );
}
