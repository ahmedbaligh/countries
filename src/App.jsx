import { Routes, Route } from 'react-router-dom';
import { useColorModeValue } from '@chakra-ui/react';

import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Box } from '@chakra-ui/react';

export function App() {
  return (
    <Box flex={1} bg={useColorModeValue('gray.100', 'blue.800')}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />\
      </Routes>
    </Box>
  );
}
