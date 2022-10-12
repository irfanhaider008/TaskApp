import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const setData =createAsyncThunk("data/getData",async(data)=>{
    return data
 
    
});

const GetData = createSlice({
    name:"data",
    initialState:{
        posts:[],
        loading:false,
        data:"Hello",
    },
    extraReducers:{
        [setData.pending] : (state,action)=>{
            state.loading=true;

        },
        [setData.fulfilled]: (state,action)=>{
            state.loading = false;
            state.data = action.payload;
        },
        [setData.rejected]:(state,action)=>{
            state.loading= false;

        },

    },
});
export default GetData.reducer;