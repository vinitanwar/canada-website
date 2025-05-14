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
   
   <Banner bannerTitle='Incorporating New Company' />

      <section className="w-full bg-white py-14 px-4 md:px-8">
        <div className="max-w-[1331px] mx-auto flex flex-col lg:flex-row gap-12">
          {/* Left Text Content */}
          <div className="lg:w-2/3 w-full">
            <img src="/newimages/new_company_registration.jpg" className="pb-6" alt="service-img" />
            <h1 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">
            Canada-Wide Incorporation Services for New Entrepreneurs
            </h1>
            <p className="mb-4 text-gray-700 leading-relaxed">
            At Canada Wide Bookkeeping & Taxes, we understand that managing company taxes can be a challenging task. Our expert tax services ensure that your business complies with the latest tax laws while optimizing your tax liabilities. We focus on providing personalized solutions tailored to your company’s specific needs, ensuring you are well-positioned for growth.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
            Our corporate tax planning services help businesses reduce their tax burden through effective planning. We work with you to develop strategies that align with your financial goals and objectives. Whether you are a small startup or an established enterprise, we’ll help you navigate complex tax regulations and ensure you stay ahead of the curve.
            </p>

            <h2 className="text-2xl font-semibold mb-4">
            Tax Filing and Compliance
            </h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
            We handle all aspects of your company’s tax filing requirements, ensuring timely and accurate submission of corporate tax returns. Our team stays up-to-date on changing tax laws and regulations to ensure that your business remains compliant, avoiding penalties or unnecessary audits.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
            Navigating the complexities of sales taxes such as GST, HST, and PST can be overwhelming. Our team offers expert services to ensure your business correctly handles sales tax collection, reporting, and remittance. We aim to simplify the process and help you avoid costly errors.
            </p>
            <p className="text-gray-700 leading-relaxed">
            In the event of a tax audit, Canada Wide Bookkeeping & Taxes is here to represent you. Our experienced professionals will handle all interactions with tax authorities, ensuring your interests are protected throughout the audit process. We aim to minimize your stress and secure the best possible outcome for your business.
            </p>

            <div className="">
              <div>
                <h2 className="text-xl font-semibold mb-3">
                Tax Credits and Deductions
                </h2>
                <p className="text-gray-700 leading-relaxed">
                Take advantage of various tax credits and deductions available to your business. We’ll help you identify eligible credits, including those for research and development, innovation, and employee training. Our goal is to help your business save money and improve its cash flow by claiming all eligible tax benefits.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">
                International Tax Services
                </h2>
                <p className="text-gray-700 leading-relaxed">
                If your company operates internationally, understanding the tax implications can be complex. Our international tax services ensure that your business complies with cross-border tax laws. We offer guidance on transfer pricing, withholding taxes, and tax treaties to avoid double taxation and minimize liabilities.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-3">
                Tax Reorganization and Restructuring
                </h2>
                <p className="text-gray-700 leading-relaxed">
                Business restructuring can have significant tax implications. Our team provides expert advice on tax-efficient restructuring strategies. Whether you're considering mergers, acquisitions, or restructuring your business, we help minimize tax liabilities and enhance business efficiency during the process.
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
