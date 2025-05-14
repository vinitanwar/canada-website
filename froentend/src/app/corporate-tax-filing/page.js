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

    <Banner bannerTitle='Corporate Tax Filing' />

      <section className="w-full bg-white py-14 px-4 md:px-8">
        <div className="max-w-[1331px] mx-auto flex flex-col lg:flex-row gap-12">
          {/* Left Text Content */}
          <div className="lg:w-2/3 w-full">
            <img src="/newimages/Corporate_Tax.jpg" className="pb-6" alt="service-img" />
            <h1 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">
            Corporate Tax Filing Made Easy

            </h1>
            <p className="mb-4 text-gray-700 leading-relaxed">
            At Canada Wide Bookkeeping & Taxes, we specialize in seamless corporate tax filing for businesses of all sizes. Our experts ensure your corporation stays compliant with CRA regulations, maximizes deductions, and avoids penalties. Whether you're a startup or an established enterprise, we handle everything—from T2 returns to GST/HST filings—so you can focus on growing your business. Let us simplify your tax season with accurate, on-time, and hassle-free service.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
            We take the stress out of corporate tax season. From accurate financial reporting to CRA submissions, our team ensures your business meets all tax obligations while identifying key areas for savings. Trust Canada Wide Bookkeeping & Taxes for reliable, efficient, and expert corporate tax filing services.
            </p>

            <h2 className="text-2xl font-semibold mb-4">
            Comprehensive Corporate Tax Services
            </h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
            We take the stress out of corporate tax season. From accurate financial reporting to CRA submissions, our team ensures your business meets all tax obligations while identifying key areas for savings. Trust Canada Wide Bookkeeping & Taxes for reliable, efficient, and expert corporate tax filing services.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
            Filing corporate taxes in Canada can be complex—but not with us. Our specialists understand every aspect of the Canadian tax code and work diligently to uncover every deduction and credit your business is entitled to. Avoid costly mistakes and ensure full compliance with our professional support.
            </p>
            <p className="text-gray-700 leading-relaxed">
            No two businesses are the same, which is why we provide customized corporate tax solutions that align with your industry, structure, and growth plans. Whether you're incorporated federally or provincially, we help you file with confidence and clarity.
            </p>

            <div className="">
              <div>
                <h2 className="text-xl font-semibold mb-3">
                Your Trusted Partner in Corporate Tax Filing
                </h2>
                <p className="text-gray-700 leading-relaxed">
                Join hundreds of Canadian businesses who count on us to handle their year-end tax filings with precision. From bookkeeping reconciliation to T2 corporate returns, Canada Wide Bookkeeping & Taxes is your trusted tax-season partner.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">
                  •Avoid Penalties & CRA Audits
                </h2>
                <p className="text-gray-700 leading-relaxed">
                Mistakes in corporate tax filing can lead to audits, penalties, and unnecessary stress. Our experts ensure your corporate taxes are filed correctly the first time—helping you maintain compliance and peace of mind.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-3">
                  •Expert Corporate Tax Filing Across Canada
                </h2>
                <p className="text-gray-700 leading-relaxed">
                Our certified tax professionals handle your corporate taxes with precision, ensuring full compliance with federal and provincial regulations. Whether you're based in Ontario, Alberta, or anywhere else in Canada, we’ve got your business covered.
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
