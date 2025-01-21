import Form from "../../components/Form";
import Hero from "../../components/Hero";
import Provinces from "../../components/Provinces";
import { useDispatch, useSelector } from "react-redux";
import { updateCovidProvinceLocal } from "../../features/covidSlice";
import { useEffect } from "react";


function ProvincesCovid(){
    const dispatch = useDispatch();
    const provincesLocal = useSelector((store)=>store.covids.provincesLocal);
    console.log(provincesLocal);
    useEffect(()=>{
        //dispatch state dari movie local
        dispatch(updateCovidProvinceLocal(provincesLocal))
    })
    return (
      // buat state provinces 
      <div>
        < Hero/>
        < Provinces provinces={provincesLocal}/>
        < Form provinces={provincesLocal}/>
      </div>
    );
}

export default ProvincesCovid;