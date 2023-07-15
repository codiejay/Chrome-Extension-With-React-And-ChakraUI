import React from 'react';
import { createRoot } from 'react-dom/client';

import Popup from './Popup';
import { ChakraProvider } from '@chakra-ui/react';

const container = document.getElementById('app-container');
const root = createRoot(container);
root.render(
  <ChakraProvider>
    <Popup />
  </ChakraProvider>
);
