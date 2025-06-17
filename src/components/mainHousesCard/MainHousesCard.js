import React, { useContext } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { getHouseImage } from '../housesImages/HousesImages';
import DataContext from '../../services/DataContext';
import './mainHousesStyles.scss';
import FavoriteButton from '../favButton/FavButton';
import { motion } from 'framer-motion';
import ImageLoading from '../imageLoading/ImageLoading';


import { useFavorites } from '../../services/FavoritesContext'; 

const mainHousesFullNames = [ 'House Stark of Winterfell',
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
  'House Royce of Runestone' ];

const MainHousesCard = () => {
  const { houses, loading } = useContext(DataContext);
  const { isFavoriteHouse, toggleFavoriteHouse } = useFavorites(); 

  if (loading) return <div className="text-center my-5">Loading houses...</div>;

  const mainHouses = houses.filter(house =>
    mainHousesFullNames.includes(house.name)
  );


  return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
>
    <Container className="py-4">
      <Row xs={2} sm={2} md={3} lg={4} className="g-4">
        {mainHouses.map((house, idx) => (
          <Col key={idx} className="d-flex">
            <Card className="house-card w-100 pulsing-gold-border" style={{ position: 'relative' }}>
              <FavoriteButton item={{ ...house, image: getHouseImage(house) }} type="house" />
              <ImageLoading className="house-card-img" src={getHouseImage(house)} alt={house.name || 'Unnamed'} />
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
    </motion.div>
  );
};

export default MainHousesCard;