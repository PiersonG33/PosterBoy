import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import BoardPage from './pages/BoardPage';
import AboutPage from './pages/AboutPage';
import DjangoTest from './pages/DjangoTest';
import { ChakraProvider } from '@chakra-ui/react';

import React, { Component } from "react";

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <Routes>
//           <Route path="/" exact element={<DjangoTest/>} />
//         </Routes>
//       </Router>
//     );
//   }
// }

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
        </Routes>
      <Footer />
    </Router>
  </ChakraProvider>
  );
}

export default App;
