import React from 'react';
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import PackageCard from '../packCard';
import { FaSatelliteDish } from 'react-icons/fa';
import { IoMdPhonePortrait } from 'react-icons/io';

const SeleccionaPaquete = ({ setSatelital, setMovil, setP2p, data }) => {
  return (
    <Box textAlign={'center'} p={10}>
      <Heading mb={10}>Selecciona un servicio</Heading>
      <SimpleGrid columns={[1, 1, 3, 3]} gap={12}>
        <Box as="button" onClick={() => setSatelital()}>
          <PackageCard
            cardIcon={FaSatelliteDish}
            packageData={['Disponible en todo México']}
            noButton={true}
          >
            {data[0].Paquete}
          </PackageCard>
        </Box>
        <Box as="button" onClick={() => setMovil()}>
          <PackageCard
            cardIcon={IoMdPhonePortrait}
            packageData={['Disponible en todo México']}
            noButton={true}
          >
            {data[1].Paquete}
          </PackageCard>
        </Box>
        <Box as="button" onClick={() => setP2p()}>
          <PackageCard
            cardIcon={FaSatelliteDish}
            packageData={['Disponible en todo México']}
            noButton={true}
          >
            {data[2].Paquete}
          </PackageCard>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default SeleccionaPaquete;
