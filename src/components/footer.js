import React from 'react';
import {
  Box,
  HStack,
  Icon,
  Center,
  Divider,
  Text,
  Link,
} from '@chakra-ui/react';
import {
  RiWhatsappLine,
  RiFacebookBoxLine,
  RiInstagramLine,
  RiTwitterLine,
} from 'react-icons/ri';
import { Link as ReactLink } from 'react-router-dom';

const Footer = () => {
  return (
    <Box p={10}>
      <HStack>
        <Center w="100%">
          <Link as={ReactLink} to="">
            <Icon
              as={RiWhatsappLine}
              boxSize={10}
              marginX={5}
              color="color1"
            ></Icon>
          </Link>
          <Link as={ReactLink} to="">
            <Icon
              as={RiFacebookBoxLine}
              boxSize={10}
              marginX={5}
              color="color1"
            ></Icon>
          </Link>
          <Link as={ReactLink} to="">
            <Icon
              as={RiInstagramLine}
              boxSize={10}
              marginX={5}
              color="color1"
            ></Icon>
          </Link>
          <Link as={ReactLink} to="">
            <Icon
              as={RiTwitterLine}
              boxSize={10}
              marginX={5}
              color="color1"
            ></Icon>
          </Link>
        </Center>
      </HStack>
      <Center w="100%">
        <Divider m={5} w={'50%'} borderColor="color1"></Divider>
      </Center>
      <Center>
        <Text>&copy; {new Date().getFullYear()} Apolo</Text>
      </Center>
    </Box>
  );
};

export default Footer;
