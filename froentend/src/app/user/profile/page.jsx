"use client"
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const page = () => {
const [userData,SetuserData]=useState()
const user=useSelector(state=>state.getuser.info)
useEffect(()=>{
  SetuserData(user.user)
},[user])
console.log(userData,"sefcnweocfin")

  return (
    <div className=" flex items-center justify-center md:p-12">
  <div className="bg-white shadow-2xl md:rounded-2xl overflow-hidden w-full  transform transition-all hover:scale-[1.02] duration-300">
    {/* Header with gradient background */}
    <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-6 text-center">
      <div className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-white shadow-lg overflow-hidden">
        {userData?.avatar ? (
          <img 
            src={userData.avatar} 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-indigo-100 flex items-center justify-center">
            <span className="text-3xl font-bold text-indigo-600">
              {userData?.name?.charAt(0)?.toUpperCase() || 'U'}
            </span>
          </div>
        )}
      </div>
      <h1 className="text-2xl font-bold text-white">{userData?.name || 'User Profile'}</h1>
      <p className="text-indigo-100">{userData?.jobTitle || 'Member'}</p>
    </div>

    {/* Profile details */}
    <div className='flex flex-col md:flex-row justify-around'>
    <div className="p-6 space-y-5 ">

      <div className="flex items-start">
        <div className="bg-purple-100 p-3 rounded-lg text-purple-600 mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Email</p>
          <p className="text-gray-800 font-medium">{userData?.email || 'user@example.com'}</p>
        </div>
      </div>

      <div className="flex items-start">
        <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Company</p>
          <p className="text-gray-800 font-medium">{userData?.companyname || 'Not specified'}</p>
        </div>
      </div>

      <div className="flex items-start">
        <div className="bg-indigo-100 p-3 rounded-lg text-indigo-600 mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Location</p>
          <p className="text-gray-800 font-medium">{userData?.location || 'Global'}</p>
        </div>
      </div>
       <div className="flex items-start">
        <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Doucments</p>
          <p className="text-gray-800 font-medium">{userData?.pdf?.length || '0'}</p>
        </div>
      </div>

      {/* Social links or additional actions */}
      <div className="hidden md:flex pt-4  justify-center space-x-4">
        <button className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-purple-100 hover:text-purple-600 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
          </svg>
        </button>
        <button className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
          </svg>
        </button>
        <button className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-red-100 hover:text-red-600 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
          </svg>
        </button>
      </div>
      </div>
      <div className="p-6 space-y-5 ">
        
      <div className="flex items-start">
        <div className="bg-purple-100 p-3 rounded-lg text-purple-600 mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <p className="text-gray-500 text-sm">First Number</p>
          <p className="text-gray-800 font-medium">{userData?.numberone || 'Not specified'}</p>
        </div>
      </div>

      <div className="flex items-start">
        <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Second Number</p>
          <p className="text-gray-800 font-medium">{userData?.numbertwo || 'Not specified'}</p>
        </div>
      </div>


<div className="flex items-start">
        <div className="bg-purple-100 p-3 rounded-lg text-purple-600 mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <p className="text-gray-500 text-sm">About</p>
          <p className="text-gray-800 font-medium">{userData?.about || 'Not specified'}</p>
        </div>
      </div>

      <div className="flex items-start">
        <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Address</p>
          <p className="text-gray-800 font-medium">{userData?.address || 'Not specified'}</p>
        </div>
      </div>

     


      </div>
    </div>
  </div>
</div>
  )
}

export default page