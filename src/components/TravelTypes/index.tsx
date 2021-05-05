import { Flex } from '@chakra-ui/react';
import { Topics } from './Topics';

export function TravelTypes(): JSX.Element {
  return (
    <Flex
      color="blueGray.700"
      fontSize="2xl"
      mt="5.05rem"
      mx="auto"
      justify="space-between"
      maxWidth="1160px"
    >
      <Topics src="./cocktail.svg" title="vida noturna" alt="Drink" />
      <Topics src="./surf.svg" title="praia" alt="Praia" />
      <Topics src="./building.svg" title="moderno" alt="Moderno" />
      <Topics src="./museum.svg" title="clássico" alt="Clássico" />
      <Topics src="./earth.svg" title="e mais..." alt="Praia" />
    </Flex>
  );
}
