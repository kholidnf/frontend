import AngkaCovid from "../ui/AngkaCovid";
import StyledCovid from "./StyledCovid";

function Covid(props) {
  const { covid } = props;
  
  const number = covid.total;

  return (
    <StyledCovid>
        <h2>{covid.status}</h2>
        <AngkaCovid status={covid.status}>{parseInt(number).toLocaleString()}</AngkaCovid>
    </StyledCovid>
  );
}

export default Covid;
