"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {loginUser} from '../../../Redux/Actions/authAsyncThunk'

export default function page() {

  const [formData, setFormData] = useState({'email': '', 'password': ''})
  const [loginError, setLoginError ]= useState('')
  const [message, setMessage] = useState([])
  const router  = useRouter();

  //// Redux Hooks
  const dispatch = useDispatch()
  const {loading, login_success, isAuthenticated, error } = useSelector((state) => state.auth)

  useEffect(() => {
    if(isAuthenticated){
      router.push('/')
    }
  },[isAuthenticated])

  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  const {email, password} = formData
  
  const handleSubmit = (event) => {
    event.preventDefault()
    const body = JSON.stringify({email, password})
    dispatch(loginUser(body))
  }

  useEffect(() => {
    let timer;
    if(login_success){
      setMessage("Credential test passed!")
      timer = setTimeout(() => {
        setMessage("")
        router.push('/')
      }, 1500)
    }
    return () => {
      //clear
      clearTimeout(timer);
    }
  },[login_success])
  
  
  // console.log('what is wrong ', login_success)
  
  return (
    <div className="h-screen bg-gray-800">
      <div className="w-full max-w-sm mx-auto overflow-hidden  bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="px-6 py-4">
          <div className="flex justify-center mx-auto">
            <Image
              width={500}
              height={500}
              className="w-auto h-7 sm:h-8"
              src={"https://merakiui.com/images/logo.svg"}
              alt=""
            />
          </div>
          
          <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">
            Welcome Back!
          </h3>

          <p className="mt-1 text-center text-gray-500 dark:text-gray-400">
            Login or create account
          </p>
          {
              login_success ? <p style={{color: 'green', fontSize: '.9rem', fontWeight:'500', margin:'0'}}>{message}</p> : ''
          }
          {
              error?.detail == "No active account found with the given credentials" ? <p style={{color: 'red', fontSize: '.9rem', fontWeight:'500', margin:'0'}}>Invalid email or password</p> : ''
          }
          <form onSubmit={handleSubmit}>
            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                placeholder="Email Address"
                aria-label="Email Address"
                required
                name='email'
                value={email}
                onChange={handleChange}
              />
            </div>

            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
                placeholder="Password"
                aria-label="Password"
                required
                name="password"
                value={password}
                onChange={handleChange}
              />
            </div>

            <div className="flex items-center justify-between mt-4">
              <Link
                href={"/forgottenpassword"}
                className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500"
              >
                Forget Password?
              </Link>

              <button disabled={login_success || loading && true} type="submit" className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                {loading ? 'checking...' : 'Login'}
              </button>
            </div>
          </form>
        </div>

        <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
          <span className="text-sm text-gray-600 dark:text-gray-200">
            Don't have an account?
          </span>

          <Link
            href={"/signup"}
            className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
