import React from 'react';
import { Box } from '@chakra-ui/react';

const CustomButton = ({ children, stat, click }) => {
  return (
    <Box
      minW={'100px'}
      color="color1"
      bg="color2"
      minH="50px"
      mr={10}
      mb={5}
      as="button"
      borderRadius={10}
      border={stat ? '2px solid blue' : '2px solid black'}
      _hover={{ border: '2px solid blue' }}
      onClick={click}
    >
      {children}
    </Box>
  );
};

export default CustomButton;
