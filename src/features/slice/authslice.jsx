import { createSlice } from "@reduxjs/toolkit";

export const AuthSlice = createSlice ({
    name: "auth",
    initialState: {
        user: JSON.parse(sessionStorage.getItem('user')) || {
            name: '',
            password: '',
            image: '',
            authUser: false
        }
    },
    reducers: {
        login: (state, action) => {
            const userId = action.payload
            const userValidate = /^[A-Za-z]{4,10}$/i.test(userId.name);
            const passwordValidate = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,10}$/i.test(userId.password);

            state.user = userId;
            if (!userValidate || !passwordValidate) {
                state.user.authUser = false
            } else {
                state.user.authUser = true
                const saveState = JSON.stringify(userId)
                sessionStorage.setItem('user', saveState)
            }
        },
        logout: (state) => {
            state.user = {
                name: '',
                password: '',
                image: '',
                authUser: false
            }
            sessionStorage.clear()
        }
    }
})

export const { login, logout } = AuthSlice.actions;
export default AuthSlice.reducer