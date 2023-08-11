import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import BoardPage from './pages/BoardPage';
import AboutPage from './pages/AboutPage';
import HelpCenterPage from './pages/HelpCenterPage';
import Contribute from './pages/Contribute';
import DjangoTest from './pages/DjangoTest';
import { ChakraProvider } from '@chakra-ui/react';

import React from "react";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Board" element={<BoardPage />} />
            <Route path="/About" element={<AboutPage />} />
            <Route path="/DjangoTest" element={<DjangoTest />} />
            <Route path="/HelpCenter" element={<HelpCenterPage />} />
            <Route path="/Contribute" element={<Contribute />} />
          </Routes>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
