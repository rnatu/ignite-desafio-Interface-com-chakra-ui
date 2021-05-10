import { Flex, Text } from '@chakra-ui/react';
import Head from 'next/head';
import { ContinentBanner } from '../../components/ContinentBanner';

import { Header } from '../../components/Header';
import { InfoBox } from '../../components/Info';

export default function Continent(): JSX.Element {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <ContinentBanner>Europa</ContinentBanner>

      <Flex mt="24px" px="1rem" direction={['column', 'column', 'row']}>
        <Text
          color="blueGray.700"
          fontWeight="400"
          fontSize="0.875rem"
          lineHeight="1.31rem"
          textAlign="justify"
        >
          A Europa é, por convenção, um dos seis continentes do mundo.
          Compreendendo a península ocidental da Eurásia, a Europa geralmente
          divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
          rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>

        <InfoBox />
      </Flex>
    </>
  );
}
