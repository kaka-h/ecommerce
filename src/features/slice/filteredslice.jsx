import { createSlice } from "@reduxjs/toolkit";
import { StoreData } from "../../assets/data/StoreData";

export const FilteredSlice = createSlice ({
    name: "filtered",
    initialState: {
        filteredProducts: 
            JSON.parse(sessionStorage.getItem('filterData')) || StoreData,
            singleProduct: JSON.parse(sessionStorage.getItem('oneProduct')) || StoreData
    },
    reducers: {
        FilterProduct(state, action) {
            try {
                const filter = StoreData.filter (
                    action.payload.toLowerCase,
                    // console.log(StoreData),
                    (data) => data.type === action.payload
                );
                    state.filteredProducts = filter;
                    console.log('filter', filter)
                    const saveState = JSON.stringify(filter)
                    sessionStorage.setItem('filterData', saveState)
            } catch (error) {
                return error
            }
        },

        singleProduct(state, action) {
            try {
                const oneProduct = StoreData.filter(
                    (data) => data.id === action.payload
                );
                state.singleProduct = oneProduct
                const saveState = JSON.stringify(oneProduct)
                sessionStorage.setItem('oneProduct', saveState)
                // console.log('oneProduct', oneProduct)
            } catch (error) {
                return error
            }
        }
    },
});


export const { FilterProduct , singleProduct } = FilteredSlice.actions
export default FilteredSlice.reducer;