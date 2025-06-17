import AppFooter from "../appFooter/AppFooter";
import Logo from '../../resources/img/etc/Logo.png';
import { FaHeart } from 'react-icons/fa';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import Characters from './pages/Characters';
import Houses from './pages/Houses';
import NotFound from "../notFound/NotFound";
import 'bootstrap/dist/css/bootstrap.min.css';
import './AppStyles.scss';
import UpScroll from "../upScroll/UpScroll";
import DataProvider from "../../services/DataProvider";
import { FavoritesProvider } from "../../services/FavoritesContext";
import { Button } from 'react-bootstrap';
import FavoritesPage from "../favoritesPages/FavoritesPages";
import FavoriteNavButton from "../favNavButton/FavNavButton";
import ScrollPages from "../scrollPages/scrollPages";
import { useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const AppContent = () => {
  const footerRef = useRef(null);
  const location = useLocation();

  return (
    <div className="app">
      <header className="app__header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100 px-0">
          <div className="navbar__inner d-flex align-items-center w-100 px-3">
            <Link className="navbar-brand" to="/">
              <img src={Logo} alt="logo" className="app-logo" />
            </Link>
            <div className="navbar-nav d-flex flex-row gap-3">
              <Link className="nav-link" to="/">About</Link>
              <Link className="nav-link" to="/characters">Characters</Link>
              <Link className="nav-link" to="/houses">Houses</Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="container-fluid px-0">
        <ScrollPages />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/houses" element={<Houses />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
        <UpScroll footerRef={footerRef} />
        <FavoriteNavButton footerRef={footerRef} />
      </main>

      <AppFooter footerRef={footerRef} />
    </div>
  );
};

const App = () => {
  return (
    <DataProvider>
      <FavoritesProvider>
        <Router basename="/GoTproject">
          <AppContent />
        </Router>
      </FavoritesProvider>
    </DataProvider>
  );
};

export default App;