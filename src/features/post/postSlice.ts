import { createSlice } from "@reduxjs/toolkit";
import { TypePostSlice } from "./type";

const initialData:TypePostSlice = {
     loading : false,
     post : null,
     error: null
}

const postSlice = createSlice({
    name : 'user',
    initialState: initialData,
    reducers:{
        loadUser : (state) =>{
            state.loading=true;
            state.error = null;
            state.post = null;
        },
        setData : (state,action)=>{
            state.post = action.payload;
            state.loading = false;
            state.error = null;
        },
        setError : (state,action)=>{
            state.loading = false,
            state.error = action.payload
        }
    }
});

export const { loadUser,setData,setError } = postSlice.actions

export default postSlice.reducer



