import { useEffect, useState, useRef } from 'react';
import { Container, Row, Card, Button, ListGroup } from 'react-bootstrap';
import { useFavorites } from '../../services/FavoritesContext';
import { motion, AnimatePresence } from 'framer-motion';
import './favoritesPages.scss';

const TOAST_DURATION = 5000;

const FavoritesPage = () => {
  const {
    favoriteCharacters,
    favoriteHouses,
    toggleFavoriteCharacter,
    toggleFavoriteHouse,
    removeFavoriteCharacter,
    removeFavoriteHouse,
    clearFavoriteCharacters,
    clearFavoriteHouses,
    addFavoriteCharacter,
    addFavoriteHouse,
  } = useFavorites();

  const [visibleCharacters, setVisibleCharacters] = useState(favoriteCharacters);
  const [visibleHouses, setVisibleHouses] = useState(favoriteHouses);
   const [isMobile, setIsMobile] = useState(false);
   
   useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();

    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const [toast, setToast] = useState(null); // {type, action, items, visible}
  const undoTimeoutRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setVisibleCharacters(favoriteCharacters);
  }, [favoriteCharacters]);

  useEffect(() => {
    setVisibleHouses(favoriteHouses);
  }, [favoriteHouses]);

  
  const handleRemoveCharacter = (url) => {
    const removedItems = visibleCharacters.filter(c => c.url === url);
    setVisibleCharacters(prev => prev.filter(c => c.url !== url));
    removeFavoriteCharacter(url);

    showUndoToast('Character removed', 'character', removedItems, 'remove');
  };

  
  
     const handleClearAllCharacters = () => {
    if (visibleCharacters.length === 0) return;
    const removedItems = [...visibleCharacters];
    setVisibleCharacters([]);
    clearFavoriteCharacters();

    showUndoToast('All characters cleared', 'character', removedItems, 'clear');
  };


  
  const handleRemoveHouse = (url) => {
    const removedItems = visibleHouses.filter(h => h.url === url);
    setVisibleHouses(prev => prev.filter(h => h.url !== url));
    removeFavoriteHouse(url);

    showUndoToast('House removed', 'house', removedItems, 'remove');
  };

  
  const handleClearAllHouses = () => {
    if (visibleHouses.length === 0) return;
    const removedItems = [...visibleHouses];
    setVisibleHouses([]);
    clearFavoriteHouses();

    showUndoToast('All houses cleared', 'house', removedItems, 'clear');
  };

  
  const showUndoToast = (message, type, items, action) => {
    setToast({ message, type, items, action });

    if (undoTimeoutRef.current) {
      clearTimeout(undoTimeoutRef.current);
    }

    undoTimeoutRef.current = setTimeout(() => {
      setToast(null);
    }, TOAST_DURATION);
  };

  
   const handleUndo = () => {
    if (!toast) return;
    clearTimeout(undoTimeoutRef.current);

    if (toast.type === 'character') {
      setVisibleCharacters(prev => [...prev, ...toast.items]);
      toast.items.forEach(item => addFavoriteCharacter(item));
    } else if (toast.type === 'house') {
      setVisibleHouses(prev => [...prev, ...toast.items]);
      toast.items.forEach(item => addFavoriteHouse(item));
    }
    setToast(null);
  };

  
    const renderCharacters = () => {
    if (!visibleCharacters.length) return <p className="text-white">No favorite characters yet.</p>;

    return (
      <>
        <div className="d-flex justify-content-between align-items-center my-3">
          <h4 className="text-white">Favorite Characters: {visibleCharacters.length}</h4>
          <Button variant="outline-danger" className="btn-white-outline" onClick={handleClearAllCharacters}>
            Clear all
          </Button>
        </div>
        <Row xs={2} sm={2} md={3} lg={4} className="g-4 align-items-stretch">
          <AnimatePresence>
            {visibleCharacters.map((char) => (
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
                    <Button variant="outline-danger" className="remove-btn d-block mx-auto" size="sm" onClick={() => handleRemoveCharacter(char.url)}>
                      Remove
                    </Button>
                  </Card.Footer>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </Row>
      </>
    );
  };

  
  const renderHouses = () => {
    if (!visibleHouses.length) return <p className="text-white">No favorite houses yet.</p>;

    return (
      <>
        <div className="d-flex justify-content-between align-items-center my-4">
          <h4 className="text-white">Favorite Houses: {visibleHouses.length}</h4>
          <Button variant="outline-danger" className="btn-white-outline" onClick={handleClearAllHouses}>
            Clear all
          </Button>
        </div>
        <Row xs={2} sm={2} md={3} lg={4} className="g-4">
          <AnimatePresence>
            {visibleHouses.map((house) => (
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
                    <small className="text-muted">Coat of Arms: {house.coatOfArms || 'Not specified'}</small>
                    <span className="text-muted">
                      <Button variant="outline-danger" className="remove-btn d-block mx-auto mt-1" size="sm" onClick={() => handleRemoveHouse(house.url)}>
                        Remove
                      </Button>
                    </span>
                  </Card.Footer>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </Row>
      </>
    );
  };

  return (
    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Container className="py-4 flex-grow-1" style={{ paddingBottom: '100px' }}>
          <div className="section-divider" style={{ marginBottom: '50px' }}>
            <span>My Favorites</span>
          </div>
          {renderCharacters()}
          <hr />
          {renderHouses()}
        </Container>

        
        <AnimatePresence>
  {toast && (
    <div
      style={{
        position: 'fixed',
        left: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        pointerEvents: 'none',
        zIndex: 1000,
        bottom: isMobile ? 'auto' : 50,
        top: isMobile ? 10 : 'auto',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.3 }}
        style={{
          backgroundColor: '#212529',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '5px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
          maxWidth: '90vw',
          width: 'auto',
          pointerEvents: 'auto',
          display: 'flex',
          alignItems: 'center',
          gap: '15px',
          fontSize: '1rem',
          lineHeight: 1.4,
          textAlign: 'center',
        }}
      >
        <span>{toast.message}</span>
        <Button className="undo-button" onClick={handleUndo}>
          Undo
        </Button>
      </motion.div>
    </div>
  )}
</AnimatePresence>
      </div>
    </motion.div>
  );
};

export default FavoritesPage;