import MainCharCard from "../../mainCharCard/MainCharCard";
import OtherCharactersCard from "../../otherCharactersCard/OtherCharactersCard"

const Characters = () => {
  return (
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
  )
}
  
export default Characters;