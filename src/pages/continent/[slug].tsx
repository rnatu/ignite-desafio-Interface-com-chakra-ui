import Head from 'next/head';
import { ContinentBanner } from '../../components/ContinentBanner';

import { Header } from '../../components/Header';

export default function Continent(): JSX.Element {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <ContinentBanner>Europa</ContinentBanner>

      <main />
    </>
  );
}
