import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import ThronesService from '../../services/ThronesService';
import RegionDivider from '../regionDivider/RegionDivider';

const EXCLUDE_HOUSES = [
  'House Stark of Winterfell',
  'House Lannister of Casterly Rock',
  "House Baratheon of Storm's End",
  "House Targaryen of King's Landing",
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

const PAGE_SIZE = 50;

const OtherHousesByRegion = () => {
  const [byRegion, setByRegion] = useState({});
  const [visibleCounts, setVisibleCounts] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const service = new ThronesService();

    const load = async () => {
      const all = await service.getAllHouses();
      const candidates = all.filter(h => !EXCLUDE_HOUSES.includes(h.name));
      const groups = {};

      candidates.forEach(house => {
        const region = house.region?.trim() || 'No region';
        if (!groups[region]) groups[region] = [];
        groups[region].push(house);
      });

      setByRegion(groups);

      const initialVisible = {};
      Object.keys(groups).forEach(region => {
        initialVisible[region] = PAGE_SIZE;
      });
      setVisibleCounts(initialVisible);
    };

    load();
  }, []);

  const loadMore = region => {
    setVisibleCounts(prev => ({
      ...prev,
      [region]: (prev[region] || PAGE_SIZE) + PAGE_SIZE
    }));
  };

const sortedRegions = Object.entries(byRegion).sort(([a], [b]) => {
  if (a === 'No region') return 1;
  if (b === 'No region') return -1;
  if (a === 'Beyond the Wall') return 2;
  if (b === 'Beyond the Wall') return -2;

  return a.localeCompare(b);
});

return (
  <Container className="py-4">
    <div className="mb-4 text-center">
      <input
        type="text"
        placeholder="Search houses..."
        className="form-control w-50 mx-auto"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value.toLowerCase())}
      />
    </div>

    {sortedRegions.map(([region, houses]) => {
      const filteredHouses = houses.filter(house =>
        house.name.toLowerCase().includes(searchTerm)
      );

      if (filteredHouses.length === 0) return null;

      return (
        <div key={region} className="mb-5">
          <RegionDivider region={region} />
          <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            {filteredHouses.slice(0, PAGE_SIZE).map((house, idx) => (
              <Col key={idx} className="d-flex">
                <Card className="h-100 w-100">
                  <Card.Body className="house-card-body">
                    <Card.Title>{house.name}</Card.Title>
                    <Card.Text>
                      <strong>Region:</strong> {house.region || 'No region'}<br/>
                      <strong>Words:</strong> {house.words || 'No motto'}<br/>
                      <strong>Seats:</strong> {house.seats.filter(Boolean).join(', ') || 'No seat'}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      Coat of Arms: {house.coatOfArms || 'Not specified'}
                    </small>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>

          {filteredHouses.length > PAGE_SIZE && (
            <div className="text-center mt-3">
              <Button variant="dark" onClick={() => loadMore(region)}>
                Load more...
              </Button>
            </div>
          )}
        </div>
      );
    })}
  </Container>
);
};

export default OtherHousesByRegion;