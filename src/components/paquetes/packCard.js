import React from 'react';
import { Box, Icon, Button, List, ListItem, Heading } from '@chakra-ui/react';

const PackageCard = ({ children, cardIcon, packageData, noButton }) => {
  return (
    <Box
      bg="color1"
      borderRadius={20}
      p={10}
      textAlign="center"
      _hover={
        noButton && {
          background: '#565859',
        }
      }
      transition="All 0.3s ease-in-out"
    >
      <Icon as={cardIcon} color="color2" boxSize={100} mt={5} mb={5}></Icon>
      <Heading color="white" fontSize={'32px'} mb={'20px'}>
        {children}
      </Heading>
      <List listStyleType={'none'}>
        {packageData.map(elem => (
          <ListItem color="white">{elem}</ListItem>
        ))}
      </List>
      {noButton ?? (
        <Button
          bg="color3"
          rounded={'full'}
          color={'white'}
          minW="150px"
          mt={'30px'}
          boxShadow="lg"
        >
          Seleccionar
        </Button>
      )}
    </Box>
  );
};

export default PackageCard;
