import React from 'react';
import { Box, Image, Flex, Text } from '@chakra-ui/react';

const ImageCard = () => {
  return (
    <Box bg="color3" borderRadius={30} height={{ lg: '400px' }}>
      <Flex direction={{ base: 'column', lg: 'row' }}>
        <Image
          src="https://images.unsplash.com/photo-1543946602-a0fce8117697?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
          maxW={{ lg: '500px' }}
          borderRadius={30}
          height={{ base: '300px', lg: '400px' }}
          objectFit="cover"
        ></Image>
        <Box p={10}>
          <Text fontSize={{ base: '30px', lg: '38px' }}>
            Somos una empresa mexicana dedicada a las redes
          </Text>
          <Text mt={'20px'} noOfLines={[12, 12, 6]}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
            eveniet sequi debitis saepe pariatur. Dicta enim eos necessitatibus,
            dolorem nisi voluptatem deleniti accusamus non laudantium animi
            maiores. Libero porro quam possimus nemo eaque, quas voluptate rerum
            eveniet debitis eos provident harum sint esse maxime non voluptatum,
            obcaecati, excepturi incidunt? Repudiandae?
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default ImageCard;
