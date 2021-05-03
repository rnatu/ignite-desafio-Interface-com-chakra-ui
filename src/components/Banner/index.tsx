import { Box, Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';

export function Banner(): JSX.Element {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex h="23rem">
      <Box
        bgImage="url(https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1505&q=80)"
        width="100vw"
        bgPosition="50% 15%"
        height="20rem"
      >
        <Flex mt="5rem" px="8.75rem" justify="space-between">
          <Box color="gray.50" w="32.75rem">
            <Text fontSize="2.25rem" fontWeight="500">
              5 Continentes, <br />
              infinitas possibilidades.
            </Text>

            <Text color="gray.100" fontSize="1.25rem" fontWeight="normal">
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Box>
          {isWideVersion && <Image src="/airplane.svg" />}
        </Flex>
      </Box>
    </Flex>
  );
}
