import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import gotImage1 from '../../resources/img/slidergot1.jpg';
import gotImage2 from '../../resources/img/slidergot2.jpg'
import gotImage3 from '../../resources/img/slidergot3.jpg'
import gotImage4 from '../../resources/img/slidergot4.jpg'
import gotImage5 from '../../resources/img/slidergot5.jpg'
import gotImage6 from '../../resources/img/slidergot6.jpg'
import gotImage7 from '../../resources/img/slidergot7.jpg'
import './sliderCarouselStyles.scss';



function SliderCarousel() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
    <Carousel style={{ maxHeight: '500px' }}>
      <Carousel.Item>
        <img src={gotImage2} className="d-block w-100 carousel-image" style={{ maxHeight: '500px', objectFit: 'cover' }} text="First slide" alt="slide" />
        <Carousel.Caption>
          <h3>“The man who passes the sentence should swing the sword.”</h3>
          <p> — Eddard Stark</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={gotImage1} className="d-block w-100 carousel-image" style={{ maxHeight: '500px', objectFit: 'cover' }} text="Second slide" alt="slide" />
        <Carousel.Caption>
          <h3>“When you play the game of thrones, you win or you die.”</h3>
          <p>— Cersei Lannister</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={gotImage3} className="d-block w-100 carousel-image" style={{ maxHeight: '500px', objectFit: 'cover' }} text="Third slide" alt="slide" />
        <Carousel.Caption>
          <h3>“A dragon is not a slave.”</h3>
          <p> — Daenerys Targaryen </p>
        </Carousel.Caption>
      </Carousel.Item>
        <Carousel.Item>
        <img src={gotImage4} className="d-block w-100 carousel-image" style={{ maxHeight: '500px', objectFit: 'cover' }} text="Third slide" alt="slide" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
        <Carousel.Item>
        <img src={gotImage6} className="d-block w-100 carousel-image" style={{ maxHeight: '500px', objectFit: 'cover' }} text="Third slide" alt="slide" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
        <Carousel.Item>
        <img src={gotImage7} className="d-block w-100 carousel-image" style={{ maxHeight: '500px', objectFit: 'cover' }} text="Third slide" alt="slide" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default SliderCarousel;