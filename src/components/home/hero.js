import {
  Stack,
  Flex,
  Button,
  Heading,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';
import React from 'react';

export default function Hero() {
  return (
    <Flex
      h="500px"
      mt={2}
      backgroundImage={
        'url(https://images.unsplash.com/photo-1544207916-df3b3a131e35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    >
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
      >
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Heading
            color={'white'}
            as="h1"
            fontWeight="extrabold"
            lineHeight={1.2}
            maxW="570px"
            fontSize={useBreakpointValue({ base: '100px', md: '56px' })}
          >
            Manten a tus clientes conectados. Donde sea.
          </Heading>
          <Stack direction={'row'}>
            <Button
              bg={'blue.400'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'blue.500' }}
            >
              Show me more
            </Button>
            <Button
              bg={'whiteAlpha.300'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'whiteAlpha.500' }}
            >
              Show me more
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
