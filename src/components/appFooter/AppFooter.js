import './appFooter.scss';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../resources/img/Logo.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


const AppFooter = () => {
  return (
    <Navbar className="bg-dark w-100 py-3">
      <Container className="d-flex justify-content-between align-items-center">
        
        
        <div className="text-light small">
          (с) Based on Ice and Fire API
        </div>

        <Link className="navbar-brand" to="/">
        <div className="text-center">
          <img
            src={Logo}
            alt="logo"
            style={{ height: '60px' }}
          />
        </div>
        </Link>

        
        <div className="text-light small">
          Made by: <a href="#login" className="text-info text-decoration-none">Yurii Chmyr</a>
        </div>

      </Container>
    </Navbar>
  );
};

export default AppFooter;