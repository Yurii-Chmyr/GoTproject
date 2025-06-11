import { Container, Row, Col, Image } from 'react-bootstrap';
import './SeasonsDescription.scss';
import gotImage1 from '../../resources/img/season1pic.jpg';
import gotImage2 from '../../resources/img/season2pic.jpg';
import gotImage3 from '../../resources/img/season3pic.jpg';
import gotImage4 from '../../resources/img/season4pic.jpg';
import gotImage5 from '../../resources/img/season5pic.jpg';
import gotImage6 from '../../resources/img/season6pic.jpg';
import gotImage7 from '../../resources/img/season7pic.jpg';
import gotImage8 from '../../resources/img/season8pic.jpg';



const SeasonsDescription = () => {
    const seasonsData = [
        {seasonName: 'Season 1', seasonDescription: "Westeros is gripped by political intrigue following the sudden death of the King's chief advisor. The Stark family is pulled into a dangerous game that will set the stage for the battles to come.", seasonImage: gotImage1},
        {seasonName: 'Season 2', seasonDescription: "As the throne becomes contested, several claimants rise to power, plunging the realm into chaos. Meanwhile, across the sea, a young heir to an ancient dynasty begins to gain influence.", seasonImage: gotImage2},
        {seasonName: 'Season 3', seasonDescription: "Alliances are forged and betrayed as families wage war for control. In the North, a growing threat begins to stir, largely ignored by the rest of the realm.", seasonImage: gotImage3},
        {seasonName: 'Season 4', seasonDescription: "Events in the capital reach a turning point with shocking trials and duels. In the East, a rising leader faces challenges while liberating enslaved cities.", seasonImage: gotImage4},
        {seasonName: 'Season 5', seasonDescription: "Religious movements begin reshaping power in the capital. Northern territories fall into turmoil, while leadership in the East is tested by rebellion and unrest.", seasonImage: gotImage5},
        {seasonName: 'Season 6', seasonDescription: "Lost hopes resurface as long-held secrets come to light. Major battles unfold, shifting the balance of power, and the past begins to define the future of Westeros.", seasonImage: gotImage6},
        {seasonName: 'Season 7', seasonDescription: "The threat beyond the Wall grows undeniable. Former enemies consider uneasy alliances as ancient forces move toward confrontation.", seasonImage: gotImage7},
        {seasonName: 'Season 8', seasonDescription: "The saga reaches its epic conclusion. Monumental battles, difficult choices, and the fate of the Seven Kingdoms are decided once and for all.", seasonImage: gotImage8}
    ]
return (
<Container className="seasons-description-container">
      {seasonsData.map((season, index) => (
        <Row className="align-items-center my-5" key={index}>
          <Col md={7}>
            <Image
              src={season.seasonImage}
              alt={season.seasonName}
              className="season-image"
              fluid
              style={{ maxHeight: '500px', objectFit: 'cover', width: '100%' }}
            />
          </Col>
          <Col md={5}>
            <div className="season-text text-white">
              <h2>{season.seasonName}</h2>
              <p>{season.seasonDescription}</p>
            </div>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default SeasonsDescription;