import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ThronesService from '../../services/ThronesService'; // Шлях до твого сервісу
import { getHouseImage } from '../housesImages/HousesImages';
import './mainHousesStyles.scss';


const mainHousesFullNames = [
  'House Stark of Winterfell',
  'House Lannister of Casterly Rock',
  'House Baratheon of Storm\'s End',
  'House Targaryen of King\'s Landing',
  'House Tyrell of Highgarden',
  'House Greyjoy of Pyke',
  'House Nymeros Martell of Sunspear',
  'House Arryn of the Eyrie',
  'House Tully of Riverrun',
  'House Bolton of the Dreadfort',
  'House Frey of the Twins',
  'House Mormont of Bear Island',
  'House Royce of Runestone'
  
];

const MainHousesCard = () => {
  const [mainHouses, setMainHouses] = useState([]);
  const service = new ThronesService();

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const all = await service.getAllHouses();
        const filtered = all.filter(house =>
          mainHousesFullNames.includes(house.name)
        );
        setMainHouses(filtered);
      } catch (err) {
        console.error('Cant load houses', err);
      }
    };

    fetchHouses();
  }, []);

  return (
    <Container className="py-4">
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {mainHouses.map((house, idx) => (
          <Col key={idx} className="d-flex">
            <Card className="house-card w-100 pulsing-gold-border">
              <Card.Img
                variant="top"
                src={getHouseImage(house)}
                className="house-card-img"
              />
              <Card.Body className="house-card-body">
                <Card.Title className="house-card-title">{house.name}</Card.Title>
                <Card.Text>
                  <strong>Region:</strong> {house.region || 'Unknown'}<br />
                  <strong>Words:</strong> {house.words || 'No motto'}<br />
                  <strong>Seats:</strong> {house.seats.filter(Boolean).join(', ') || 'No seat'}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MainHousesCard;