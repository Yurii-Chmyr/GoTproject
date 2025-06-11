import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ThronesService from '../../services/ThronesService';
import { getCharacterImage } from '../characterImages/CharacterImages'
import './mainCharStyles.scss';

const MainCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const selectedNames = ['Jon Snow', 'Arya Stark', 'Tyrion Lannister', 'Daenerys Targaryen', 'Brandon Stark', 'Cersei Lannister', 'Jaime Lannister', 'Melisandre', 'Samwell Tarly', 'Sansa Stark', 'Davos Seaworth', 'Jorah Mormont', ]; // <-- змінюй список тут

  useEffect(() => {
    const service = new ThronesService();

    const fetchData = async () => {
      const allWithActors = await service.getAllCharacters();
      const filtered = allWithActors.filter(char => selectedNames.includes(char.name));
      setCharacters(filtered);
    };

    fetchData();
  }, []);

  return (
    <Container className="py-4">
      <Row xs={1} sm={2} md={3} lg={4} className="g-4 align-items-stretch">
        {characters.map((char, idx) => (
          <Col key={idx} className="d-flex">
            <Card className="h-100 d-flex flex-column pulsing-white-border" style={{ width: '100%' }}>
              <Card.Img variant="top" src={getCharacterImage(char)} />
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
  );
};

export default MainCharacters;