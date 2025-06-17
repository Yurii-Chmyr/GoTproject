import MainCharCard from "../../mainCharCard/MainCharCard";
import OtherCharactersCard from "../../otherCharactersCard/OtherCharactersCard"
import { AnimatePresence, motion } from 'framer-motion';

const Characters = () => {
  return (
     <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.4 }}
>
    <>

<div className="section-divider">
  <span>Main Characters</span>
</div>

    <MainCharCard></MainCharCard>
<div className="section-divider">
  <span>Other Characters</span>
</div>
<OtherCharactersCard></OtherCharactersCard>
    </>
    </motion.div>
  )
}
  
export default Characters;