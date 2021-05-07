/* eslint-disable import/prefer-default-export */
import { Flex, Grid, GridItem, Image } from '@chakra-ui/react';

export function Header(): JSX.Element {
  return (
    <Flex
      as="header"
      justify="center"
      align="center"
      width="100vw"
      h={['50px', '100px']}
      p="1rem"
    >
      <Grid maxWidth="1160px" templateColumns="repeat(3, 1fr)" width="100%">
        <GridItem justifySelf="start" alignSelf="center">
          <Image
            h={['16px', '42px']}
            src="/returnArrow.svg"
            alt="botão de voltar"
            justifySelf="center"
            gridColumn="2"
          />
        </GridItem>
        <GridItem justifySelf="center" alignSelf="center">
          <Image
            w={['81px', '184px']}
            src="/logo.svg"
            alt="Um avião voando sobre o nome da marca world trip"
            gridColumn="2"
          />
        </GridItem>
        <GridItem align="center" justifySelf="end" alignSelf="center" />
      </Grid>
    </Flex>
  );
}
