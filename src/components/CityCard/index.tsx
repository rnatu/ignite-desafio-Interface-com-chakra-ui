import { Flex, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react';

interface CitiesCardProps {
  postImageSrc: string;
  city: string;
  country: string;
  flagSrc: string;
}

export function CityCard({
  postImageSrc,
  city,
  country,
  flagSrc,
}: CitiesCardProps): JSX.Element {
  return (
    <Flex direction="column" borderTopRadius="2%" mt="20px" w="256px" h="279px">
      <Image src={postImageSrc} />

      <Flex
        borderX="1px"
        borderBottom="1px"
        borderColor="rgba(255, 186, 8, 0.5)"
        borderBottomRadius="2%"
      >
        <Grid
          mt="18px"
          mb="25px"
          w="208px"
          h="63px"
          mx="auto"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(2, 1fr)"
          gap={4}
        >
          <GridItem rowSpan={1} colSpan={1}>
            <Heading color="blueGray.700" fontWeight="600" fontSize="1.25rem">
              {city}
            </Heading>
          </GridItem>
          <GridItem
            rowSpan={2}
            colSpan={1}
            alignSelf="center"
            justifySelf="right"
          >
            <Image src={flagSrc} w="30px" />
          </GridItem>

          <GridItem rowSpan={1} colSpan={1}>
            <Text color="gray.600" fontSize="1rem" fontWeight="500">
              {country}
            </Text>
          </GridItem>
        </Grid>
      </Flex>
    </Flex>
  );
}
