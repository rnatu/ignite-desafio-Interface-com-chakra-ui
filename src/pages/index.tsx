import { Divider, Text } from '@chakra-ui/layout';
import Head from 'next/head';

import { Banner } from '../components/Banner';
import { ContinentSlide } from '../components/ContinentSlide';
import { Header } from '../components/Header';
import { TravelTypes } from '../components/TravelTypes';

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Banner />

        {/* <TravelTypes />

        <Divider
          mt="20"
          mx="auto"
          width={['60px', '90px']}
          borderWidth="1px"
          borderColor="#47585B"
        />

        <Text
          color="blueGray.700"
          fontSize="2.25rem"
          mt="3.25rem"
          textAlign="center"
        >
          Vamos nessa? <br />
          Então escolha seu continente
        </Text>

        <ContinentSlide /> */}
      </main>
    </>
  );
}
