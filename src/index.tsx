import App from 'App';
import { ChakraProvider } from '@chakra-ui/react';
import { ErrorBoundary } from 'components';
import { HashRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import reportWebVitals from 'reportWebVitals';
import './index.css';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <HashRouter>
    <ErrorBoundary>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </ErrorBoundary>
  </HashRouter>
);

reportWebVitals();
