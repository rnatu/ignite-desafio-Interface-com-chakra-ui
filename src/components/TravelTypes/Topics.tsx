import {
  Flex,
  Image,
  Text,
  FlexProps,
  Box,
  useBreakpointValue,
} from '@chakra-ui/react';

interface TopicsProps extends FlexProps {
  src: string;
  title: string;
  alt: string;
}

export function Topics({ src, title, alt }: TopicsProps): JSX.Element {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Flex
      direction={isWideVersion ? 'column' : 'row'}
      alignItems="center"
      justifyContent="center"
    >
      {isWideVersion ? (
        <Image src={src} alt={alt} width="5.31rem" />
      ) : (
        <Box
          border="4px"
          borderColor="yellow.500"
          borderStyle="solid"
          borderRadius="50%"
          mr="2"
        />
      )}
      <Text mt={{ md: '1.5rem' }}>{title}</Text>
    </Flex>
  );
}
