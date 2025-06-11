import AppFooter from "../appFooter/AppFooter";
import Logo from '../../resources/img/Logo.png';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Characters from './pages/Characters';
import Houses from './pages/Houses';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AppStyles.scss';
import UpScroll from "../upScroll/UpScroll";

const App = () => {
    return (
        <Router basename="/GoTproject">
            <div className="app">
                
<header className="app__header">
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100 px-0">
<div className="navbar__inner d-flex align-items-center w-100 px-3">
  <Link className="navbar-brand" to="/">
    <img src={Logo} alt="logo" style={{ height: '80px', marginRight: '10px' }} />
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
                    </Routes>
                    <UpScroll></UpScroll>
                </main>

                <AppFooter />
            </div>
        </Router>
    );
};

export default App;