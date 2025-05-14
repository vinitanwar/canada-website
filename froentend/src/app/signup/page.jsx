"use client"
import axios from 'axios';
import React, { useState } from 'react'
import { FaFilePdf } from "react-icons/fa";
import { baseurl } from '../component/common';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const page = () => {
   
     const navigation=useRouter();
     const [loader,setLoader]=useState(false);
    const [userData,setuserData]=useState({
        name:"",
        password:"",
        email:"",
        companyname:""
    })

const handelonchange=(e)=>{
    setuserData({...userData,[e.target.name]:e.target.value})
}




      const handleSubmit = async(e) => {
        e.preventDefault();
        setLoader(true)
        const response = await axios.post(`${baseurl}/user/signup`,userData)
        if(response.data.success){
toast.success(response.data.message)
localStorage.setItem("site_user",response.data.token)
setuserData({  name:"",
    password:"",
    email:"",
    companyname:""})
    window.location.href = "/"; 


        }
 else{
    toast.error(response.data.message)
 }
 setLoader(false)
      }; 


  return (
    <div className="flex items-center justify-center ">
      
       <img src="/newimages/656702.webp" className="h-[80vh] w-full hidden lg:block" />
       <div className='h-[80vh] w-full lg:w-3/6   bg-[#000000c8] backdrop-blur-md border border-white/30 flex items-center  justify-center'>
      <div className="w-full px-5 md:px-10 ">
        <h2 className="text-2xl font-semibold text-center mb-6 text-white">
          Client  Sign up
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
        <div>
            <label className="block text-white font-medium mb-1">
Your Name            </label>
            <input
              type="text"
              className="w-full px-4 py-2 text-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={userData.name}
              name='name'
              onChange={(e) => handelonchange(e)}
              required
              placeholder="Full Name"
            />
          </div>
          <div>
            <label className="block text-white font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border text-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={userData.email}
              name='email'
              onChange={(e) => handelonchange(e)}
              required
              placeholder="you@example.com"
            />
          </div>
         <div>
            <label className="block text-white font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border text-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={userData.password}
              name='password'
              onChange={(e) => handelonchange(e)}
              required
              placeholder="Enter your password"
            />
          </div>
          <div>
            <label className="block text-white font-medium mb-1">
Company Name            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border text-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={userData.companyname}
              name='companyname'
              onChange={(e) => handelonchange(e)}
              required
              placeholder="Enter your Company  name"
            />
          </div>
         
          
          <button
          disabled={loader}
            type="submit"
            className="w-full bg-orange-500  text-white py-2 rounded-lg hover:bg-orange-600 transition uppercase font-semibold"
          >
            {loader?"Loading...":"Sign up"}
            
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-white">
          Allready have an account?{" "}
          <a href="/client-login" className="text-orange-500 hover:underline">
            Login
          </a>
        </p>
      </div>
      </div>
    </div>
  )
}

export default page