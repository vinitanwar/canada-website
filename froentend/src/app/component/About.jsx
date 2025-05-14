"use client";
import Link from "next/link";
import React from "react";

const About = ({readmore=false}) => {
  return (
    <div className="About-Us lg:mt-[40px] py-10 px-4 md:px-8 lg:px-30 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
        <div className="w-full md:w-1/2">
            <div className="w-full h-full overflow-hidden rounded-lg mt-9 md">
              <img
                src="/Images/about.webp"
                alt="About Us"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        
          <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-5 md:pr-8 md:border-r-8 border-blue-800">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">About Us</h3>

            <p className="text-sm sm:text-base text-gray-800 text-justify leading-relaxed">
            We specialize in tax preparation, payroll, business accounting, and financial consulting. Whether you're a small business or an individual, we provide accurate, reliable solutions to manage your finances with ease.
Our team stays up-to-date with the latest regulations to ensure full compliance and peace of mind.
Let us handle the numbers so you can focus on what matters most—growing your business or securing your future.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Expert GST consultation and seamless filing support for all business sizes.",
                "Strategic tax planning to maximize savings and ensure compliance.",
                "Hassle-free company registration with complete startup advisory support.",
                "Thorough audit services to boost financial accuracy and credibility.",
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span className="text-green-600 text-lg sm:text-xl">✔</span>
                  <p className="text-sm sm:text-base text-gray-700">{text}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap sm:flex-row sm:items-center gap-4 mt-2">
              {readmore && <Link href="/about">
                <button className="bg-orange-500 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-[#4b584e] transition-all duration-300">
                  Read More →
                </button>
              </Link> }

              <div className="flex items-center gap-3">
                <div className="bg-orange-500 p-2.5 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="white"
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75C2.25 19.5 19.5 21.75 19.5 21.75s2.25-3.75 2.25-6-3-3-4.5-3-3 1.5-3 1.5-3-1.5-3-4.5 1.5-3 1.5-3-1.5-3-3-4.5S2.25 3.75 2.25 6.75z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-orange-500">Need Any Help?</p>
                  <Link href="tel:+1(778)-966-5270">
                    <p className="text-sm sm:text-base font-semibold text-gray-900">
                      7789665270
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>

      
        </div>
      </div>
    </div>
  );
};

export default About
