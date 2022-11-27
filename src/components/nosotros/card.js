import React from 'react';
import { Box, Icon, Text, useBreakpointValue } from '@chakra-ui/react';

const Card = ({ children, cardIcon }) => {
  return (
    <Box bg="color2" borderRadius={20}>
      <Icon as={cardIcon} color="color1" boxSize={150} mt={5} mb={5}></Icon>
      <Text
        color="color1"
        mt={5}
        mb={5}
        fontSize={useBreakpointValue({ base: '24px', md: '30px' })}
      >
        {children}
      </Text>
    </Box>
  );
};

export default Card;
