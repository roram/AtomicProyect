import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
//import LoginWS from "../../helpers/LoginWS";

//TODO: I need to move this function to an exterior component.

export const LoginWS = createAsyncThunk(
    'users/LoginWS',
    async (userData) =>{
        console.log(userData);
        try{
            console.log("ENTROOO?????")
            const response = await axios.post("http://10.0.2.2:4000/api/users", {"email":userData.email, "password": userData.password});
            console.log(response.data);
            return response.data;
        }catch(error){
            
            if(error.response.status === 400){
                alert('User or password incorrect.')
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
        },
        controlLogout: (state, action)=> {
            state.sessionStarted = false;
            state.password = '';
            state.email = '';
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
            console.log(action.payload.user);
            if(action.payload.user){
                state.sessionStarted = true;
            }else{
                state.sessionStarted = false;
            }
        },
        //TODO: CUANDO RECHAZA EL PEDIDO?
        [LoginWS.rejected]: (state, error) =>{
            console.log("PEDIDO RECHAZADO");
            console.log(error);
            state.sessionStarted = false;
        }
    }
})

export const {controlEmail, controlPassword, controlLogout} = LoginSlice.actions;
export default LoginSlice.reducer;