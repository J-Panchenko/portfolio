import App from 'App';
import { ErrorBoundary } from 'components';
import { HashRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import reportWebVitals from 'reportWebVitals';
import './index.css';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <HashRouter>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </HashRouter>
);

reportWebVitals();
