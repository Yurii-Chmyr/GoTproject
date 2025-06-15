import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useFavorites } from '../../services/FavoritesContext';
import ListGroup from 'react-bootstrap/ListGroup';
import './favoritesPages.scss'
import { useEffect } from 'react';

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

  const renderCharacters = () => {
    if (!favoriteCharacters.length) return <p className="text-white">No favorite characters yet.</p>;

    return (
      <>
        <div className="d-flex justify-content-between align-items-center my-3">
          <h4 className="text-white">Favorite Characters</h4>
          <Button variant="outline-danger" className="btn-white-outline" onClick={clearFavoriteCharacters}>
            Clear all
          </Button>
        </div>
        <Row xs={2} sm={2} md={3} lg={4} className="g-4 align-items-stretch">
          {favoriteCharacters.map((char, idx) => (
            <Col key={idx} className="d-flex">
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
                  <Button variant="outline-danger" size="sm" onClick={() => removeFavoriteCharacter(char.url)}>
                    Remove
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </>
    );
  };

  const renderHouses = () => {
    if (!favoriteHouses.length) return <p className="text-white">No favorite houses yet.</p>;

    return (
      <>
        <div className="d-flex justify-content-between align-items-center my-4">
          <h4 className="text-white">Favorite Houses</h4>
          <Button variant="outline-danger" className="btn-white-outline" onClick={clearFavoriteHouses}>
            Clear all
          </Button>
        </div>
        <Row xs={2} sm={2} md={3} lg={4} className="g-4">
          {favoriteHouses.map((house, idx) => (
            <Col key={idx} className="d-flex">
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
                <Card.Footer className="d-flex justify-content-between align-items-center">
                  <small className="text-muted">
                    Coat of Arms: {house.coatOfArms || 'Not specified'}
                  </small>
                  <Button variant="outline-danger" size="sm" onClick={() => removeFavoriteHouse(house.url)}>
                    Remove
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </>
    );
  };

  return (
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
  );
};

export default FavoritesPage;