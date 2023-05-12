import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import MainPage from 'pages/MainPage';
// import { ProtectedRoute } from 'components';
import { WelcomePage } from 'pages';
import './App.scss';

function App() {
  const location = useLocation();

  return (
    <AnimatePresence initial={false} mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="/welcome" />} />
        <Route path="*" element={<Navigate to="/welcome" />} />
        <Route path="welcome" element={<WelcomePage />} />
        <Route
          path="about-me"
          element={<MainPage />}
        />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
