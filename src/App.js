import React from 'react';
import Header from './components/Header';
import Landing from './pages/Landing';
import "@fontsource/montserrat/400.css"
import "@fontsource/montserrat/500.css"
import "@fontsource/montserrat/600.css"
import "@fontsource/montserrat/700.css"
import {
  ChakraProvider,
  Box
  
} from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher'; 
import theme from "./theme"


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box bg="brand.100" minHeight="100vh" textAlign="center" fontSize="xl">
        <Header/>
      
        <Landing/>
      </Box>
    </ChakraProvider>
  );
}

export default App;
