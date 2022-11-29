import React from 'react';
import { Box, SimpleGrid, Button, Text, Center } from '@chakra-ui/react';
import CustomButton from './customButton';
import { useState } from 'react';

const ButtonRow = ({ data, setData }) => {
  const [selected, setSelected] = useState(false);
  const handleSelect = (element, value) => {
    setData(value);
    setSelected(element);
  };

  return (
    <Box>
      <SimpleGrid columns={[2, 2, 2, 4]}>
        {data.map((elem, key) => (
          <CustomButton
            key={key}
            stat={selected === key}
            click={() => handleSelect(key, elem)}
          >
            {elem}
          </CustomButton>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ButtonRow;
