import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import MainPage from 'pages/MainPage';
import { WelcomePage } from 'pages';
import './App.scss';

function App() {
  const location = useLocation();

  if (window.location.href === 'https://j-panchenko.github.io/') {
    window.location.href = 'https://j-panchenko.github.io/portfolio/';
  }

  return (
    <AnimatePresence initial={false} mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="/welcome" />} />
        <Route path="*" element={<Navigate to="/welcome" />} />
        <Route path="welcome" element={<WelcomePage />} />
        <Route path="info" element={<MainPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
