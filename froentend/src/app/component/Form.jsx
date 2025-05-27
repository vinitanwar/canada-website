'use client';
import React, { useState, useEffect } from 'react';
import { User, Mail, Phone, Briefcase, MessageCircle } from 'lucide-react';
import axios from 'axios';
import { baseurl } from './common';
import InnerForm from './InnerForm';

const Form = () => {
  const [isVisible, setIsVisible] = useState(false);





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
    userEmailsir:"admin@canadawidetaxes.com"
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
    

     await axios.post(`${baseurl}/sendmessage`,formData)
    } catch (error) {
      console.error("Error sending data:", error);
    }
    setloader(false)
    setIsVisible(false)
  };
  



  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 bg-[#0000009e]  bg-opacity-50 z-50 flex justify-center items-start pt-[50px] lg:pt-[150px]  px-4 lg:px-20">
          <InnerForm setIsVisible={setIsVisible}  />
        </div>
      )}
    </>
  );
};

export default Form;
