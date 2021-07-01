import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

//Siempre que es una llamada a ua web service es "_ _ _ _WS"
export const LoginWS = createAsyncThunk(
    'users/LoginWS',
    async (userData) =>{
        const response = await axios.post("http://10.0.2.2:4000/api/users", {"email":userData.email, "password": userData.password});
        return response.data;
    }
);

export default LoginWS;