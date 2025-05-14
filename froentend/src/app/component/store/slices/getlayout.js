import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseurl } from "../../common";

export const getLayout=createAsyncThunk( "/layout",async()=>{
const response = await axios.get(`${baseurl}/siteLayout`)
return response.data
})


const layoutSlice= createSlice({
    name:"layout",
    initialState:{isLoading:false,info:{}},
    extraReducers:(builder)=>{
        builder.addCase(getLayout.pending,(state)=>{
            state.isLoading=true
        })
        builder.addCase(getLayout.fulfilled,(state,action)=>{
             state.info=action.payload
        state.isLoading=false
        })
    }
})



export default layoutSlice.reducer