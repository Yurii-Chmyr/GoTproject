import { Link } from 'react-router-dom';
import { Container, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';
import error from '../../resources/img/etc/404.jpg';

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container className="text-center text-white py-5 min-vh-100">
        <Image
          src={error}
          alt="404"
          fluid
          className="mb-4"
          style={{
            maxHeight: '400px',
            objectFit: 'cover',
            maxWidth: '100%',
            borderRadius: '12px',
            boxShadow: '0 0 20px rgba(0,0,0,0.6)'
          }}
        />
        <div className="season-text mx-auto" style={{ maxWidth: '600px' }}>
          <h1>404</h1>
          <h2>You know nothing, Jon Snow...</h2>
          <p>Sorry, the page you are looking for does not exist.</p>
          <p>Please, don't reload non-Home pages if project deployed on Git-Hub Pages.</p>
          <Link to="/" className="btn btn-dark mt-3">
            Go Home
          </Link>
        </div>
      </Container>
    </motion.div>
  );
};

export default NotFound;