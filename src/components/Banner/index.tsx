import { Box, Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';

export function Banner(): JSX.Element {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex h={['10.18rem', '23rem']}>
      <Box
        bgImage="url(https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1505&q=80)"
        width="100%"
        bgPosition={['30% 25%', '50% 25%']}
        height={['10.18rem', '20rem']}
      >
        <Flex
          mt={['1.75rem', '2.75rem', '5rem']}
          px={['1rem', '8.75rem']}
          justify="space-between"
        >
          <Box color="gray.50" w="32.75rem">
            <Text fontSize={['lg', '4xl']} fontWeight="500">
              5 Continentes, <br />
              infinitas possibilidades.
            </Text>

            <Text
              color="gray.100"
              fontSize={['sm', 'md', 'xl']}
              fontWeight="normal"
              pt="0.5rem"
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Box>
          {isWideVersion && <Image src="/airplane.svg" />}
        </Flex>
      </Box>
    </Flex>
  );
}
