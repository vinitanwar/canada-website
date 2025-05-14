"use client"
import React from 'react';
import { User, Mail, Phone, Briefcase, MessageCircle } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';
import InnerForm from './InnerForm';
const HeroSection = () => {
  return (
    <section className="relative w-full h-full">
      <div className="relative   ">
        {/* Video for desktop */}
        <video
          src="/newimages/sitevideo.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full  h-[26rem] md:h-[40rem] object-cover"
        ></video>

        {/* Image for mobile */}
        {/* <img
          src="/Images/m-tax.webp"
          alt="Hero"
          className="w-full h-[40rem] object-cover md:hidden"
        /> */}

        {/* Text overlay */}
        <div className="absolute top-0 left-0 w-full h-full flex  items-center justify-between  px-5 md:px-10 lg:px-18 bg-black/40 ">
        <div className='text-white '>
        <h1 className="text-3xl md:text-6xl font-bold mb-4 drop-shadow-lg uppercase font-sans">
          <p className='text-[#f67d3c]'>Accounting & </p>
          
            <Typewriter
              words={[
                'Bookkeeping Service',
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h1>
          <p className="text-xl  md:max-w-4xl drop-shadow-md font-sans">
          We specialize in tax preparation, payroll, business accounting, and financial consulting. Whether you're a small business or an individual, we provide accurate, reliable solutions to manage your finances with ease.
          </p>
        </div>
         <InnerForm cancel={false} className="mt-10 hidden md:block " titletop='Quick Query'/> 
        </div>
        
      </div>
    
    </section>
  );
};

export default HeroSection;
