"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaHome,
  FaInfoCircle,
  FaPhoneAlt,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaServicestack,
  FaBlogger,
  FaMapMarkerAlt,
  FaEnvelope,
  FaWhatsapp
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

import { IoCallSharp } from "react-icons/io5";
import { MdContactPhone } from "react-icons/md";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";





export default function Footer() {
     const [sitelayout,setsitelayout]=useState()
const state2=useSelector((state)=>state.layout)





useEffect(()=>{


    setsitelayout(state2?.info)
    
},[state2])
  return (
    <>
      <footer className="Footer  text-white py-9 pb-20 md:pb-5 mt-0 shadow-lg" style={{background:sitelayout?.color}}>
        <div className="px-5 md:px-8 lg:px-16 xl:px-32">
          <div className="grid  justify-between lg:grid-cols-3 xl:grid-cols-4 pb-5">
            {/* Logo and Tagline */}
            <div className="flex flex-col items-center  lg:items-start gap-4">
              <Link href="/">
                <figure className=" bg-[#D9DDDC] rounded-md p-3  transition shadow-sm shadow-blue-700">
                  <Image
                    className="rounded-md object-cover w-[200px]"
                    src="/newimages/footer.jpg"
                    width={100}
                    height={50}
                    alt="Company Logo"
                  />
                </figure>
              </Link>
              <p className="text-sm text-justify lg:text-left leading-relaxed text-white">
                We are your financial partners, led by expert 
                Accountants with strong finance, tax, and business strategy
                knowledge.
              </p>
                    <div className="flex   space-x-4 mt-1 md:mt-0 ">
    <a href="https://www.facebook.com/canadawidetaxes" target="_blank" rel="noopener noreferrer">
      <FaFacebook size={20} className="hover:text-blue-500 transition-all" />
    </a>
    <a href="https://www.instagram.com/canadawidetaxes/" target="_blank" rel="noopener noreferrer">
      <FaInstagram size={20} className="hover:text-pink-500 transition-all" />
    </a>
    <a href="https://www.linkedin.com/company/canadawidetaxes" target="_blank" rel="noopener noreferrer">
      <FaLinkedin size={20} className="hover:text-blue-700 transition-all" />
    </a>
    <a href="https://x.com/canadawidetaxes" target="_blank" rel="noopener noreferrer">
      <FaXTwitter size={20} className="hover:text-gray-400 transition-all" />
    </a>
    <a href="https://www.youtube.com/@canadawidetaxes" target="_blank" rel="noopener noreferrer">
      <FaYoutube size={20} className="hover:text-red-500 transition-all" />
    </a>
  </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col gap-4 pt-13 md:pt-0 md:ps-10">
              <h6 className="text-lg font-semibold border-l-4 border-orange-500  pl-4 mb-2">
                Navigation
              </h6>
              {[
                { href: "/", label: "Home", icon: <FaHome size={18} /> },
                {
                  href: "/about",
                  label: "About Us",
                  icon: <FaInfoCircle size={18} />,
                },
                {
                  href: "/service",
                  label: "Services",
                  icon: <FaServicestack size={18} />,
                },
                { href: "/blog", label: "Blog", icon: <FaBlogger size={18} /> },
                {
                  href: "/contact-us",
                  label: "Contact Us",
                  icon: <FaPhoneAlt size={18} />,
                },
              ].map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="flex items-center text-sm hover:underline hover:text-blue-500 transition-all"
                >
                  <span className="mr-2 text-white">{item.icon}</span>{" "}
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Add-On Services */}
            <div className="  flex flex-col gap-4 pt-13 md:-ms-14 md:pt-0 ">
              <h6 className="text-lg font-semibold border-l-4 border-orange-500  pl-4 mb-2">
              Our  Services
              </h6>
              <div className="flex gap-5">
              <div className="flex flex-col gap-4">
              {[
                { label: 'Bookkeeping Services', href: '/bookKeeping' },
                    { label: 'Payroll Services', href: '/payroll' },
                    { label: 'Financial Statements', href: '/financial-statements' },
                    { label: 'Corporate Tax Filing', href: '/corporate-tax-filing' },
                    { label: 'Personal Tax Filing', href: '/personal-tax-filing' },
                    
              ].map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="flex items-center text-sm hover:underline hover:text-blue-500 transition-all"
                >
                  {/* <span className="mr-2 text-white">{item.icon}</span>{" "} */}
                  {item.label}
                </Link>
              ))}
              </div>
              <div className="flex flex-col gap-4">
              {[
                
                { label: 'PST Filing', href: '/pst-filing' },
                    // { label: 'HST Filing', href: '/hst-filing' },
                    { label: 'WCB Filing', href: '/wcb-filing' },
                    { label: 'Non-Resident Taxes', href: '/non-resident-taxes' },
                    { label: 'Self Employed Tax Filing', href: '/self-employed-tax-filing' },
                    { label: 'Incorporating New Company', href: '/incorporating-new-company' }
              ].map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="flex items-center text-sm hover:underline hover:text-blue-500 transition-all"
                >
                  {/* <span className="mr-2 text-white">{item.icon}</span>{" "} */}
                  {item.label}
                </Link>
              ))}
              </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-4 pt-13 md:pt-0">
              <h6 className="text-lg font-semibold border-l-4 border-orange-500  pl-4 mb-2">
                Contact Information
              </h6>
              <Link href="https://www.google.com/maps?q=1920+San+Fernando+Pl,+V8N+2G1+Victoria,+BC+CANADA">
                <p className="text-sm flex items-start">
                  <FaMapMarkerAlt className="mr-2 mt-1 text-xl text-white" />
                  {sitelayout?.address}
                </p>
              </Link>
              <p className="text-sm flex items-center">
                <FaEnvelope className="mr-2 text-xl text-white" />
                <Link
                  href={`mailto:${sitelayout?.email}`}
                  className="hover:underline"
                >
                  {sitelayout?.email}
                </Link>
              </p>
              <p className="text-sm flex items-center">
                <FaPhoneAlt className="mr-2 text-xl text-white" />
                <Link href={`tel:${sitelayout?.number}`} className="hover:underline">
                  {sitelayout?.number}
                </Link>
              </p>
        
            </div>

            {/* Social & CTA */}
            {/* <div className="flex flex-col gap-4 text-center lg:text-left">
              <div>
                <h6 className="text-lg font-semibold mb-2">Follow Us</h6>
                <div className="flex justify-center lg:justify-start items-center space-x-5">
                  <Link
                    href="https://www.facebook.com/canadawidetaxes"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook
                      size={26}
                      className="hover:text-blue-500 transition-all"
                    />
                  </Link>
                  <Link
                    href="https://www.instagram.com/canadawidetaxes/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram
                      size={26}
                      className="hover:text-pink-500 transition-all"
                    />
                  </Link>
                  <Link
                    href="https://www.instagram.com/canadawidetaxes/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin
                      size={26}
                      className="hover:text-pink-500 transition-all"
                    />
                  </Link>

                  <Link
                    href="https://x.com/canadawidetaxes"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaXTwitter
                      size={26}
                      className="hover:text-red-500 transition-all"
                    />
                  </Link>
                  <Link
                    href="https://www.youtube.com/@canadawidetaxes"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaYoutube
                      size={26}
                      className="hover:text-red-500 transition-all"
                    />
                  </Link>
                </div>
              </div>
              <div className="mt-4">
                <h6 className="text-lg font-semibold mb-2">Need Help?</h6>
                <p className="text-sm text-white">
                  Have questions or need help with your booking?
                </p>
                <Link
                  href="/contact-us"
                  className="text-orange-500 hover:underline"
                >
                  Contact Our Team
                </Link>
              </div>
            </div> */}
          </div>

         
          <div className="md:flex flex-col md:flex-row justify-center border-t-2 border-dotted py-5 items-center text-sm text-white text-center gap-2">
  <p className="mb-2 md:mb-0">
    © {new Date().getFullYear()} Canada Wide Bookkeeping & Taxes Ltd.
    All rights reserved.
  </p>
  
</div>

        </div>
      </footer>


      

      <div className="main-icon-wstp fixed bottom-0 left-0 flex flex-col gap-3 z-50  md:hidden w-full" >

<div className="w-full bg-[#081b43] text-[orange] grid grid-cols-4  border-t-2 border-[orange] text-[14px]">

<Link href="tel:+1(778)-966-5270" className="flex flex-col items-center border-r-2 border-[orange] py-2">
  <IoCallSharp className="text-lg" />
  Call me
  </Link>
<Link href={"/contact-us"} className="flex flex-col items-center border-r-2 border-[orange] py-2 ">
  <MdContactPhone className="text-lg" />
  Contact
</Link>
<Link
 href="https://api.whatsapp.com/send?phone=+1(778)-966-5270&text="
          target="_blank"
          rel="noopener noreferrer" className="flex flex-col items-center border-r-2 border-[orange] py-2 ">
  <FaWhatsapp  className="text-lg"/>
  WhatsApp
</Link>
<Link
target="_blank"
href="mailto:Admin@canadawidetaxes.com"
className="flex flex-col items-center py-2 ">
  <IoIosMail  className="text-lg"/>
  Email
</Link>

</div>



       {/* <Link href="tel:+1(778)-966-5270">
      <button
        className=" bg-[#081b43] text-white p-4 rounded-full 
                   shadow-lg hover:scale-110 transition-all duration-150 ease-in-out 
                    lg:hidden"
        aria-label="Call Us"
      >
        <FiPhoneCall size={24} color="orange" />
      </button>
    </Link>
       <Link href="tel:+1(778)-966-5270" >
          <button
            className=" rounded-full overflow-hidden shadow-lg transition-all hover:scale-110    lg:hidden"
            aria-label="Call Us"
          >
            <img
              src="/Images/callicon.webp"
              alt="Call Icon"
              className="w-14 h-14"
            />
          </button>
        </Link> 
        <Link
          href="https://api.whatsapp.com/send?phone=+1(778)-966-5270&text="
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="Btn rounded-full overflow-hidden shadow-lg transition-all hover:scale-110 block lg:hidden"
            aria-label="WhatsApp Us"
          >
            <img
              src="/Images/whatsapp.webp"
              alt="WhatsApp Icon"
              className="w-14 h-14"
            />
          </button>
        </Link> */}
      </div>
    </>
  );
}
