
import { createSlice } from "@reduxjs/toolkit";
import { carData } from "../../components/Data";
const initialState = { carData };

export const CarSlice = createSlice({
    name:"car",
    initialState,
    reducers :{

        updateCar:(state,action)=>{
            const indexcarupdated =state.carData.findIndex(el=>el.id === action.payload.id )
            state.carData[indexcarupdated] = action.payload.car 
    },
    addCar : (state, action)=>{
        state.carData = [...state.carData, action.payload]
    },
}});

    
export const { updateCar,addCar} = CarSlice.actions;
export default CarSlice.reducer;