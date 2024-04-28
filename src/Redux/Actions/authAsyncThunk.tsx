import axios from "axios";
import {createAsyncThunk} from '@reduxjs/toolkit'
import { loginFailure, loginStart, loginSuccess, signupStart, signupFailure, signupSuccess } from "../Reducers/authSlices";
import { loadUser } from "./verifyAsyncThunk";

export const loginUser = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
       
        const dispatch = thunkAPI.dispatch;

        dispatch(loginStart())
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
          };

        try{
            const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/jwt/create/`, credentials, config);
            dispatch(loginSuccess(res.data))
            dispatch(loadUser())
           return res.data 
        }

        catch(error){
            dispatch(loginFailure(error.response.data))
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
)


export const signupUser = createAsyncThunk(
    'auth/signup',
    async (credentials, thunkAPI) => {
        const dispatch = thunkAPI.dispatch;

        dispatch(signupStart())
        try{
            const config = {
                headers : {
                    'Content-Type': 'application/json',
                }}

            const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/users/`, credentials, config)
            dispatch(signupSuccess())
            return res.data
        }
        catch(error){
            dispatch(signupFailure(error.response.data))
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }

)