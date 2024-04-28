import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    loading: false,
    token: localStorage.getItem('token'),
    signup_success: false,
    login_success: false,
    logout_success: false,
    isAuthenticated: false,
    error: null,
    user: [],
};


const authSlice = createSlice({
    name: 'auth',
    initialState, 

    reducers: {
        loginStart(state){
            console.log("API calls ", state.loading);
            return{
                ...state,
                loading: true,
                error: '',
            }
        },

        loginSuccess(state, action){
            localStorage.setItem('token', action.payload.access)
            return{
            ...state,
            login_success : true,
            loading : false,
            token: action.payload.access,
            isAuthenticated: true,
            }
            
        },

        loginFailure(state, action){
            sessionStorage.removeItem('token')
            return{
            ...state,
            loading : false,
            login_success: false,
            isAuthenticated: false,
            error : action.payload
            }
        },

        signupStart(state){
            return{
                ...state,
               loading: true,
               error: '' 
            }
            
        },

        signupSuccess(state){
            return{
                ...state,
                signupSuccess: true,
                loading: false,
                isAuthenticated: false,
            }
        },

        signupFailure(state, action){
            return{
                ...state,
                signupSuccess : false,
                loading: false,
                error: action.payload,
                isAuthenticated: false
            }
        },

        checkStatusSuccess(state){
            return{
                ...state,
                loading: false,
                isAuthenticated: true
            }
        },

        checkStatusFailure(state){
            return{
                ...state,
                loading: false,
                isAuthenticated: false,
            }
        },

        loadUserSuccess(state, action){
            return{
                ...state,
                user: action.payload,
            }
        },

        loadUserFailure(state){
            return{
                ...state,
                user: []
            }
        },
        
        logoutUserSuccess(state){
            localStorage.removeItem('token')
            return{
                ...state,
                user: [],
                isAuthenticated: false,
                logout_success: true,
                token: '',
            }
        },

        logoutUserFailure(state){
            console.log("Something happend here")
            return{
                ...state,
                logout_success: false,
            }
        }


    }
})

export const {
    loginStart,
    loginSuccess,
    loginFailure,
    signupStart,
    signupSuccess,
    signupFailure,
    checkStatusSuccess,
    checkStatusFailure,
    loadUserSuccess,
    loadUserFailure,
    logoutUserSuccess,
    logoutUserFailure
} = authSlice.actions;

export default authSlice.reducer;