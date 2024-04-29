import { createSlice } from "@reduxjs/toolkit";
import { StoreData } from "../../assets/data/StoreData";

export const FilteredSlice = createSlice ({
    name: "filtered",
    initialState: {
        filteredProducts: 
            JSON.parse(sessionStorage.getItem('filterData')) || StoreData,
            singleProduct: JSON.parse(sessionStorage.getItem('oneProduct')) || StoreData,
            error: false
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
                    // console.log('filter', filter)
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
        },
        filterGender(state, action) {
            try{
                const gender = state.filteredProducts.filter(
                    (data) => data.gender === action.payload
                )
                state.error = false;
                state.filteredProducts = gender;
                const oneGenderType = gender.length > 0;
                if(oneGenderType) {
                    state.error = false
                    const saveState = JSON.stringify(gender)
                    sessionStorage.setItem('filterData', saveState)
                } else {
                    state.error = true
                    state.filteredProducts = []
                }
            } catch(error) {
                return error
            }
        },
        sortByPrice(state) {
            try {
                const price = state.filteredProducts.sort(
                    (a, b) => a.price > b.price ? -1 : 1
                );
                state.filteredProducts = price
                let count = price.length
                if (count > 0) {
                    const noError = true
                    state.error = noError
                    if(!noError) {
                        state.filteredProducts = price
                        const saveState = JSON.stringify(price)
                        sessionStorage.setItem('filterData', saveState)
                    }
                } else {
                    state.error = true
                    state.filteredProducts = []
                }
            } catch (error) {
                return error
            }
        },
        filterByColor(state, action) {
            try {
                const color = state.filteredProducts.filter(
                    (data) => data.color.includes(action.payload)
                )
                state.error = false;
                state.filteredProducts = color;
                const oneColorType = color.length <= 0;
                if(oneColorType) {
                    state.error = true
                    state.filteredProducts = []
                } else {
                    state.error = false
                    state.filteredProducts = color
                    const saveState = JSON.stringify(color)
                    sessionStorage.setItem("filterData", saveState)
                }
            } catch (error) {
                return error
            }
        },
        filterBySize (state, action) {
            try {
                const size = state.filteredProducts.filter(
                    (data) => data.size.includes(action.payload)
                )
                state.error = false;
                state.filteredProducts = size
                const oneSizeType = size.length <= 0;
                if(oneSizeType) {
                    state.error = true
                    state.filteredProducts = []
                } else {
                    state.error = false
                    state.filteredProducts = size
                    const saveState = JSON.stringify(size)
                    sessionStorage.setItem("filterData", saveState)
                }
            } catch (error) {
                return error
            }
        }
        // filterBySize(state, action) {
        //     try {
        //         const size = state.filteredProducts.filter(
        //             (data) => data.size.includes(action.payload)
        //         );
        
        //         if (size.length <= 0) {
        //             return {
        //                 ...state,
        //                 error: true,
        //                 filteredProducts: [],
        //             };
        //         } else {
        //             const saveState = JSON.stringify(size);
        //             sessionStorage.setItem("filterData", saveState);
        //             return {
        //                 ...state,
        //                 error: false,
        //                 filteredProducts: size,
        //             };
        //         }
        //     } catch (error) {
        //         console.error("Error in filterBySize:", error);
        //         return {
        //             ...state,
        //             error: true,
        //             filteredProducts: [],
        //         };
        //     }
        // }
        
    },
});


export const { FilterProduct , singleProduct, filterGender, sortByPrice, filterByColor, filterBySize } = FilteredSlice.actions
export default FilteredSlice.reducer;