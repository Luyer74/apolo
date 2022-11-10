import React from 'react';
import {
  SimpleGrid,
  Image,
  Text,
  Box,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';

const Second = () => {
  return (
    <Box bg="color2">
      <Box p="100px">
        <SimpleGrid columns={[1, 1, 1, 2]} gap={12}>
          <Box w="100%">
            <Image
              border="3px black solid"
              src="https://images.unsplash.com/photo-1537228831265-454be83f87e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80"
              borderRadius="xl"
              height={{ base: '300px', lg: '400px' }}
              margin="auto"
              objectFit={'cover'}
            ></Image>
          </Box>
          <Box>
            <Text
              fontSize={{ base: '28px', lg: '36px' }}
              fontWeight="bold"
              textAlign={{ base: 'center', lg: 'left' }}
            >
              Contamos con la última tecnología para soportar cualquier red que
              necesites para tu evento.
            </Text>
            <UnorderedList
              textAlign={{ base: 'center', lg: 'left' }}
              listStyleType={{ base: 'none', lg: 'inherit' }}
              mt={{ base: '10px', lg: '60px' }}
              ml={5}
              fontSize={{ base: '20px', lg: '26px' }}
            >
              <ListItem>Internet Satélital</ListItem>
              <ListItem>Internet Móvil</ListItem>
              <ListItem>Internet Punto a Punto</ListItem>
            </UnorderedList>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Second;
