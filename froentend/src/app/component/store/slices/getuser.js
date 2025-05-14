import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { baseurl } from "../../common"


export  const getUser= createAsyncThunk("/user",async(token)=>{
    const res= await axios.get(`${baseurl}/user/${token}`);

    return res.data
})


const userSlice= createSlice({
    name:"user",
    initialState:{isLoading:false,info:{}},
    extraReducers:(builder)=>{
        builder.addCase(getUser.pending,(state)=>{
            state.isLoading=true
        })
       builder.addCase(getUser.fulfilled,(state,action)=>{
        state.info=action.payload
        state.isLoading=false
       })

    }
})



export default userSlice.reducer;


