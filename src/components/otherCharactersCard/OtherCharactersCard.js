import { useContext, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { getCharacterImage } from '../characterImages/CharacterImages';
import DataContext from '../../services/DataContext';
import './otherCharactersStyle.scss';
import FavoriteButton from '../favButton/FavButton';

import { useFavorites } from '../../services/FavoritesContext'; 

const OtherCharactersCard = () => {
  const { characters, loading } = useContext(DataContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCount, setVisibleCount] = useState(52);
  const { isFavoriteCharacter, toggleFavoriteCharacter } = useFavorites(); 

  const mainCharacters = [ 'Jon Snow', 'Arya Stark', 'Tyrion Lannister', 'Daenerys Targaryen',
    'Brandon Stark', 'Cersei Lannister', 'Jaime Lannister', 'Melisandre',
    'Samwell Tarly', 'Sansa Stark', 'Davos Seaworth', 'Jorah Mormont' ];

  if (loading) return <div className="text-center my-5">Loading characters...</div>;

  const otherCharacters = characters.filter(char =>
    char.name &&
    !mainCharacters.includes(char.name) &&
    char.playedBy?.[0]
  );
  const filteredCharacters = otherCharacters.filter(char =>
    char.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const visibleCharacters = filteredCharacters.slice(0, visibleCount);

  const loadMore = () => setVisibleCount(prev => prev + 50);

  return (
    <Container className="py-4">
      <div className="mb-4 text-center">
        <input type="text" placeholder="Search characters..." className="form-control w-50 mx-auto"
          value={searchTerm} onChange={e => setSearchTerm(e.target.value.toLowerCase())} />
      </div>

      <Row xs={2} sm={2} md={3} lg={4} className="g-4 align-items-stretch">
        {visibleCharacters.map((char, idx) => (
          <Col key={idx} className="d-flex">
            <Card className="h-100 w-100 d-flex flex-column" style={{ position: 'relative' }}>

<FavoriteButton item={{ ...char, image: getCharacterImage(char) }} type="character" />

              <Card.Img variant="top" src={getCharacterImage(char)} />
              <Card.Body className="card-body-fixed">
                <Card.Title>{char.name}</Card.Title>
                <Card.Text>{char.titles?.[0] || 'No title'}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush mt-auto">
                <ListGroup.Item>Gender: {char.gender || 'Undefined'}</ListGroup.Item>
                <ListGroup.Item>Culture: {char.culture || 'Undefined'}</ListGroup.Item>
                <ListGroup.Item>Actor: {char.playedBy?.[0] || 'Undefined'}</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        ))}
      </Row>

      {visibleCount < filteredCharacters.length && (
        <div className="text-center mt-4">
          <Button variant="dark" onClick={loadMore}>Load more</Button>
        </div>
      )}
    </Container>
  );
};

export default OtherCharactersCard;