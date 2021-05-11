import { Flex, Text } from '@chakra-ui/react';
import Head from 'next/head';
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

      <ContinentBanner>Europa</ContinentBanner>

      <Flex as="main" maxWidth="1160px" m={['1rem', '1rem', '1rem', 'auto']}>
        <Flex
          mt={['1.5rem', '5rem']}
          direction={['column', 'column', 'row']}
          alignItems={['normal', 'center']}
          justifyContent={['center', 'center', 'space-between']}
          width="100%"
        >
          <Flex maxWidth="600px">
            <Text
              color="blueGray.700"
              fontWeight="400"
              fontSize={['0.875rem', '1.5rem']}
              lineHeight={['1.31rem', '2.25rem']}
              textAlign="justify"
            >
              A Europa é, por convenção, um dos seis continentes do mundo.
              Compreendendo a península ocidental da Eurásia, a Europa
              geralmente divide-se da Ásia a leste pela divisória de águas dos
              montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a
              sudeste
            </Text>
          </Flex>

          <InfoBox />
        </Flex>
      </Flex>
    </>
  );
}
