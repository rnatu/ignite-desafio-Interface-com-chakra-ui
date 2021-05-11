import { Flex } from '@chakra-ui/layout';
import { InfoContent } from './InfoContent';

export function InfoBox(): JSX.Element {
  return (
    <Flex mt={['1rem', '0']} justify="space-between" maxWidth="490px" w="100%">
      <InfoContent amount={50} description="países" />
      <InfoContent amount={60} description="línguas" />
      <InfoContent
        amount={27}
        description="cidades +100"
        tooltipLabel="Cidades +100"
      />
    </Flex>
  );
}
