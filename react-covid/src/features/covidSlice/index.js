import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constants/provinces";
export const covidSlice = createSlice({
    name: 'covid slice',
    initialState: {
      provincesLocal: data.provinces,
      provincesAPI: '',
    },
    reducers: {
      updateCovidProvinceLocal: (state, action) => {
        state.provincesLocal = action.payload;
      },
      updateCovidProvinceAPI: (state, action) => {
        state.provincesAPI = action.payload;
      },
      addForm: (state, action) => {
        const { kota, status, jumlah } = action.payload;
        state.provincesLocal[kota] = {
          ...state.provincesLocal[kota],
          [status]: state.provincesLocal[kota][status] + parseInt(jumlah),
        };
      }, 
        

    }
  });
  
export const { updateCovidProvinceLocal, updateCovidProvinceAPI, addForm} = covidSlice.actions
export default covidSlice.reducer
