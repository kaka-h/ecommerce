import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "../features/slice/SliderSlice";

export const store = configureStore({
    reducer: {
        slider: sliderReducer,
    }
})