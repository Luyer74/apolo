import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Stack, Image } from '@chakra-ui/react';
import SeleccionaPaquete from '../components/paquetes/personaliza/seleccionaPaquete';
import Personalizacion from '../components/paquetes/personaliza/personalizacion';

const Personaliza = () => {
  const [data, setData] = useState([{}, {}, {}]);
  const [sat, setSat] = useState(false);
  const [mov, setMov] = useState(false);
  const [p2p, setP2p] = useState(false);

  const act_satelital = () => {
    setSat(true);
  };
  const act_movil = () => {
    setMov(true);
  };
  const act_p2p = () => {
    setP2p(true);
  };
  const reset = () => {
    setSat(false);
    setMov(false);
    setP2p(false);
  };
  useEffect(() => {
    const loadData = () => {
      fetch('https://wigo-api.onrender.com/api/paquetes')
        .then(res => res.json())
        .then(allPaquetes => setData(allPaquetes));
    };
    loadData();
  }, []);

  return (
    <Box pt={20}>
      {sat == false && mov == false && p2p == false ? (
        <SeleccionaPaquete
          data={data}
          setSatelital={act_satelital}
          setMovil={act_movil}
          setP2p={act_p2p}
        ></SeleccionaPaquete>
      ) : null}
      {sat == true ? (
        <Personalizacion
          data={data[0]}
          title="Internet Satelital"
          reset={reset}
          imagePath="/satelite.png"
        ></Personalizacion>
      ) : null}
      {mov == true ? (
        <Personalizacion
          data={data[1]}
          title="Internet Móvil"
          reset={reset}
          imagePath="/cell.png"
        ></Personalizacion>
      ) : null}
      {p2p == true ? (
        <Personalizacion
          data={data[2]}
          title="Internet Punto a Punto"
          reset={reset}
          imagePath="/satelite.png"
        ></Personalizacion>
      ) : null}
    </Box>
  );
};

export default Personaliza;
