import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Box } from '@chakra-ui/react';
import Home from '../pages/home';
import Nosotros from '../pages/nosotros';
import Paquetes from '../pages/paquetes';
import NavBar from '../components/navbar';

const MainRouter = () => {
  return (
    <Box as="main" pb={8}>
      <Router>
        <NavBar></NavBar>
        <Container maxW="container.lg" pt={14}>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/paquetes" element={<Nosotros></Nosotros>}></Route>
            <Route path="/personaliza" element={<Paquetes></Paquetes>}></Route>
            <Route path="/nosotros" element={<Paquetes></Paquetes>}></Route>
            <Route path="/contacto" element={<Paquetes></Paquetes>}></Route>
          </Routes>
        </Container>
      </Router>
    </Box>
  );
};

export default MainRouter;
