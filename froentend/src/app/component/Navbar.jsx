"use client";

import { useState, useEffect, useRef } from "react";
import { LuMenu } from "react-icons/lu";
import { BsBuildings } from "react-icons/bs";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { MdOutlineSupportAgent, MdOutlineErrorOutline } from "react-icons/md";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaPhoneAlt, FaMapMarkerAlt, FaVoicemail } from "react-icons/fa";
import Link from "next/link";
import { MdContactMail } from "react-icons/md";  // Contact icon
import { FaBlog } from "react-icons/fa";         // Blog icon
import { useSelector } from "react-redux";
import { imgurl } from "./common";
import { FaClipboardList } from "react-icons/fa";


const Navbar = () => {
  const [toggler, setToggler] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showRentalDropdown, setShowRentalDropdown] = useState(false);
  const [showGSTDropdown, setShowGSTDropdown] = useState(false);
  const sidebarRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
const [userlogin,setUserLogin]=useState(false)
const state=useSelector((state)=>state.getuser)


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setToggler(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  useEffect(()=>{
  
if(!state.isLoading){
 
  if(state?.info?.success){
    setUserLogin(true)
  
  }
}
},[state])

  const closeMenu = () => setToggler(false);
  const toggleRentalDropdown = () => setShowRentalDropdown(!showRentalDropdown);
  const toggleGSTDropdown = () => setShowGSTDropdown(!showGSTDropdown);

  const [myNavOpen,setMyNavOpen]=useState(false)

  const [innerDrop,setInnerDrop]=useState(false)  



   const [sitelayout,setsitelayout]=useState()
const state2=useSelector((state)=>state.layout)





useEffect(()=>{


    setsitelayout(state2?.info)
    
},[state2])

  return (
    <>
      {/* Navbar */}
      <div
        className={`sticky top-0 z-50 w-full ${isScrolled ? "bg-white border-b border-gray-200 shadow-lg" : "bg-white"
          } transition-all duration-300 ease-in-out z-50`} onMouseLeave={()=>setMyNavOpen(false)}
      >
        <div className="container mx-auto py-2 px-4 md:px-8 lg:px-12 xl:px-22 flex justify-between items-center">
          <Link href={"/"}>
            <img
              className=" lg:w-[240px] w-[175px] md object-cover"
              src={`${imgurl}/${sitelayout?.logo}`}
              width={100}
              height={70}
              alt="Site Logo"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8" >
            <ul className="flex gap-8 items-center">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>

              {/* Services with Nested Dropdown */}
              <li className="relative group">
                <button onMouseEnter={()=>setMyNavOpen(true)} className="hover:text-gray-700 flex items-center gap-1">
                  Services
                  <IoIosArrowDown className="text-sm mt-1" />
                </button>
              {myNavOpen && ( <div className=" absolute left-0 top-2 pt-5" onMouseLeave={()=>setMyNavOpen(false)}>
                <div  className="  mt-2 bg-white border  shadow-xl w-[280px]  group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 ease-in-out z-40">
                  {[ 
                    { label: 'Bookkeeping Services', href: '/bookKeeping' },
                    { label: 'Payroll Services', href: '/payroll' },
                    { label: 'Financial Statements', href: '/financial-statements' },
                    { label: 'Corporate Tax Filing', href: '/corporate-tax-filing' },
                    { label: 'Personal Tax Filing', href: '/personal-tax-filing' },
                    { label: 'Self Employed Tax Filing', href: '/self-employed-tax-filing' },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-100"
                    >
                      {item.label}
                    </Link>
                  ))}

                  {/* Nested Dropdown */}
                  <div className="relative group">
                    <div
                      className="flex justify-between items-center px-4 py-3 text-gray-700 hover:bg-gray-100 cursor-pointer"
                      onMouseEnter={() => setInnerDrop(true)}
                     
                    >
                   <Link href='/gst-filing'>  <span>GST Filing</span></Link> 
                      <IoIosArrowForward className="ml-auto" />
                    </div>

                    {innerDrop && (
                      <div
                        className="absolute left-full top-0 mt-0 w-[220px] bg-white border border-gray-200 shadow-lg z-50"
                        onMouseLeave={() => setInnerDrop(false)}
                      >
                        <Link href="/pst-filing" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">PST Filing</Link>
                        <Link href="/hst-filing" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">HST Filing</Link>
                        <Link href="/wcb-filing" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">WCB Filing</Link>
                      </div>
                    )}
                  </div>

                  <Link href="/non-resident-taxes" className="block px-4 py-3 text-gray-700 hover:bg-gray-100">Non-Resident Taxes</Link>
                  <Link href="/incorporating-new-company" className="block px-4 py-3 text-gray-700 hover:bg-gray-100">Incorporating New Company</Link>
                </div>
                </div>
              
              )}
               
              </li>

              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact-us">Contact</Link></li>
            </ul>
          
            <Link href={`${sitelayout?.paymentlink}`} target="_blank" className="lg:flex gap-4 hidden">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300">
                <img className="w-5 h-7 object-contain" src="/Images/credit-card.webp" alt="Phone Icon" />
                <p className="text-gray-700">
                  Make A Payment
                </p>
              </div>
            </Link>

            <Link href={`tel:${sitelayout?.number}`} className="lg:flex gap-4 hidden">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300">
                <img className="w-5 h-7" src="/asset 3.svg" alt="Phone Icon" />
                <p className="text-gray-700">{sitelayout?.number}</p>
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setToggler(!toggler)}
              className="bg-white text-black text-2xl p-3 rounded-full shadow-md focus:outline-none"
            >
              <LuMenu />
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-screen bg-gray-100 text-gray-800 shadow-2xl z-50 transform ${toggler ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-500 ease-in-out md:rounded-l-2xl p-6 w-80`}
      >
        <div className="flex justify-end mb-4">
          <button onClick={closeMenu} className="text-3xl font-bold text-black hover:text-gray-800">
            &times;
          </button>
        </div>
        <div className="flex flex-col gap-5">

          {/* Basic Links */}
          <Link href="/" onClick={closeMenu} className="flex items-center gap-2 p-3 hover:bg-gray-200 border-b-2">
            <IoNewspaperOutline className="text-2xl" /> Home
          </Link>
          <Link href="/about" onClick={closeMenu} className="flex items-center gap-2 p-3 hover:bg-gray-200 border-b-2">
            <MdOutlineErrorOutline className="text-2xl" /> About Us
          </Link>

          {/* Services with nested menu */}
          <div>
            <div
              className="flex items-center gap-2 p-3 hover:bg-gray-200 border-b-2 cursor-pointer"
              onClick={toggleRentalDropdown}
            >
              <BsBuildings className="text-2xl" />
              <div className="flex justify-between w-full">
                <span>Services</span>
                {showRentalDropdown ? <IoIosArrowDown /> : <IoIosArrowForward />}
              </div>
            </div>

            {showRentalDropdown && (
              <div className="ml-6 flex flex-col gap-2 mt-2">
                <Link href="/bookKeeping" onClick={closeMenu}>BookKeeping</Link>
                <Link href="/payroll" onClick={closeMenu}>Payroll Services</Link>
                <Link href="/financial-statements" onClick={closeMenu}>Financial Statements</Link>
                <Link href="/corporate-tax-filing" onClick={closeMenu}>Corporate Tax Filing</Link>
                <Link href="/personal-tax-filing" onClick={closeMenu}>Personal Tax Filing</Link>
                <Link href="/self-employed-tax-filing" onClick={closeMenu}>Self Employed Tax Filing</Link>

                {/* Nested GST Menu */}
                <div>
               <Link href='/gst-filing'>  <div
                    className="flex justify-between items-center cursor-pointer hover:bg-gray-200 p-2"
                    onClick={toggleGSTDropdown}
                  >
                <Link href='/gst-filing'>   <span>GST Filing </span></Link> 
                    {showGSTDropdown ? <IoIosArrowDown /> : <IoIosArrowForward />}
                  </div></Link> 
                  {showGSTDropdown && (
                    <div className="ml-4 flex flex-col gap-2 mt-1">
                      <Link href="/pst-filing" onClick={closeMenu}>PST Filing</Link>
                      <Link href="/hst-filing" onClick={closeMenu}>HST Filing</Link>
                      <Link href="/wcb-filing" onClick={closeMenu}>WCB Filing</Link>
                    </div>
                  )}
                </div>

                <Link href="/non-resident-taxes" onClick={closeMenu}>Non-Resident Taxes</Link>
                <Link href="/incorporating-new-company" onClick={closeMenu}>Incorporating New Company</Link>
              </div>
            )}
          </div>
          <Link href="/blog" onClick={closeMenu} className="flex items-center gap-2 p-3 hover:bg-gray-200 border-b-2">
  <FaBlog className="text-2xl" /> Blog
</Link>

<Link href="/contact-us" onClick={closeMenu} className="flex items-center gap-2 p-3 hover:bg-gray-200 border-b-2">
  <MdContactMail className="text-2xl" /> Contact Us
</Link>

{  !userlogin && <Link
                          href="/client-login"
                          onClick={closeMenu}
                          className=" flex items-center gap-2 p-3 hover:bg-gray-200 border-b-2"
                        >
                        <FaClipboardList />  <span>Client Login</span>
                        </Link>
              }
              {   userlogin && <Link
                          href="/user"
                          onClick={closeMenu}
                          className= "flex items-center gap-2  p-3 hover:bg-gray-200 border-b-2"
                        >
                          <FaClipboardList />
                          <span>Client Profile</span>
                        </Link>
              }
          {/* Contact Details */}
          <div className="mt-6 bg-gray-200 p-4 rounded-lg text-sm text-gray-700">
            <div className="flex items-center gap-3 mb-2">
              <FaPhoneAlt /> <span>{sitelayout?.number}</span>
            </div>
            <div className="flex items-center gap-3">
              <FaVoicemail /> <span>{sitelayout?.email}</span>
            </div>
            <div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
