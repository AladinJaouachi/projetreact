import { configureStore } from '@reduxjs/toolkit';
import carreducer from "./slice/CarSlice";


export const store = configureStore({
  reducer: {car :carreducer},
})