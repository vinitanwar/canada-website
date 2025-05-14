"use client"
import { baseurl, imgurl } from '@/app/component/common'
import React, { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
import { FaUser, FaBuilding, FaEnvelope, FaPhone, FaAddressCard, FaInfoCircle } from 'react-icons/fa';
import axios from 'axios';
import { toast } from 'react-toastify';

const page = () => {
const [formData, setFormData]=useState()
const user=useSelector(state=>state.getuser.info)

useEffect(()=>{
  setFormData(user.user)
},[user])

console.log(formData,"sefcnweocfin")
 const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async(e) => {
    e.preventDefault();
    const token=localStorage.getItem("site_user");
   const response = await axios.post(`${baseurl}/user/updateinfo/${token}`,formData)
    if(response.data.success){
      toast.success(response.data.message)
      location.reload()
    }else{
      toast.error(response.data.message)
    }
  
  };

  return (
   
      <div className="bg-gradient-to-br from-indigo-100 to-purple-100 min-h-screen flex items-center justify-center md:px-4">
  <div className="bg-white shadow-2xl md:rounded-3xl p-10 w-full max-w-2xl border-t-4 border-indigo-500">
    <h2 className="text-3xl font-extrabold text-center text-indigo-700 mb-8">
      ✏️ Edit Your Profile
    </h2>

    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          label="Full Name"
          name="name"
          icon={<FaUser />}
          value={formData?.name}
          onChange={handleChange}
        />

        <InputField
          label="Email"
          name="email"
          icon={<FaEnvelope />}
          type="email"
          value={formData?.email}
          onChange={handleChange}
        />

        <InputField
          label="Company Name"
          name="companyname"
          icon={<FaBuilding />}
          value={formData?.companyname}
          onChange={handleChange}
        />

        <InputField
          label="Phone Number 1"
          name="numberone"
          icon={<FaPhone />}
          value={formData?.numberone}
          onChange={handleChange}
        />

        <InputField
          label="Phone Number 2"
          name="numbertwo"
          icon={<FaPhone />}
          value={formData?.numbertwo}
          onChange={handleChange}
        />

        <InputField
          label="Address"
          name="address"
          icon={<FaAddressCard />}
          value={formData?.address}
          onChange={handleChange}
        />
      </div>

      <InputField
        label="About"
        name="about"
        icon={<FaInfoCircle />}
        value={formData?.about}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-md transition transform hover:scale-105 duration-300"
      >
        Save Changes
      </button>
    </form>
  </div>
</div>

 
  )
}





function InputField({ label, name, icon, value, onChange, type = "text" }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <div className="flex items-center border border-gray-300 rounded-xl px-4 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-indigo-500">
        <div className="text-indigo-500 mr-3 text-lg">{icon}</div>
        <input
          type={type}
          name={name}
          value={value || ""}
          onChange={onChange}
          className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-400"
          placeholder={`Enter ${label.toLowerCase()}`}
        />
      </div>
    </div>
  );
}

export default page