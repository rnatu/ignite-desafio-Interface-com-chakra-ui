import { Flex } from '@chakra-ui/layout';
import { InfoContent } from './infoContent';

export function InfoBox(): JSX.Element {
  return (
    <Flex justify="space-between" mt="1rem">
      <InfoContent
        countries={50}
        languages={60}
        cities={24}
        tooltipLabel="24 cidades"
      />
    </Flex>
  );
}
