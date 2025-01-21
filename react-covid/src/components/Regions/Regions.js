import Region from "../Region/Region";
import StyledRegions from "./StyledRegions";

function Regions(props) {
  const {covid} = props;
  

  return (
    <StyledRegions>
      <h2>{covid.name}</h2>
           <Region covid={covid.numbers}/>
    </StyledRegions>
  );
}

export default Regions;
