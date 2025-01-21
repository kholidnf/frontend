import { useState } from "react";
import AngkaCovid from "../ui/AngkaCovid";
import StyledRegion from "./StyledRegion";
import iconMask from "./icon/mask.png";
import recoveredMask from "./icon/recovered.png";
import deathMask from "./icon/death.png";
function Region(props) {
  const { confirmed, recovered, death } = props.covid;
  return (
    <StyledRegion>
      <div className="format_body">
        <div className="info">
          <p>Confirmed</p>
          <AngkaCovid status="confirmed">{confirmed.toLocaleString()}</AngkaCovid>
        </div>
        <div className="icon">
          <img src={iconMask} alt="placeholder" />
        </div>
      </div>
      {/* --------- */}
      <div className="format_body">
        <div className="info">
          <p>Recovered</p>
          <AngkaCovid status="recovered">{recovered.toLocaleString()}</AngkaCovid>
        </div>
        <div className="icon">
          <img src={recoveredMask} alt="recovered" />
        </div>
      </div>
      {/* --------- */}
      <div className="format_body">
        <div className="info">
          <p>Death</p>
          <AngkaCovid status="death">{death.toLocaleString()}</AngkaCovid>
        </div>
        <div className="icon">
          <img src={deathMask} alt="death" />
        </div>
      </div>
    </StyledRegion>
  );
}

export default Region;
