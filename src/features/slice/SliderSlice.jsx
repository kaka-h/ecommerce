import { createSlice} from "@reduxjs/toolkit";
import { DummyData } from "../../assets/data/DummyData";

export const SliderSlice = createSlice({
    name: "slider",
    initialState: {
        value: 0,
        length: DummyData.length,
    },
    reducers: {
        nextSlide(state, action ) {
            // console.log('ACTION', action)
            // console.log('STATE', state)
            state.value = action.payload > state.length -1 ? 0 : action.payload
        },
        prevSlide(state, action) {
            state.value = action.payload < 0 ? state.length -1 : action.payload
        },
        dotSlide(state, action) {
            const slideDot = action.payload
            state.value = slideDot
        },  
    }
});

export const { nextSlide, prevSlide, dotSlide } = SliderSlice.actions;

export default SliderSlice.reducer