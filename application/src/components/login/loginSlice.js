import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SERVER_IP } from "../../private";


export const fetchUser = createAsyncThunk(
    'loginUsersStatus',
    async ({email, password}, thunkAPI) => fetch(`${SERVER_IP}/api/login`, {
        method: "POST",
        body: JSON.stringify({
            email,
            password
        }),
        headers: {
            'Content-Type': 'application/json'
        },
    } ).then(response => response.json())
    .then(response => {
        if (response.success) {
           return response
        }
    })
  )


  

export const loginSlice = createSlice({
    name: "login",
    initialState: {
        email: "",
        token: "",
    },

    extraReducers: (builder) => {
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.email = action.payload.email;
            state.token = action.payload.token;
        })
    }

});


export default loginSlice.reducer;