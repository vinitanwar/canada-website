"use client";
import axios from "axios";
import { useState } from "react";
import { baseurl } from "../component/common";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function ClientLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const navigation=useRouter();
const [loader,setLoader]=useState(false);
  const handleSubmit = async(e) => {
     e.preventDefault();
setLoader(true)

     const response = await axios.post(`${baseurl}/user/login`,{email,password});

     if(response.data.success){
      toast.success(response.data.message)
      localStorage.setItem("site_user",response.data.token)
      setEmail("")
      setPassword("")
      window.location.href = "/"; 
     }
     else{
          toast.error(response.data.message)
      
     }
   
setLoader(false)

 
  };

  return (
    <div className=" bg-gray-100 flex items-center ">
    <img src="/newimages/656702.webp" className="h-[80vh] w-full hidden lg:block" />
    <div className="h-[80vh] w-full lg:w-3/6   bg-[#000000d7] backdrop-blur-md border border-white/30 flex items-center  justify-center">
<div className=" w-full px-5 md:px-10  ">
        <h2 className="text-2xl font-semibold text-center mb-6 text-white">
          Client Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 text-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              className="w-full px-4 py-2 text-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>
          <button
          disabled={loader}
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition uppercase font-semibold"
          >
            {loader?"loading...":"Login"}
            
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-white">
          Don’t have an account?{" "}
          <a href="/signup" className="text-orange-500 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
      </div>
    </div>
  );
}
