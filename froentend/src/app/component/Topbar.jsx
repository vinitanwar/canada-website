'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaCommentsDollar,
} from 'react-icons/fa';
import { FaTwitter } from "react-icons/fa";
import { FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './store/slices/getuser';
import { getLayout } from './store/slices/getlayout';
import FullPageSkeleton from './FullPageSkeleton';

export default function Topbar() {
   const [userlogin,setUserLogin]=useState(false)
   const [sitelayout,setsitelayout]=useState()
const state=useSelector((state)=>state.getuser)
const state2=useSelector((state)=>state.layout)
const dispatch=useDispatch();
const [loader,setloader]=useState(true)

useEffect(()=>{
  
if(!state.isLoading){
 
  if(state?.info?.success){
    setUserLogin(true)
  
    setloader(false)
  }
}
},[state])

useEffect(()=>{


    setsitelayout(state2?.info)
    
},[state2])



useEffect(()=>{
  const token=localStorage.getItem("site_user")
  dispatch(getUser(token))
  dispatch(getLayout())

},[])
  return (<>
 
    <div className=" hidden lg:block border-b border-gray-200" style={{background:sitelayout?.color}}>
      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-22 py-2">
        <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-y-4">
          
         

          <div className="flex justify-center md:justify-end items-center space-x-4 text-white w-full md:w-auto">
            <Link href="https://www.facebook.com/canadawidetaxes" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook size={20} />
            </Link>
            <Link href="https://www.instagram.com/canadawidetaxes/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram size={20} />
            </Link>
            <Link href="https://www.linkedin.com/company/canadawidetaxes/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={20} />
            </Link>
            <Link href="https://x.com/canadawidetaxes" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaXTwitter size={20} />
            </Link>
            <Link href="https://www.youtube.com/@canadawidetaxes" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaYoutube size={20} />
            </Link>

          </div>

          {/* Consultation Button */}
        <div className="flex">
        <div className="w-full md:w-auto flex justify-center md:justify-end">
            <a
              href="/contact-us/"
              className="text-[#02017D] bg-white px-4 py-2 rounded-full flex items-center space-x-2 uppercase text-sm"
            >
              <FaCommentsDollar />
              <span>10 min Free Consultation</span>
            </a>
          </div>


          {  !userlogin && <Link
            href="/client-login"
            className="ml-4 bg-white text-orange-500 px-4 py-2 rounded-full flex items-center space-x-2 uppercase text-sm hover:bg-gray-100 transition"
          >
            <span>Client Login</span>
          </Link>
}
{   userlogin && <Link
            href="/user"
            className="ml-4 bg-white text-orange-500 px-4 py-2 rounded-full flex items-center space-x-2 uppercase text-sm hover:bg-gray-100 transition"
          >
            <span>Client Profile</span>
          </Link>
}
<Link className='ml-4 bg-white text-orange-500 px-4 py-2 rounded-full flex items-center space-x-2 uppercase text-sm hover:bg-gray-100 transition' target='_blank' href={"https://book.squareup.com/appointments/mqvd83s0ekh6mr/location/LNC27B282CN6A/services"}>Book Now</Link> 

        </div>
        </div>
      </div>
    </div>

  </>
  );
}
