import React from 'react';
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import PackageCard from './packCard';
import { FaSatelliteDish } from 'react-icons/fa';
import { IoMdPhonePortrait } from 'react-icons/io';

const paquetes = {
  paquete1: [
    'Subida 10 mbps',
    'Descarga 100 mbps',
    'Instalación 2-4 hrs',
    'Método Satelite',
  ],
  paquete2: [
    'Subida 50 mbps',
    'Descarga 50 mbps',
    'Instalación 1 hora',
    'Método LinkPro + Bonding',
  ],
  paquete3: [],
};

const PackCards = () => {
  return (
    <Box p={20}>
      <Heading textAlign={'center'} mb="20px">
        Nuestros paquetes más populares
      </Heading>
      <SimpleGrid columns={[1, 1, 2, 3]} gap={12}>
        <PackageCard cardIcon={FaSatelliteDish} packageData={paquetes.paquete1}>
          Internet Satelital
        </PackageCard>
        <PackageCard
          cardIcon={IoMdPhonePortrait}
          packageData={paquetes.paquete2}
        >
          Internet Móvil
        </PackageCard>
        <PackageCard cardIcon={FaSatelliteDish} packageData={paquetes.paquete3}>
          Renta de Satélite
        </PackageCard>
      </SimpleGrid>
    </Box>
  );
};

export default PackCards;
