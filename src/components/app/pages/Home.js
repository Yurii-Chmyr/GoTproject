import SeasonsDescription from "../../seasonsDecsription/SeasonsDecription";
import SliderCarousel from "../../sliderCarousel/sliderCarousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AnimatePresence, motion } from 'framer-motion';


const Home = () => {
  return (
     <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.4 }}
>
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
    </motion.div>
  )
}
export default Home;