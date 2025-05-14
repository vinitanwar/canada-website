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
    <Banner bannerTitle="Hst Filing" />
      <section className="w-full bg-white py-14 px-4 md:px-8">
        <div className="max-w-[1331px] mx-auto flex flex-col lg:flex-row gap-12">
          {/* Left Text Content */}
          <div className="lg:w-2/3 w-full">
            <img src="/Images/herosectionimg.avif" className="pb-6" alt="service-img" />
            <h1 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">
              Professional HST Filing Services
            </h1>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Filing your HST returns accurately and on time is crucial for
              staying compliant with CRA regulations. At Canada Wide Bookkeeping
              & Taxes, we offer professional HST filing services tailored to
              your business type and size.
            </p>

            <p className="mb-6 text-gray-700 leading-relaxed">
              Whether you’re a sole proprietor, corporation, or partnership, we
              ensure your HST is calculated correctly and filed before the
              deadline. Our goal is to make the tax process hassle-free so you
              can focus on running your business while we handle the paperwork.
            </p>

            <h2 className="text-2xl font-semibold mb-4">
              Who Needs to File HST Returns?
            </h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              If your business earns over $30,000 in revenue annually and
              operates in a province where HST is applicable, you’re required to
              file HST returns. Many entrepreneurs and small business owners
              overlook this, leading to interest and fines.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Canada Wide Bookkeeping & Taxes helps determine your filing
              obligations and guides you through the registration and reporting
              process. We ensure you meet all deadlines and file the correct
              amount, giving you peace of mind every tax period.
            </p>
            <p className="text-gray-700 leading-relaxed">
              HST returns can be filed monthly, quarterly, or annually,
              depending on your business revenue and selected reporting period.
              Choosing the right schedule is essential to manage cash flow and
              compliance.
            </p>

            <div className="">
              <div>
                <h2 className="text-xl font-semibold mb-3">
                  Input Tax Credits (ITCs) Explained
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  One of the biggest advantages of HST filing is claiming Input
                  Tax Credits (ITCs). ITCs allow you to recover the HST paid on
                  business expenses, reducing your overall tax liability. Our
                  professionals at Canada Wide Bookkeeping & Taxes ensure that
                  every eligible expense is accurately recorded and claimed. We
                  help you maximize your refunds and minimize tax burdens,
                  ensuring your business benefits from every dollar spent on
                  operational costs.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">
                  Avoiding Penalties and Interest
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Late or incorrect HST filings can result in penalties and
                  interest, which can strain your finances. We understand how
                  stressful that can be, especially for small businesses. That’s
                  why Canada Wide Bookkeeping & Taxes offers proactive
                  monitoring and reminders for upcoming deadlines.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-3">
                  HST Filing for E-Commerce Businesses
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Running an online business? You may still be required to
                  collect and remit HST. E-commerce businesses often face
                  complex tax rules, especially when selling across multiple
                  provinces. Canada Wide Bookkeeping & Taxes specializes in
                  digital business tax support, ensuring proper HST collection,
                  reporting, and remittance.
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
