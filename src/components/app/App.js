import AppFooter from "../appFooter/AppFooter";
import Logo from '../../resources/img/Logo.png';
import { FaHeart } from 'react-icons/fa';


import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Characters from './pages/Characters';
import Houses from './pages/Houses';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AppStyles.scss';
import UpScroll from "../upScroll/UpScroll";
import DataProvider from "../../services/DataProvider";
import { FavoritesProvider } from "../../services/FavoritesContext";
import { Button } from 'react-bootstrap';
import FavoritesPage from "../favoritesPages/FavoritesPages";
import FavoriteNavButton from "../favNavButton/FavNavButton";

const App = () => {
    return (
        <DataProvider>
           <FavoritesProvider>
        <Router basename="/GoTproject">
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
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/characters" element={<Characters />} />
                        <Route path="/houses" element={<Houses />} />
                        <Route path="/favorites" element={<FavoritesPage />} />
                    </Routes>
                    <UpScroll></UpScroll>
                    <FavoriteNavButton></FavoriteNavButton>
                    {/* <Link to="/favorites">
                      <Button variant="light" className="position-fixed bottom-0 start-0 m-3">
                        💖
                        </Button>
                            </Link> */}
                </main>

                <AppFooter />
            </div>
        </Router>
        </FavoritesProvider>
        </DataProvider>
    );
};

export default App;