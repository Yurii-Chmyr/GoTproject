import OtherHousesCard from "../../otherHousesCard/OtherHousesCard";
import MainHousesCard from "../../mainHousesCard/MainHousesCard";

const Houses = () => (
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
);
export default Houses;