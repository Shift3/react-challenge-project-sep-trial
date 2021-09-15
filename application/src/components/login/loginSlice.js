import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchUser = createAsyncThunk(
    'login users',
    afetch(`${SERVER_IP}/api/login`, {
        method: 'POST',
        body: JSON.stringify({
            email,
            password
        }),
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(response => response.json())
    .then(response => {
        if (response.success) {
            return{
                payload:{
                    email: response.email,
                    token: response.token,
                }
            }
        }
    })
  )


  

export const loginSlice = createSlice({
    name: "login",
    initialState: {
        email: null,
        token: null,
    },

    reducers: {
        loginUser: (state, action) => {
            state.email = action.payload.email;
            state.token = 1;
        }
    },

    extraReducers: (builder) => {
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.email = action.payload.email;
            state.email = action.payload.token;
        })
    }

});

export const { loginUser } =
loginSlice.actions;

export default loginSlice.reducer;