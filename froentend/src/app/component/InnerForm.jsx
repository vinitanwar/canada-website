'use client';
import React, { useState, useEffect } from 'react';
import { User, Mail, Phone, Briefcase, MessageCircle } from 'lucide-react';
import axios from 'axios';
import { baseurl } from './common';
import Swal from 'sweetalert2';
const InnerForm = ({setIsVisible,cancel=true,className="",titletop="Book a Free Consultation"}) => {




  const handleClose = () => {
    setIsVisible(false);
  };

  const [userData, setUserData] = useState({
    S_name: "",
    S_phone: "",
    S_email: "",
    company_name: "",
    need_service: "",
    // userEmailsir:"Admin@canadawidetaxes.com"
    userEmailsir:"jontypundir12@gmail.com"
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
  setloader(true);

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

    await axios.post(`${baseurl}/sendmessage`, formData);

    // Show success alert
    await Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'Your message has been sent successfully.',
      confirmButtonText: 'OK',
      confirmButtonColor: '#3085d6',
    });

    // Reset form data
    setUserData({
      S_name: "",
      S_email: "",
      company_name: "",
      need_service: "",
      userEmailsir: "Admin@canadawidetaxes.com",
    });

  } catch (error) {
    console.error("Error sending data:", error);

    // Show error alert
    await Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong! Please try again later.',
      confirmButtonText: 'OK',
      confirmButtonColor: '#d33',
    });
  }

  setloader(false);
  setIsModalOpen(false);
};




  return (
    <>
   {cancel &&    <div className={`relative top-[-23px] bg-white shadow-xl p-6 sm:p-8 rounded-xl w-full max-w-md block ${className}`}>
           
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-gray-700 text-xl font-bold hover:text-red-600"
            >
              ×
            </button>


            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-justify">{titletop}</h2>

            <form className="space-y-4" onSubmit={handelsendqueery}>
              {/* Name Field with Icon */}
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                  <User className="h-5 w-5" />
                </span>
                <input
                  type="text"
                  placeholder="Your Name"
                  name='S_name'
                  value={userData.S_name}
                  required
                  onChange={(e)=>handleData(e)}
                  className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Email Field with Icon */}
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                  <Mail className="h-5 w-5" />
                </span>
                <input
                  type="email"
                  placeholder="Email"
                  name='S_email'
                  required
                  value={userData.S_email}
                  onChange={(e)=>handleData(e)}

                  className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

            
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                  <Phone className="h-5 w-5" />
                </span>
                <input
                  type="number"
                  placeholder="Phone Number"
                  name='S_phone'
                  required
                  value={userData.S_phone}
                  onChange={(e)=>handleData(e)}
min={10}
                  className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Company Field with Icon */}
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                  <Briefcase className="h-5 w-5" />
                </span>
                <input
                  type="text"
                  placeholder="Company"
                  name='company_name'
                  value={userData.company_name}
                  onChange={(e)=>handleData(e)}

                  required
                  className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Message Field with Icon */}
              <div className="relative">
                <span className="absolute inset-y-0 top-[-78px] left-0 pl-3 flex items-center text-gray-500">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <textarea
                  placeholder="Message"
                  className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  rows="4"
                  name='need_service'
                  value={userData.need_service}
                  onChange={(e)=>handleData(e)}

                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-orange-500 text-white rounded-md font-semibold hover:bg-orange-600 transition"
                disabled={loader}
              >
                 {loader?"Loading...":"Submit"}
              </button>
            </form>
          </div>}
          {!cancel &&   <div className={`relative top-[-23px] bg-[#2f2f2f7e] backdrop-blur-3xl border border-white/70 shadow-lg p-6 sm:p-8 rounded-xl w-full max-w-md block ${className}`}>
           
           


            <h2 className="text-2xl font-bold mb-6 text-white text-justify">{titletop}</h2>

            <form className="space-y-4" onSubmit={handelsendqueery}>
              {/* Name Field with Icon */}
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-white">
                  <User className="h-5 w-5" />
                </span>
                <input
                  type="text"
                  placeholder="Your Name"
                  name='S_name'
                  value={userData.S_name}
                  required
                  onChange={(e)=>handleData(e)}
                  className="w-full pl-10 p-3 border text-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Email Field with Icon */}
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-white">
                  <Mail className="h-5 w-5" />
                </span>
                <input
                  type="email"
                  placeholder="Email"
                  name='S_email'
                  required
                  value={userData.S_email}
                  onChange={(e)=>handleData(e)}

                  className="w-full pl-10 p-3 border text-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

            
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-white">
                  <Phone className="h-5 w-5" />
                </span>
                <input
                  type="number"
                  placeholder="Phone Number"
                  name='S_phone'
                  required
                  value={userData.S_phone}
                  onChange={(e)=>handleData(e)}
min={10}
                  className="w-full pl-10 p-3 border text-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Company Field with Icon */}
             <div className="relative">
  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-white">
    <Briefcase className="h-5 w-5" />
  </span>
  <select
    name="company_name"
    value={userData.company_name}
    onChange={(e) => handleData(e)}
    required
  className="w-full pl-10 p-3 border text-white bg-transparent border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
  >
    <option value="" className='text-black' disabled>Select Company Service</option>
    <option value="BookKeeping"  className='text-black' >BookKeeping</option>
    <option value="Payroll Services" className='text-black' >Payroll Services</option>
    <option value="Financial Statements" className='text-black' >Financial Statements</option>
    <option value="Corporate Tax Filing" className='text-black' >Corporate Tax Filing</option>
    <option value="Personal Tax Filing" className='text-black' >Personal Tax Filing</option>
    <option value="Self Employed Tax Filing" className='text-black' >Self Employed Tax Filing</option>
    <option value="Non-Resident Taxes" className='text-black' >Non-Resident Taxes</option>
    <option value="Incorporating New Company" className='text-black' >Incorporating New Company</option>
  </select>
</div>

              {/* Message Field with Icon */}
              <div className="relative">
                <span className="absolute inset-y-0 top-[-78px] left-0 pl-3 flex items-center text-white">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <textarea
                  placeholder="Message"
                  className="w-full pl-10 p-3 border text-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  rows="4"
                  name='need_service'
                  value={userData.need_service}
                  onChange={(e)=>handleData(e)}

                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-orange-500 text-white rounded-md font-semibold hover:bg-orange-600 transition"
                disabled={loader}
              >
                 {loader?"Loading...":"Submit"}
              </button>
            </form>
          </div> }
      
    </>
  );
};

export default InnerForm;
