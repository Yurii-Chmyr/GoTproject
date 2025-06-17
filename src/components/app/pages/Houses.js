import OtherHousesCard from "../../otherHousesCard/OtherHousesCard";
import MainHousesCard from "../../mainHousesCard/MainHousesCard";
import { AnimatePresence, motion } from 'framer-motion';

const Houses = () => (
  <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.4 }}
>
  <>
  <div className="section-divider">
  <span>Main Houses</span>
</div>
<MainHousesCard></MainHousesCard>
<div className="section-divider">
  <span>Other Houses</span>
</div>
<OtherHousesCard></OtherHousesCard>
</>
</motion.div>
);
export default Houses;