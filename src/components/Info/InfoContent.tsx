import { Flex, Heading, Image, Text, Tooltip } from '@chakra-ui/react';

interface InfoContentProps {
  amount: number;
  description: string;
  tooltipLabel?: string;
}

export function InfoContent({
  amount,
  tooltipLabel,
  description,
}: InfoContentProps): JSX.Element {
  return (
    <Flex direction="column" alignItems={['left', 'center']}>
      <Heading
        color="yellow.500"
        fontWeight="600"
        fontSize={['1.5rem', '3rem']}
      >
        {amount}
      </Heading>
      <Text
        color="blueGray.700"
        fontSize={['1.125rem', '1.5rem']}
        fontWeight={['400', '600']}
      >
        {description}
        {tooltipLabel && (
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
        )}
      </Text>
    </Flex>
  );
}
