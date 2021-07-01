import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
//import LoginWS from "../../helpers/LoginWS";

export const LoginWS = createAsyncThunk(
    'users/LoginWS',
    async (userData) =>{
        console.log(userData);
        try{
            const response = await axios.post("http://10.0.2.2:4000/api/users", {"email":userData.email, "password": userData.password});
            console.log(response.data);
            return response.data;
        }catch(error){
            if(error.response.status === 400){
                console.log("ERROR DE CONEXION!!")
                return false;
            }
        }
        
    }
);

const LoginSlice = createSlice({
    name:'login',
    initialState:{
        email:'',
        password:'',
        sessionStarted:false
    },
    reducers:{
        controlEmail:(state, action)=> {
            state.email = action.payload;
        },
        controlPassword: (state, action)=> {
            state.password = action.payload;
        }
    },
    extraReducers:{
        //ACÁ CONTROL DE LOGIN
        [LoginWS.pending]: (state) =>{
            console.log("PEDIDO PENDIENTE");
            state.sessionStarted = false;
        },
        [LoginWS.fulfilled]:(state, action) =>{
            console.log("PEDIDO COMPLETO");
            state.sessionStarted = action.payload;
        },
        [LoginWS.rejected]: (state) =>{
            console.log("PEDIDO RECHAZADO");
            state.sessionStarted = false;
        }
    }
})

export const {controlEmail, controlPassword} = LoginSlice.actions;
export default LoginSlice.reducer;