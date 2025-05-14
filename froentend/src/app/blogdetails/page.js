"use client";
import React, { useEffect } from "react";
import { FaCheck } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaReplyAll } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { BiLogoFacebook } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import AOS from "aos";
import  Banner from '../component/Banner'
export default function page() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const data = {
    adminInfo: {
      image: "/Images/admin.webp",
      name: "Rajveer Singhania",
      email: "Admin@canadawidetaxes.com",
      description: "Canada Wide Bookkeeping & Taxes Ltd.",
    },

    popularTags: [
      { name: "Bookkeeping", link: "#" },
      { name: "Taxes", link: "#" },
      { name: "Canada CRA", link: "#" },
      { name: "GST/HST", link: "#" },
      { name: "Small Business", link: "#" },
      { name: "Accounting", link: "#" },
      { name: "Financial Tips", link: "#" },
    ],
  };

  return (
    <div>
     <Banner   bannerTitle='Book Keeping' />

      <div className="flex flex-col lg:flex-row px-0 lg:px-24 my-10 lg:my-20 lg:gap-20 px-4 md reltaive">
        <div className="lg:w-3/5 space-y-6">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-snug">
            Essential Bookkeeping & Tax Tips for Canadian Businesses
          </h1>

          <p className="text-[#5a5d63] text-sm md:text-base leading-relaxed text-justify">
            Managing your books and taxes in Canada doesn't have to be
            complicated. Begin with organizing your income, expenses, and
            receipts monthly. Leverage cloud accounting tools and consult a
            professional regularly to ensure you remain compliant and efficient.
          </p>

          <img
            src="/Images/blog-detail.webp"
            alt="Bookkeeping and Taxes"
            className="w-full h-auto rounded shadow-md"
          />

          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-black">
              Keep Records Organized
            </h2>
            <p className="text-[#5a5d63] text-sm md:text-base leading-relaxed text-justify">
              Organizing your receipts, invoices, and bank statements monthly
              helps in minimizing year-end stress. Use digital tools like
              QuickBooks or Xero to maintain everything in one place securely.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-black">
              Understand CRA Guidelines
            </h2>
            <p className="text-[#5a5d63] text-sm md:text-base leading-relaxed text-justify">
              Familiarize yourself with CRA regulations to know your business
              obligations. This includes deadlines, deductions, GST/HST filings,
              and allowable business expenses.
            </p>
            <p className="text-[#5a5d63] text-sm md:text-base leading-relaxed text-justify">
              A reliable bookkeeping system combined with knowledgeable tax
              strategies can significantly reduce your liabilities and help your
              business grow confidently across Canada.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-black">
              Key Takeaways for Small Businesses
            </h2>
            <ul className="space-y-3">
              {[
                "Maintain monthly bookkeeping habits.",
                "Know your CRA tax filing requirements.",
                "Save and back up all financial documents.",
                "Use accounting software for better accuracy.",
                "Work with a certified tax professional annually.",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-[#5a5d63] text-sm md:text-base leading-relaxed"
                >
                  <FaCheck className="text-orange-500 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <blockquote className="border-l-4 border-orange-500 bg-slate-50 p-6 text-[#5a5d63] text-sm md:text-base leading-relaxed">
            Stay audit-ready: Always label and file your documents correctly.
            Keeping track of deductions and taxes due will save both time and
            money.
          </blockquote>

          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-black">
              Avoid Costly Errors
            </h2>
            <p className="text-[#5a5d63] text-sm md:text-base leading-relaxed text-justify">
              Incorrect entries or missed deadlines can lead to CRA penalties.
              Whether you’re a freelancer or a corporation, timely filing and
              accurate books are crucial. Consider outsourcing to a professional
              service for peace of mind.
            </p>
          </div>
        </div>

        <div className="flex flex-col w-full lg:w-1/3 px-5 md:px-10 lg:px-0 space-y-7 lg:sticky lg:top-20 h-fit">
          <div className="md:w-full flex flex-col h-auto shadow-md bg-slate-50 rounded-xl items-center lg:py-10 lg:px-5  space-y-3 mt-5">
            <img src={data.adminInfo.image} alt="Admin" className="w-12" />
            <h3 className="text-lg font-semibold">{data.adminInfo.name}</h3>

            <ul className="flex gap-1 text-yellow-400 text-base">
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStarHalfAlt />
              </li>
              <li>
                <FaRegStar />
              </li>
            </ul>
            <p className="text-base text-gray-500 leading-relaxed text-center">
              {data.adminInfo.description}
            </p>
            <Link
              href={`mailto:${data.adminInfo.email}`}
              target="_blank"
              className="font-semibold text-sm hover:text-[#d3000a]"
            >
              {data.adminInfo.email}
            </Link>
            <div className="flex items-center gap-3">
              <Link
                href="https://www.facebook.com/"
                className="bg-white border border-gray-300 p-2 rounded hover:text-white hover:bg-[#d3000a] transform duration-300"
              >
                <BiLogoFacebook />
              </Link>
              <Link
                href="https://x.com/home"
                className="bg-white border border-gray-300 p-2 rounded hover:text-white hover:bg-[#d3000a] transform duration-300"
              >
                <FaXTwitter />
              </Link>
              <Link
                href="https://www.instagram.com/"
                className="bg-white border border-gray-300 p-2 rounded hover:text-white hover:bg-[#d3000a] transform duration-300"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://www.pinterest.com"
                className="bg-white border border-gray-300 p-2 rounded hover:text-white hover:bg-[#d3000a] transform duration-300"
              >
                <FaPinterestP />
              </Link>
            </div>
          </div>

          <div className="md:w-full h-auto shadow-md rounded-xl items-center py-7 px-5 md:px-10 space-y-6 mt-5 ">
            <h3 className="text-base font-semibold border-l-2 border-orange-500 pl-3 ">
              Popular Tags
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3  text-center gap-3  text-nowrap w-full">
              {data.popularTags.map((tag) => (
                <Link
                  href={tag.link}
                  key={tag.id}
                  className="text-sm md:text-base text-gray-500  py-3 px-2 bg-slate-100 rounded-xl hover:text-white hover:bg-orange-500 transform duration-300"
                  onClick={() => setActiveService(tag.id)}
                >
                  {tag.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
