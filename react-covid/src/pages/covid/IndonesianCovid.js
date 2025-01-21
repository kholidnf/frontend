import { useEffect, useState } from "react";
import Covids from "../../components/Covids/Covids";
import Hero from "../../components/Hero";
import axios from "axios";
import Provinces from "../../components/Provinces";
import ENDPOINTS from "../../utils/constants/endpoints/endpoint";
import { useDispatch, useSelector} from "react-redux";
import { updateCovidProvinceAPI } from "../../features/covidSlice";
function IndonesianCovid(){
  const indonesianAPI = useSelector((store)=>store.covids.provincesAPI)

  const dispatch = useDispatch();

  useEffect(() => {
    //memanggil fungsi getCovidGlobal()
    getCovidIndonesian();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  async function getCovidIndonesian() {
    try {
      const response = await axios.get(ENDPOINTS.INDONESIAN);
      const result = response.data;
      dispatch(updateCovidProvinceAPI(result));
      console.log(result.regions);
    } catch (error) {
      console.log("Error fetching provinces data:", error);
    }
  };

    return(
        <div>
        <Hero />
        {indonesianAPI && (
          <>
            <Covids covids={indonesianAPI.indonesia} title="Indonesia"/> 
            <Provinces provinces={indonesianAPI.regions}/>
          </>
        )}
         
        </div>
    );
}

export default IndonesianCovid;