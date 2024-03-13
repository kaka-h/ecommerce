import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice ({
    name: "cart",
    initialState: {
        cart: [],
        amount: '',
        totalAmount: '',
        totalPrice: '',
    },
    reducers: {
        addToCart(state, action) {
            const productId = action.payload
            try {
                const product = state.cart.find((item) => item.id === productId.id && item.size === productId.size && item.color === productId.color)
                if (product) {
                    product.amount++;
                    product.totalPrice += productId.price
                    state.totalAmount++
                    state.totalPrice += productId.price

                } else {
                    state.cart.push({
                        id: productId.id,
                        price: productId.price,
                        size: productId.size,
                        amount: 1,
                        color: productId.color,
                        totalPrice: productId.price,
                        name: productId.name,
                    });
                    state.totalAmount++;
                    state.totalPrice += productId.price
                }
            } catch(error) {
                return error
            }
            console.log(productId)
        },
        
    }
});

export const { addToCart } = CartSlice.actions
export default CartSlice.reducer