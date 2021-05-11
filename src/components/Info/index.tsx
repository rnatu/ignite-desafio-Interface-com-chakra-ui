import { Flex, Text } from '@chakra-ui/layout';
import { InfoContent } from './InfoContent';

export function InfoBox(): JSX.Element {
  return (
    <Flex
      mt={['1.5rem', '5rem']}
      direction={['column', 'column', 'column', 'row']}
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
          Compreendendo a península ocidental da Eurásia, a Europa geralmente
          divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
          rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>
      </Flex>

      <Flex
        mt={['1rem', '1rem', '1rem', '0']}
        justify="space-between"
        maxWidth="490px"
        w="100%"
      >
        <InfoContent amount={50} description="países" />
        <InfoContent amount={60} description="línguas" />
        <InfoContent
          amount={27}
          description="cidades +100"
          tooltipLabel="Cidades +100"
        />
      </Flex>
    </Flex>
  );
}
