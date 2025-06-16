import { Container, Row, Col, Image, Button } from 'react-bootstrap';

const SeriesList = ({ episodes, seasonName, onBack }) => {
  return (
    <Container className="seasons-description-container">
      <div className="mb-4">
        <Button variant="dark" onClick={onBack}>
          ← Back to Seasons
        </Button>
      </div>
      <h2 className="text-white mb-4">{seasonName} - Episodes</h2>
      {episodes.map((episode, index) => (
        <Row className="align-items-center my-4" key={index}>
          <Col md={7}>
            {episode.episodeImage ? (
              <Image
                src={episode.episodeImage}
                alt={episode.episodeName}
                className="season-image"
                fluid
                style={{ maxHeight: '400px', objectFit: 'cover', width: '100%' }}
              />
            ) : (
              <div style={{ height: '400px', backgroundColor: '#333' }}></div>
            )}
          </Col>
          <Col md={5}>
            <div className="season-text text-white">
              <h3>{episode.episodeName}</h3>
              <p>{episode.episodeDescription}</p>
            </div>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default SeriesList;