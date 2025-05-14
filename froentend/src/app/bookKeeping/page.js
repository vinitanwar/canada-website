import React from "react";

import SuccessStory from "../component/Testimonails";
import ClientStory from "../component/Clinetstory";
import Link from "next/link";
import  Banner from '../component/Banner'
import {
  UserIcon,
  PhoneIcon,
  EnvelopeIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/outline";



const page = () => {
  return (
    <>
    
     <Banner bannerTitle='Book Keeping' />
     
      <section className="w-full bg-white py-14 px-4 md:px-8">
        <div className="max-w-[1331px] mx-auto flex flex-col lg:flex-row gap-12">
   
          <div className="lg:w-2/3 w-full">
            <img src="/Images/herosectionimg.avif" className="pb-6" alt="service-img" />
            <h1 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">
            Expert Bookkeeping Services – Canada Wide Bookkeeping & Taxes
            </h1>
            <p className="mb-4 text-gray-700 leading-relaxed">
            Stay stress-free and compliant with our professional bookkeeping services tailored for individuals, small businesses, and corporations across Canada. At Canada Wide Bookkeeping & Taxes, we ensure accurate financial records, organized reporting, and year-round support so you can focus on growing your business. Whether you're self-employed or managing a growing enterprise, our expert team simplifies your finances and helps you make informed decisions.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
            At Canada Wide Bookkeeping & Taxes, we handle your day-to-day financial transactions with precision and care. From bank reconciliations to expense tracking and income statement preparation, our services are designed to give you peace of mind and a clear picture of your business’s financial health.
            </p>

            <h2 className="text-2xl font-semibold mb-4">
            Personal & Business Bookkeeping Services
            </h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
            Whether you're an entrepreneur, freelancer, or managing a growing company, we provide customized bookkeeping solutions to match your needs. Our cloud-based tools and expert guidance ensure accuracy, transparency, and compliance with CRA requirements.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
            We help you stay audit-ready with clean, organized financials. Our team ensures your books are always up to date, making tax season smooth and stress-free. Get reliable reporting that helps you avoid penalties and maximize deductions.
            </p>
            <p className="text-gray-700 leading-relaxed">
            Choose a flexible plan that fits your business size and industry. Our packages include detailed financial reporting, GST/HST filing support, payroll integration, and year-end preparation. Transparent pricing with no hidden fees.
            </p>

            <div className="">
              <div>
                <h2 className="text-xl font-semibold mb-3">
                  Why Professional Bookkeeping Matters
                </h2>
                <p className="text-gray-700 leading-relaxed">
                Running a small business? We’ve got your back. Our dedicated team helps you maintain clean records, manage expenses, and stay tax-compliant—so you can focus on scaling your business without the paperwork headaches.As your business evolves, so do your financial needs. Our scalable bookkeeping services are built to grow with your company—from startup to incorporation—ensuring you always have the financial clarity you need.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">
                •  Real-Time Financial Insights & Reports
                </h2>
                <p className="text-gray-700 leading-relaxed">
                Make smarter decisions with real-time profit/loss statements, cash flow summaries, and custom financial reports. We turn your numbers into clear insights, helping you plan ahead with confidence.


                </p>

                <h2 className="text-xl font-semibold mt-6 mb-3">
                  • Dedicated Bookkeeper Support
                </h2>
                <p className="text-gray-700 leading-relaxed">
                With Canada Wide Bookkeeping & Taxes, you're never alone. Every client gets a dedicated bookkeeper who understands your business, offers timely advice, and ensures accuracy in every transaction.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">Who We Serve</h2>
                <p className="text-gray-700 mb-2">
                  <strong>
                    We work with a wide range of clients including:
                  </strong>
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Small & Medium-Sized Businesses</li>
                  <li>Self-Employed Professionals</li>
                  <li>Law Firms and Real Estate Agents</li>
                  <li>Startups and Corporations</li>
                  <li>Non-Profits and Community Organizations</li>
                </ul>
                <p className="mt-3 text-gray-700">
                  No matter your industry or business size, our solutions scale
                  with you.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 w-full">
            <div className="sticky top-24 bg-white border border-orange-100 shadow-2xl  p-6 space-y-10">
              {/* Booking Form */}

              <form className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 border-b-2 border-orange-200 pb-4">
                  Book a Free Consultation
                </h3>

                <div className="space-y-4">
                  <div className="relative">
                    <UserIcon className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full pl-12 pr-5 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition"
                      required
                    />
                  </div>

                  <div className="relative">
                    <PhoneIcon className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full pl-12 pr-5 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition"
                      required
                    />
                  </div>

                  <div className="relative">
                    <EnvelopeIcon className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full pl-12 pr-5 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition"
                    />
                  </div>

                  <div className="relative">
                    <ChatBubbleLeftEllipsisIcon className="w-5 h-5 text-gray-400 absolute left-4 top-4" />
                    <textarea
                      placeholder="Your Message"
                      rows="4"
                      className="w-full pl-12 pr-5 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition resize-none"
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg text-base transition-all duration-300 shadow-md"
                >
                  Submit
                </button>
              </form>

              {/* Services List */}
              <div className="">
  <div className="bg-orange-500 polygon-custom px-5 py-3 mb-2">
    <h2 className="text-lg text-white font-bold">Our Services</h2>
  </div>
   <ul className="">
                  {[
                    {
                      name: "Bookkeeping Services",
                      href: "/bookkeeping",
                    },
                    { name: "Payroll Services", href: "/payroll" },
                    {
                      name: "Financial Statements",
                      href: "/financial-statements",
                    },
                    {
                      name: "Corporate Tax Filing",
                      href: "/corporate-tax-filing",
                    },
                    {
                      name: "Personal Tax Filing",
                      href: "/personal-tax-filing",
                    },
                    {
                      name: "Self Employed Tax Filing",
                      href: "/self-employed-tax-filing",
                    },
                    { name: "GST Filing", href: "/gst-filing" },
                    {
                      name: "Non-Resident Taxes",
                      href: "/non-resident-taxes",
                    },
                    {
                      name: "Incorporating New Company",
                      href: "/incorporating-new-company",
                    },
                  ].map((service, index) => (
                    <li
                      key={index}
                      className="border-b group border-dashed w-full border-gray-200 px-5 py-3 font-medium transition duration-500 hover:bg-[#263948] hover:text-white"
                    >
                      <Link
                        href={service.href}
                        className="w-full flex items-center justify-between text-sm"
                      >
                        <span>{service.name}</span>
                        <i className="bx bx-check border rounded-full p-2 bg-orange-500 text-white text-xl group-hover:text-orange-500 group-hover:bg-white"></i>
                      </Link>
                    </li>
                  ))}
                </ul>
</div>

            </div>
          </div>
        </div>
      </section>

    
      <ClientStory />
      <SuccessStory />
    </>
  );
};

export default page;
