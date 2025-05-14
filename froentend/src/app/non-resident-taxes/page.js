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
    
 <Banner bannerTitle='Non-Resident Taxes ' />

      <section className="w-full bg-white py-14 px-4 md:px-8">
        <div className="max-w-[1331px] mx-auto flex flex-col lg:flex-row gap-12">
          {/* Left Text Content */}
          <div className="lg:w-2/3 w-full">
            <img src="/newimages/Non-Resident_Taxes.jpg" className="pb-6" alt="service-img" />
            <h1 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">
            Expert Non-Resident Tax Services in Canada
            </h1>
            <p className="mb-4 text-gray-700 leading-relaxed">
            Canada Wide Bookkeeping & Taxes specializes in helping non-residents of Canada file accurate and timely tax returns. Whether you’re an investor, property owner, or earning income from Canadian sources, we ensure your tax obligations are met with ease. Our experts understand the complexities of non-resident tax regulations and help minimize liabilities while maximizing returns.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
            If you earn rental income, capital gains, pensions, or employment income from Canada while living abroad, you may be required to file a non-resident tax return. Canada Revenue Agency (CRA) has specific rules for non-residents, and failing to comply can lead to penalties. We help you stay compliant with clear guidance and reliable support.
            </p>

            <h2 className="text-2xl font-semibold mb-4">
            Property Owners: Your Tax Guide
            </h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
            Non-residents who own Canadian property must file NR4 or Section 216 returns. Whether you’re renting out your property or selling it, we handle the paperwork, withholding taxes, and reporting obligations. Trust us to simplify the process so you can focus on your investment.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
            Earning rental income from a Canadian property? You're required to remit 25% of the gross rent to the CRA monthly. However, filing a Section 216 return allows you to be taxed on net income instead. We assist in preparing and filing to optimize your tax benefits.
            </p>
            <p className="text-gray-700 leading-relaxed">
            Selling Canadian property as a non-resident involves strict CRA rules including obtaining a clearance certificate and paying capital gains taxes. Our team handles the entire process, ensuring compliance and helping reduce your tax burden. Don’t risk delays or penalties—let us take care of it.
            </p>

            <div className="">
              <div>
                <h2 className="text-xl font-semibold mb-3">
                Withholding Tax Management
                </h2>
                <p className="text-gray-700 leading-relaxed">
                Non-residents are often subject to a 25% withholding tax on various Canadian income sources. At Canada Wide Bookkeeping & Taxes, we help you navigate these rules and apply for reduced rates where applicable through tax treaties or elections.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">
                Pension and Investment Income Tax Filing
                </h2>
                <p className="text-gray-700 leading-relaxed">
                Receiving CPP, OAS, or investment income from Canadian sources? You may be taxed at source unless you apply for reduced withholding under a tax treaty. We assess your eligibility and ensure proper documentation is filed on time.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-3">
                Avoiding Penalties and Interest
                </h2>
                <p className="text-gray-700 leading-relaxed">
                CRA imposes penalties for late or incorrect filing. Our proactive approach ensures all filings are accurate and timely. We help you avoid unnecessary fines, interest, and legal issues with professional, reliable service you can count on.
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
