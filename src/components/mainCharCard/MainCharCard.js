import { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getCharacterImage } from '../characterImages/CharacterImages';
import './mainCharStyles.scss';
import DataContext from '../../services/DataContext';
import FavoriteButton from '../favButton/FavButton';
import { motion } from 'framer-motion';
import ImageLoading from '../imageLoading/ImageLoading';

import { useFavorites } from '../../services/FavoritesContext';

const MainCharacters = () => {
  const { characters, loading } = useContext(DataContext);
  const { isFavoriteCharacter, toggleFavoriteCharacter } = useFavorites();

  const selectedNames = [
    'Jon Snow', 'Arya Stark', 'Tyrion Lannister', 'Daenerys Targaryen',
    'Brandon Stark', 'Cersei Lannister', 'Jaime Lannister', 'Melisandre',
    'Samwell Tarly', 'Sansa Stark', 'Davos Seaworth', 'Jorah Mormont'
  ];

  const mainCharacters = characters.filter(char =>
    selectedNames.includes(char.name)
  );



  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container className="py-4">
        <Row xs={2} sm={2} md={3} lg={4} className="g-4 align-items-stretch">
          {mainCharacters.map((char, idx) => (
                <Col key={idx} className="d-flex">
                  <Card className="h-100 w-100 d-flex flex-column pulsing-white-border" style={{ position: 'relative' }}>
                    <FavoriteButton item={{ ...char, image: getCharacterImage(char) }} type="character" />
                     <ImageLoading src={getCharacterImage(char)} alt={char.name || 'Unnamed'} />
                    <Card.Body className="card-body-fixed">
                      <Card.Title>{char.name || 'Unnamed'}</Card.Title>
                      <Card.Text>{char.titles?.[0] || 'No title'}</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>Gender: {char.gender || 'Undefined'}</ListGroup.Item>
                      <ListGroup.Item>Culture: {char.culture || 'Undefined'}</ListGroup.Item>
                      <ListGroup.Item>Actor: {char.playedBy?.[0] || 'Undefined'}</ListGroup.Item>
                    </ListGroup>
                  </Card>
                </Col>
              ))}
        </Row>
      </Container>
    </motion.div>
  );
};

export default MainCharacters;