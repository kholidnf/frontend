import Hero from "../components/Hero";
import { useEffect } from "react";
import axios from "axios";
import Covids from "../components/Covids/Covids";
import CovidSituations from "../components/CovidSituations";
import ENDPOINTS from "../utils/constants/endpoints/endpoint";
import { useDispatch, useSelector } from "react-redux";
import { updateCovidProvinceAPI } from "../features/covidSlice";

function Home() {
  const indonesianAPI = useSelector((store)=>store.covids.provincesAPI)

  const dispatch = useDispatch();

  useEffect(() => {
    //memanggil fungsi getCovidGlobal()
    getCovidGlobal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  async function getCovidGlobal() {
    try {
      const response = await axios.get(ENDPOINTS.GLOBAL);
      const result = response.data;
      dispatch(updateCovidProvinceAPI(result));
      console.log(result.regions);
    } catch (error) {
      console.log("Error fetching global data:", error);
    }
  };

  return (
    <div>
      <Hero />
      {indonesianAPI && (
        <>
        <Covids  covids={indonesianAPI.global} title="Global"/>
        <CovidSituations title="Regions" provinces={indonesianAPI.regions}/>
        </>
      )}
      
    </div>
  );
}

export default Home;