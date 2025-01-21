import Covid from "../Covid/Covid";
import StyledCovids from "./StyledCovids";

function Covids(props) {
  const {covids, title } = props;
  return (
    <StyledCovids>
      <section >
        <h1 >{title} Situation</h1>
        <h3 >
          Data Covid Berdasarkan {title}
        </h3>
        <div className="global__container">
          {covids?.map(function (covid, index) {
            return <Covid key={index} covid={covid} />;
          })}
        </div>
      </section>
    </StyledCovids>
  );
}

export default Covids;
