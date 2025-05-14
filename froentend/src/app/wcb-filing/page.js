import React from "react";

import SuccessStory from "../component/Testimonails";
import ClientStory from "../component/Clinetstory";
import Link from "next/link";

import {
  UserIcon,
  PhoneIcon,
  EnvelopeIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/outline";
import Banner from "../component/Banner";



const page = () => {
  return (
    <>
    
    <Banner bannerTitle="Wcb Filing" />

      <section className="w-full bg-white py-14 px-4 md:px-8">
        <div className="max-w-[1331px] mx-auto flex flex-col lg:flex-row gap-12">
          {/* Left Text Content */}
          <div className="lg:w-2/3 w-full">
            <img src="/Images/herosectionimg.avif" className="pb-6" alt="service-img" />
            <h1 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">
            WCB Filing During Business Expansion

            </h1>
            <p className="mb-4 text-gray-700 leading-relaxed">
            Expanding your business means more employees and new jurisdictions — which complicates WCB responsibilities. Canada Wide Bookkeeping & Taxes supports growing companies by adapting your WCB filings to match your evolving structure. We update your account with new employee data, adjust classification codes if necessary, and ensure compliance across provinces. Whether you're hiring more staff, opening a new location, or entering new sectors, we make sure your WCB filings scale smoothly with your success.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Small business owners often overlook WCB responsibilities due to a lack of resources or knowledge. At Canada Wide Bookkeeping & Taxes, we specialize in assisting small businesses with their WCB registration, filing, and compliance.
            </p>

            <h2 className="text-2xl font-semibold mb-4">
            Monthly and Annual WCB Reporting
            </h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
            WCB filing requirements can vary from monthly, quarterly, or annually depending on your province and payroll size. Our team ensures that every deadline is met without delays.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
            Whether you're a small business owner with a few employees or a large corporation, we manage your filings with precision. We calculate your insurable earnings, assist in classification reviews, and help correct past errors to keep your business in good standing.
            </p>
            <p className="text-gray-700 leading-relaxed">
            No two businesses are alike — and neither are their WCB obligations. At Canada Wide Bookkeeping & Taxes, we offer customized WCB reporting services tailored to your business size, province, and industry. 
            </p>

            <div className="">
              <div>
                <h2 className="text-xl font-semibold mb-3">
                Handling WCB Audits
                </h2>
                <p className="text-gray-700 leading-relaxed">
                WCB audits can be stressful, especially if you’re unsure of past filings. At Canada Wide Bookkeeping & Taxes, we provide audit support by organizing your records, reviewing past filings, and representing your business during any inquiries. Our specialists ensure that you are fully prepared and protected throughout the audit process, giving you peace of mind and full confidence in your compliance status.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">
                WCB Registration and Account Setup
                </h2>
                <p className="text-gray-700 leading-relaxed">
                New business owners often need help registering for WCB and setting up their accounts correctly. Our team assists with the full registration process — choosing the right classification codes, estimating premiums, and submitting your initial documentation. Canada Wide Bookkeeping & Taxes ensures your account setup is smooth, error-free, and ready for accurate future filings.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-3">
                Industry-Specific WCB Support

                </h2>
                <p className="text-gray-700 leading-relaxed">
                Different industries have different risk factors and WCB rates. We offer specialized WCB filing services for construction, healthcare, retail, manufacturing, and more. Canada Wide Bookkeeping & Taxes understands how classification codes work and how incorrect entries can lead to higher premiums. We make sure your business is classified properly and eligible for refunds or reductions if overpaid.
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
