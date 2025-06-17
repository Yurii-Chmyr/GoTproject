import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useFavorites } from '../../services/FavoritesContext';
import ListGroup from 'react-bootstrap/ListGroup';
import './favoritesPages.scss'
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const FavoritesPage = () => {
  const {
    favoriteCharacters = [],
    favoriteHouses = [],
    removeFavoriteCharacter,
    removeFavoriteHouse,
    clearFavoriteCharacters,
    clearFavoriteHouses,
  } = useFavorites();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [removingAll, setRemovingAll] = useState(false);
  const [visibleCharacters, setVisibleCharacters] = useState(favoriteCharacters);
  const [visibleHouses, setVisibleHouses] = useState(favoriteHouses);
  
  useEffect(() => {
  setVisibleCharacters(favoriteCharacters);
}, [favoriteCharacters]);

  useEffect(() => {
  setVisibleHouses(favoriteHouses);
}, [favoriteHouses]);

  const handleClearAllHouses = () => {
  setVisibleHouses([]);
  setTimeout(() => {
    clearFavoriteHouses();
  }, 300);
};

  const handleClearAllCharacters = () => {
  setVisibleCharacters([]); 
  setTimeout(() => {
    clearFavoriteCharacters(); 
  }, 300); 
};

  const renderCharacters = () => {
    if (!favoriteCharacters.length) return <p className="text-white">No favorite characters yet.</p>;

    return (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
      <>
        <div className="d-flex justify-content-between align-items-center my-3">
          <h4 className="text-white">Favorite Characters: {favoriteCharacters.length}</h4>
          <Button variant="outline-danger" className="btn-white-outline" onClick={handleClearAllCharacters}>
            Clear all
          </Button>
        </div>
        <Row xs={2} sm={2} md={3} lg={4} className="g-4 align-items-stretch">
          {!removingAll && (
          <AnimatePresence>
          {visibleCharacters.map((char, idx) => (
            <motion.div
                key={char.url}
                className="col d-flex"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.3 } }}
                layout
            >
            
              <Card className="h-100 d-flex flex-column" style={{ width: '100%' }}>
                <Card.Img variant="top" src={char.image || '/default-character.jpg'} />
                <Card.Body className="card-body-fixed">
                  <Card.Title>{char.name}</Card.Title>
                  <Card.Text>{char.titles?.[0] || 'No title'}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush mt-auto">
                  <ListGroup.Item>Gender: {char.gender || 'Undefined'}</ListGroup.Item>
                  <ListGroup.Item>Culture: {char.culture || 'Undefined'}</ListGroup.Item>
                  <ListGroup.Item>Actor: {char.playedBy?.[0] || 'Undefined'}</ListGroup.Item>
                </ListGroup>
                <Card.Footer>
                  <Button variant="outline-danger" className="remove-btn d-block mx-auto" size="sm" onClick={() => removeFavoriteCharacter(char.url)}>
                    Remove
                  </Button>
                </Card.Footer>
              </Card>
            </motion.div>
          ))} </AnimatePresence>
          )}
        </Row>
      </>
      </motion.div>
    );
  };

  const renderHouses = () => {
    if (!favoriteHouses.length) return <p className="text-white">No favorite houses yet.</p>;

    return (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
      <>
        <div className="d-flex justify-content-between align-items-center my-4">
          <h4 className="text-white">Favorite Houses: {favoriteHouses.length}</h4>
          <Button variant="outline-danger" className="btn-white-outline" onClick={handleClearAllHouses}>
            Clear all
          </Button>
        </div>
        <Row xs={2} sm={2} md={3} lg={4} className="g-4">
          {!removingAll && (
          <AnimatePresence>
          {visibleHouses.map((house, idx) => (
            <motion.div
                key={house.url}
                className="col d-flex"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.3 } }}
                layout
            >
              <Card className="h-100 w-100">
                {house.image ? (
                  <Card.Img variant="top" src={house.image} alt={house.name} />
                ) : (
                  <div
                    style={{
                      height: '200px',
                      backgroundColor: '#eee',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span style={{ color: '#888' }}>No image available</span>
                  </div>
                )}
                <Card.Body className="house-card-body">
                  <Card.Title>{house.name}</Card.Title>
                  <Card.Text>
                    <strong>Region:</strong> {house.region || 'No region'}
                    <br />
                    <strong>Words:</strong> {house.words || 'No motto'}
                    <br />
                    <strong>Seats:</strong> {house.seats?.filter(Boolean).join(', ') || 'No seat'}
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="align-items-center">
                  <small className="text-muted">
                    Coat of Arms: {house.coatOfArms || 'Not specified'}
                  </small>
                  <span className="text-muted">
                <Button variant="outline-danger" className="remove-btn d-block mx-auto mt-1" size="sm" onClick={() => removeFavoriteHouse(house.url)}>
                    Remove
                  </Button>
                  </span>
                </Card.Footer>
              </Card>
            </motion.div>
          ))} </AnimatePresence>
          ) }
        </Row>
      </>
      </motion.div>
    );
  };

  return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Container className="py-4 flex-grow-1" style={{ paddingBottom: '100px' }}>
        <div className="section-divider" style={{marginBottom: '50px'}}>
        <span>My Favorites</span>
        </div>
        {renderCharacters()}
        <hr />
        {renderHouses()}
      </Container>


    </div>
    </motion.div>
  );
};

export default FavoritesPage;