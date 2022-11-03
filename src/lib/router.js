import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Box } from '@chakra-ui/react';
import Home from '../pages/home';
import Nosotros from '../pages/nosotros';
import Paquetes from '../pages/paquetes';
import Personaliza from '../pages/personaliza';
import Contacto from '../pages/contacto';
import NavBar from '../components/navbar';

const MainRouter = () => {
  return (
    <Box as="main" pb={8}>
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/paquetes" element={<Paquetes></Paquetes>}></Route>
          <Route
            path="/personaliza"
            element={<Personaliza></Personaliza>}
          ></Route>
          <Route path="/nosotros" element={<Nosotros></Nosotros>}></Route>
          <Route path="/contacto" element={<Contacto></Contacto>}></Route>
        </Routes>
      </Router>
    </Box>
  );
};

export default MainRouter;
