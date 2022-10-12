import { configureStore } from "@reduxjs/toolkit";
import PostReducer  from "./reducer/PostSlice";
import Getdata  from "./reducer/GetData";


export default configureStore({
    reducer:{
        post:PostReducer,
        data:Getdata
    },
});