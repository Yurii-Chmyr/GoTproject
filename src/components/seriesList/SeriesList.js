import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';



const SeriesList = ({ episodes, seasonName, onBack }) => {
  return (
  <motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
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
    </motion.div>
  );
};


export default SeriesList;