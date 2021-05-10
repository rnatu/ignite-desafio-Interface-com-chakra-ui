import { Flex, Heading, Image, Text, Tooltip } from '@chakra-ui/react';

interface InfoContentProps {
  countries: number;
  languages: number;
  cities: number;
  tooltipLabel: string;
}

export function InfoContent({
  countries,
  languages,
  cities,
  tooltipLabel,
}: InfoContentProps): JSX.Element {
  return (
    <>
      <Flex direction={['column', 'column', 'row']}>
        <Heading color="yellow.500" fontWeight="600" fontSize="1.5rem">
          {countries}
        </Heading>
        <Text color="blueGray.700" fontSize="1.125rem">
          países
        </Text>
      </Flex>
      <Flex direction={['column', 'column', 'row']}>
        <Heading color="yellow.500" fontWeight="600" fontSize="1.5rem">
          {languages}
        </Heading>
        <Text color="blueGray.700" fontSize="1.125rem">
          línguas
        </Text>
      </Flex>
      <Flex direction={['column', 'column', 'row']}>
        <Heading color="yellow.500" fontWeight="600" fontSize="1.5rem">
          {cities}
        </Heading>
        <Text color="blueGray.700" fontSize="1.125rem">
          cidades +100
          <Tooltip
            hasArrow
            label={tooltipLabel}
            fontSize="md"
            bg="gray.100"
            color="blueGray.700"
          >
            <Image
              ml="0.313rem"
              display="inline-block"
              h="10px"
              src="/infoIcon.svg"
            />
          </Tooltip>
        </Text>
      </Flex>
    </>
  );
}
