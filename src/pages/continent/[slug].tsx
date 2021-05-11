import { Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import Head from 'next/head';
import { CityCard } from '../../components/CityCard';
import { ContinentBanner } from '../../components/ContinentBanner';

import { Header } from '../../components/Header';
import { InfoBox } from '../../components/Info';

export default function Continent(): JSX.Element {
  return (
    <>
      <Head>
        <title>Worldtrip | Europe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <ContinentBanner continentTitle="Europa" />

      <Flex
        as="main"
        direction="column"
        maxWidth="1160px"
        mx={['1rem', '1rem', '1rem', 'auto']}
        px={[0, 0, '1rem', '1rem', 0]}
      >
        <InfoBox />

        <Flex w="100%" mt={['2rem', '80px']}>
          <Heading
            color="blueGray.700"
            fontWeight="500"
            fontSize={['1.5rem', '2.25rem']}
          >
            Cidades + 100
          </Heading>
        </Flex>

        <Flex
          w="100%"
          direction="column"
          align={['center', 'center', 'normal']}
          mt="20px"
        >
          <SimpleGrid spacingX="45px" minChildWidth="220px">
            <CityCard
              postImageSrc="/cityCard/london.png"
              city="Londres"
              country="Reino Unido"
              flagSrc="/cityCard/ukFlag.png"
            />
            <CityCard
              postImageSrc="/cityCard/paris.png"
              city="Paris"
              country="França"
              flagSrc="/cityCard/franceFlag.png"
            />
            <CityCard
              postImageSrc="/cityCard/rome.png"
              city="Roma"
              country="Itália"
              flagSrc="/cityCard/italyFlag.png"
            />
            <CityCard
              postImageSrc="/cityCard/prague.png"
              city="Praga"
              country="República Tcheca"
              flagSrc="/cityCard/czechRepublicFlag.png"
            />

            <CityCard
              postImageSrc="/cityCard/amsterdam.png"
              city="Amsterdã"
              country="Holanda"
              flagSrc="/cityCard/hollandFlag.png"
            />
          </SimpleGrid>
        </Flex>
      </Flex>
    </>
  );
}
