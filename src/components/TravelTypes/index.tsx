import { SimpleGrid } from '@chakra-ui/react';
import { Topics } from './Topics';

export function TravelTypes(): JSX.Element {
  return (
    <SimpleGrid
      spacingX="auto"
      spacingY="27px"
      minChildWidth="92px"
      color="blueGray.700"
      fontSize={['1.12rem', '2xl']}
      maxWidth="1160px"
      mt={['2.25rem', '5.04rem']}
      mx={['50px', 'auto']}
    >
      <Topics src="./cocktail.svg" title="vida noturna" alt="Drink" />
      <Topics src="./surf.svg" title="praia" alt="Praia" />
      <Topics src="./building.svg" title="moderno" alt="Moderno" />
      <Topics src="./museum.svg" title="clássico" alt="Clássico" />
      <Topics src="./earth.svg" title="e mais..." alt="Praia" />
    </SimpleGrid>
  );
}
