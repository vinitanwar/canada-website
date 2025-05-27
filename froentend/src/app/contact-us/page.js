"use client"
import React, { useEffect, useState } from 'react'

import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi'
import Link from 'next/link'
import Banner from '../component/Banner'
import axios from 'axios'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2';

const page = () => {



  const [userData, setUserData] = useState({
    S_name: "",
    S_phone: "",
    S_email: "",
    S_services: "",
    need_service: "",
    userEmailsir:"Admin@canadawidetaxes.com"
  });

  const [loader,setloader]=useState(false)
  
  const handleData = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  const handelsendqueery = async (e) => {
    e.preventDefault();
    setloader(true)
    const formData = new URLSearchParams();
    for (const key in userData) {
      formData.append(key, userData[key]);
    }
  
    try {
      const response = await axios.post(
        "https://sendingmail-3.onrender.com/sendmail",
        formData,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

         await Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Your message has been sent successfully.',
            confirmButtonText: 'OK',
            confirmButtonColor: '#3085d6',
          });
      
    
    } catch (error) {
      console.error("Error sending data:", error);
    }
    setloader(false)
    setUserData({
      S_name: "",
      S_phone: "",
      S_email: "",
      S_services: "",
      need_service: "",
      userEmailsir:"Admin@canadawidetaxes.com"
    })
  };
  
     const [sitelayout,setsitelayout]=useState()
const state2=useSelector((state)=>state.layout)





useEffect(()=>{


    setsitelayout(state2?.info)
    
},[state2])



  return (
    <>

 <Banner   bannerTitle='Contact' />

      {/* Contact Section */}
      <div className="bg-white py-12 px-4 sm:px-8 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Left Section */}
          <div>
            <h2 className="text-3xl font-bold text-black mb-8">GET IN TOUCH</h2>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="bg-orange-500 text-white rounded-full w-14 h-14 flex items-center justify-center text-2xl">
                  <FiPhone />
                </div>
                <div>
                  <p className="font-bold text-orange-500">PHONE NUMBER</p>
                  <Link href={`tel:${sitelayout?.number}`} className="text-black hover:underline">
                    {sitelayout?.number}
                  </Link>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-orange-500 text-white rounded-full w-14 h-14 flex items-center justify-center text-2xl">
                  <FiMail />
                </div>
                <div>
                  <p className="font-bold text-orange-500">EMAIL ADDRESS</p>
                  <Link href={`mailto:${sitelayout?.email}`} className="text-black">
                   {sitelayout?.email}
                  </Link>
                </div>

              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="bg-orange-500 text-white rounded-full w-14 h-14 flex items-center justify-center text-2xl">
                  <FiMapPin />
                </div>
                <div>
                  <p className="font-bold text-orange-500">OUR LOCATION</p>
                  <Link
                    href="https://www.google.com/maps?q=1920+San+Fernando+Pl,+V8N+2G1+Victoria,+BC+CANADA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:underline"
                  >
                    {sitelayout?.address}
                  </Link>
                </div>
              </div>

              {/* Office Time */}
              <div className="flex items-start gap-4">
                <div className="bg-orange-500 text-white rounded-full w-14 h-14 flex items-center justify-center text-2xl">
                  <FiClock />
                </div>
                <div>
                  <p className="font-bold text-orange-500">OFFICE TIME</p>
                  <p className="text-black">Monday – Friday: 9:00AM – 5:00PM</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Section */}
          <div>
            <h2 className="text-3xl font-bold text-black mb-8">CONTACT US</h2>
            <form className="space-y-4" onSubmit={handelsendqueery}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name*"
                  required
                  name="S_name"
                  value={userData.S_name}
                  onChange={(e)=>handleData(e)}
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-text-orange-500 "
                />
                <input
                  type="email"
                  placeholder="Email Address*"
                  required
                  name="S_email"
                  value={userData.S_email}
                  onChange={(e)=>handleData(e)}
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-text-orange-500 "
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  name="S_phone"
                  value={userData.S_phone}
                  onChange={(e)=>handleData(e)}
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-text-orange-500 "
                />
                <select
                 required
                 name="S_services"
                 value={userData.S_services}
                 onChange={(e)=>handleData(e)}
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-text-orange-500 ">
                  <option>Bookkeeping Services</option>
                  <option>Payroll Services</option>
                  <option>Financial Statements</option>
                  <option>Corporate Tax Filing</option>
                  <option>Personal Tax Filing</option>
                  <option>Self Employed Tax Filing</option>
                  <option>GST Filing</option>
                  <option>Non-Resident Taxes</option>
                  <option>Incorporating New Company</option>

                </select>
              </div>

              <textarea
                placeholder="Message*"
                required
                name="need_service"
                value={userData.need_service}
                onChange={(e)=>handleData(e)}
                rows={5}
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-text-orange-500 "
              ></textarea>

              <button
                type="submit"
                className="bg-orange-500 text-white px-8 py-3 rounded-md hover:bg-gray-800 transition"
              >
                 {loader?"Loading...":"SUBMIT"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-[450px]">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2644.9192432435066!2d-123.31157699999999!3d48.4772626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548f7155f9a1a823%3A0x44605e02b76a3248!2sCanada%20Wide%20Bookkeeping%20%26%20Taxes!5e0!3m2!1sen!2sin!4v1746598160764!5m2!1sen!2sin" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      </div>




    </>
  )
}

export default page
