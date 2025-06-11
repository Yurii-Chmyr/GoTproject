import SeasonsDescription from "../../seasonsDecsription/SeasonsDecription";
import SliderCarousel from "../../sliderCarousel/sliderCarousel";
import 'bootstrap/dist/css/bootstrap.min.css';



const Home = () => {
  return (
    <>
            <main>
                <SliderCarousel/>
              <div className="section-divider">
                 <span>Seasons</span>
              </div>
              <div style={{ marginTop: '100px' }}>
                   <SeasonsDescription></SeasonsDescription>
                </div>
            </main>
    </>
  )
}
export default Home;