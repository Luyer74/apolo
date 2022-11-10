import {
  Stack,
  Flex,
  Button,
  Heading,
  VStack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import React from 'react';

export default function Hero() {
  return (
    <Flex
      h="600px"
      backgroundImage={
        'url(https://images.unsplash.com/photo-1544207916-df3b3a131e35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    >
      <VStack
        w={'full'}
        justify={'center'}
        align="left"
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
      >
        <Stack
          maxW={'2xl'}
          align={'flex-start'}
          spacing={6}
          position="relative"
          left={useBreakpointValue({ base: '0px', md: '100px' })}
          marginX={useBreakpointValue({ base: '10px', md: '0px' })}
        >
          <Heading
            color={'white'}
            as="h1"
            fontWeight="extrabold"
            lineHeight={1.2}
            maxW="570px"
            fontSize={useBreakpointValue({ base: '40px', md: '56px' })}
          >
            Manten a tus clientes conectados. Donde sea.
          </Heading>
          <Text color="white" fontSize="28px" maxW="600px">
            Nuestras redes manejan las cargas más pesadas a la mejor velocidad.
          </Text>
          <Stack direction={'row'}>
            <Button bg="color3" rounded={'full'} color={'white'} boxShadow="lg">
              Paquetes Disponibles
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
