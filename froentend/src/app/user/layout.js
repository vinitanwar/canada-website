"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { FaHome, FaUser, FaCog } from 'react-icons/fa';
import Link from 'next/link'; 
const page = ({children}) => {
    const state=useSelector((state)=>state.getuser)
    const [user,setuser]=useState()
    const navigation=useRouter();
    const [loader ,setloader]=useState(true)
    
    useEffect(()=>{
        if(!state.isLoading){
          
            

          if(state?.info?.success===false){
            navigation.push("/client-login")
       
            
          }
          else{
            setuser(state?.info?.user)
            setloader(false)
          }
          
        }
        },[state])

        const handleLogout = () => {
          localStorage.removeItem("site_user");
          window.location.href = "/"; 
        };


  return (
<>

{loader  &&  <div className="fixed inset-0 bg-gray-100 z-50 flex flex-col">
      {/* Top nav skeleton */}
      <div className="h-16 bg-white shadow flex items-center px-4 animate-pulse">
        <div className="h-8 w-40 bg-gray-200 rounded"></div>
      </div>

      <div className="  flex flex-1 overflow-hidden">
        {/* Sidebar skeleton */}
        <div className="w-64 bg-gradient-to-b from-blue-500 to-green-500 p-4 animate-pulse space-y-4">
          <div className="h-6 w-32 bg-blue-300 rounded"></div>
          <div className="h-6 w-24 bg-blue-300 rounded"></div>
          <div className="h-6 w-28 bg-blue-300 rounded"></div>
        </div>

        {/* Content skeleton */}
        <div className="flex-1 p-6 space-y-6 animate-pulse">
          <div className="h-8 w-48 bg-gray-300 rounded"></div>
          <div className="h-40 bg-gray-200 rounded"></div>

          {/* Fake file cards */}
          <div className="flex gap-4 mt-6">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="w-40 h-32 bg-gray-200 rounded-lg p-4 flex flex-col justify-between">
                <div className="h-6 w-3/4 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 w-1/2 bg-gray-300 rounded mb-2"></div>
                <div className="h-5 w-5 bg-gray-400 rounded-full self-end"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>}

{ !loader &&
    <div className="h-screen flex bg-gray-50 font-sans">
    {/* Sidebar */}
    <div className=" hidden md:block w-1/6 bg-gradient-to-b from-[#1163BA] to-green-700 text-white p-6 space-y-6 shadow-lg">
      <h2 className="text-2xl font-bold">Dashboard</h2>
      <ul className="space-y-4 text-lg">
        <li className="flex items-center gap-2 hover:opacity-80 transition">
          <FaHome /> <Link href="/user">Home</Link>
        </li>
        <li className="flex items-center gap-2 hover:opacity-80 transition">
          <FaUser /> <Link href="/user/profile">Profile</Link>
        </li>
        <li className="flex items-center gap-2 hover:opacity-80 transition">
          <FaCog /> <Link href="/user/setting">Settings</Link>
        </li>
      </ul>
    </div>

    {/* Main Content */}
    <div className="flex-1 flex flex-col">
      {/* Navbar */}
      <div className="bg-[#FE904D] px-5  py-3 shadow-md flex justify-between items-center">
        <p className="text-xl font-medium text-gray-700">Hey, {user?.name} 👋</p>
        <button
        onClick={()=>handleLogout()}
  className="bg-blue-600 text-white px-3 md:px-5 py-1 md:py-2 font-bold rounded-xl 
             shadow-md shadow-black scale-105 
             active:scale-100 active:shadow-sm
             transition-all duration-150 ease-in-out">
  Logout
</button>      </div>

     <div className=" md:hidden  bg-gradient-to-b from-[#1163BA] to-green-700 text-white p-6 space-y-6 shadow-lg">
      
      <ul className=" flex justify-between items-center  text-lg">
        <li className="flex items-center gap-2 hover:opacity-80 transition">
          <FaHome /> <Link href="/user">Home</Link>
        </li>
        <li className="flex items-center gap-2 hover:opacity-80 transition">
          <FaUser /> <Link href="/user/profile">Profile</Link>
        </li>
        
        <li className="flex items-center gap-2 hover:opacity-80 transition">
          <FaCog /> <Link href="/user/setting">Settings</Link>
        </li>
      </ul>
    </div>
      <div className=" bg-gray-100 flex-1 overflow-auto">
      {children}
      </div>
     
    </div>
  </div>
  }</>


  )
}

export default page