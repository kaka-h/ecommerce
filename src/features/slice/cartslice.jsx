import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice ({
    name: "cart",
    initialState: {
        cart: [],
        amount: 0,
        totalAmount: 0,
        totalPrice: 0,
    },
    reducers: {
        addToCart(state, action) {
            const productId = action.payload
            try {
                const exist = state.cart.find((item) => 
                item.id === productId.id && 
                item.size === productId.size && 
                item.color === productId.color)

                if (exist) {
                    exist.amount++;
                    exist.totalPrice += productId.price
                    state.totalAmount++
                    state.totalPrice += productId.price

                } else {
                    state.cart.push({
                        id: productId.id,
                        price: productId.price,
                        size: productId.size,
                        amount: 1,
                        color: productId.color,
                        image: productId.image,
                        totalPrice: productId.price,
                        name: productId.name,
                        text: productId.text
                    });
                    state.totalAmount++;
                    state.totalPrice += productId.price
                }
            } catch(error) {
                return error
            }
            console.log(productId)
        },
        removeFromCart(state, action) {
            const productId = action.payload
            try {
                const exist = state.cart.find((item) => 
                item.id === productId.id && 
                item.size === productId.size && 
                item.color === productId.color)

                if (exist.amount === 1) {
                    state.cart = state.cart.filter((item) => 
                    item.id !== productId.id || 
                    item.size !== productId.size ||
                    item.color !== productId.color) 

                    state.totalAmount --;
                    state.totalPrice -= productId.price
                } else {
                    exist.amount--;
                    exist.totalPrice -= productId.price
                    state.totalAmount--;
                    state.totalPrice -= productId.price
                }
            } catch(error) {
                return error
            }
        }
    }
});

export const { addToCart, removeFromCart } = CartSlice.actions
export default CartSlice.reducer