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

        <TravelTypes />

        <Divider
          mt={['2.25rem', '1.50rem', '2.25rem']}
          mx="auto"
          width={['60px', '75rem', '90px']}
          borderWidth="1px"
          borderColor="#47585B"
        />

        <Text
          as="p"
          color="blueGray.700"
          fontSize={['1.25rem', '1.50rem', '2.25rem']}
          fontWeight="500"
          mt={['1.5rem', '20rem', '5.04rem']}
          textAlign="center"
        >
          Vamos nessa? <br />
          Então escolha seu continente
        </Text>

        <ContinentSlide />
      </main>
    </>
  );
}
