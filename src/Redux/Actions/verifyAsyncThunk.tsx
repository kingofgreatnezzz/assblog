import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import {checkStatusSuccess, checkStatusFailure, loadUserSuccess, loadUserFailure, logoutUserSuccess, logoutUserFailure } from '../Reducers/authSlices';


export const loadUser = createAsyncThunk(
    'auth/user',
    async (credentias, thunkAPI) => {
        const dispatch = thunkAPI.dispatch;

        try{
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `JWT ${localStorage.getItem('token')}`,
                    'Accept': 'application/json',
                }
            }
            const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/users/me/`, config)
            dispatch(loadUserSuccess(res.data))
            return res.data

        }catch(error){
            dispatch(loadUserFailure(error.response.data))
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)

export const checkUserStatus = createAsyncThunk(
    'auth/check',

    async (credentials, thunkAPI) => {

        const dispatch = thunkAPI.dispatch;
        if(localStorage.getItem('token')){
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
                 }
        try{
            const body = JSON.stringify({token: localStorage.getItem('token')});
            const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/jwt/verify/`, body, config)
            dispatch(checkStatusSuccess())
            dispatch(loadUser())
            return res.data
            } catch(error){
            dispatch(checkStatusFailure(error.response.data))
            return thunkAPI.rejectWithValue(error.response.data)
            }
        }
        
    }
)

export const logoutUser = createAsyncThunk(
    'auth/check',

    async (_, thunkAPI) => {

        const dispatch = thunkAPI.dispatch;

        if(localStorage.getItem('token')){

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            }

        try{
            const body = JSON.stringify({token: localStorage.getItem('token')});
            const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/jwt/verify/`, body, config)
            dispatch(logoutUserSuccess())
            return res.data

            } catch(error){
            dispatch(logoutUserFailure(error.response.data))
            return thunkAPI.rejectWithValue(error.response.data)
            }
        }
        
    }
)

