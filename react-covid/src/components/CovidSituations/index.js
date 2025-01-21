import Regions from "../Regions/Regions";
import StyledCovidSituations from "./StyledCovidSituations";

function CovidSituations(props) {
  const { provinces, title, description} = props;
  return (
    <StyledCovidSituations>
      <h1>Situation by {title}</h1>
        <h3>
          Bacaan Pilihan Covid
        </h3>
      <section>
        <div className="global__container">
          {provinces.map(function (covid,i) {
            return <Regions key={i} covid={covid}  />;
          })}
        </div>
      </section>
    </StyledCovidSituations>
  );
}

export default CovidSituations;
