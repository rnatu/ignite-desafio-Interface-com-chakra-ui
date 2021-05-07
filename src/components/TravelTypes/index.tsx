import { Flex, useBreakpointValue } from '@chakra-ui/react';
import { Topics } from './Topics';

export function TravelTypes(): JSX.Element {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Flex
      direction={['column', 'column', 'row']}
      justify={['center', 'space-between']}
      mt={['2.25rem', '20rem', '5.04rem']}
      mx="auto"
      width="80%"
      maxWidth="1160px"
      color="blueGray.700"
      fontSize={['1.12rem', '3.rem', '2xl']}
      fontWeight="500"
    >
      {!isWideVersion ? (
        <>
          <Flex justifyContent="space-between">
            <Topics src="./cocktail.svg" title="vida noturna" alt="Drink" />
            <Topics src="./surf.svg" title="praia" alt="Praia" />
          </Flex>
          <Flex justifyContent="space-between" mt="1.68rem">
            <Topics src="./building.svg" title="moderno" alt="Moderno" />
            <Topics src="./museum.svg" title="clássico" alt="Clássico" />
          </Flex>
          <Flex justifyContent="center" mt="1.5rem">
            <Topics src="./earth.svg" title="e mais..." alt="Praia" />
          </Flex>
        </>
      ) : (
        <>
          <Topics src="./cocktail.svg" title="vida noturna" alt="Drink" />
          <Topics src="./surf.svg" title="praia" alt="Praia" />
          <Topics src="./building.svg" title="moderno" alt="Moderno" />
          <Topics src="./museum.svg" title="clássico" alt="Clássico" />
          <Topics src="./earth.svg" title="e mais..." alt="Praia" />
        </>
      )}
    </Flex>
  );
}
