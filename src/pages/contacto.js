import React from 'react';
import Contacts from '../components/nosotros/contacts';
import { Box } from '@chakra-ui/react';
import Quote from '../components/nosotros/quote';


const Contacto = () => {
  return(
    <Box>
      <Contacts></Contacts>
      <Quote></Quote>
    </Box>
  )
};

export default Contacto;
