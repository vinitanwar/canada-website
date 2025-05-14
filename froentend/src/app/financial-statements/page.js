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
      <Banner bannerTitle="Financial Statements" />

      <section className="w-full bg-white py-14 px-4 md:px-8">
        <div className="max-w-[1331px] mx-auto flex flex-col lg:flex-row gap-12">
          {/* Left Text Content */}
          <div className="lg:w-2/3 w-full">
            <img src="/newimages/Financial_Statements.jpg" className="pb-6" alt="service-img" />
            <h1 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">
              Comprehensive Financial Statements for Your Business
            </h1>
            <p className="mb-4 text-gray-700 leading-relaxed">
              At Canada Wide Bookkeeping & Taxes, we provide accurate and
              comprehensive financial statements that help businesses understand
              their financial position and make informed decisions. Our services
              include detailed balance sheets, income statements, cash flow
              statements, and equity reports, all prepared in compliance with
              Canadian accounting standards. We ensure every report reflects the
              true health of your business, offering clarity on profits, losses,
              liabilities, and cash flow. Whether you're a small business or a
              growing enterprise, our expert team is committed to delivering
              timely and reliable financial data to support budgeting,
              forecasting, tax planning, and overall financial growth with
              confidence and transparency.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              At Canada Wide Bookkeeping & Taxes, we specialize in delivering
              professional, accurate, and insightful financial statements that
              reflect the true financial health of your business. Our
              comprehensive reporting includes balance sheets, income
              statements, cash flow statements, and statements of changes in
              equity, all tailored to meet your business’s unique needs and
              fully compliant with Canadian accounting standards. These
              statements are essential tools for strategic planning, investor
              reporting, and tax preparation. Whether you're a startup, small
              business, or established corporation, our experienced team ensures
              that your financial data is clear, timely, and actionable. We help
              you gain control, maintain transparency, and make well-informed
              decisions that drive growth, profitability, and long-term success.
            </p>

            <h2 className="text-2xl font-semibold mb-4">
              Professional Bookkeeping Services You Can Count On
            </h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              At Canada Wide Bookkeeping & Taxes, we understand the importance
              of clear, accurate, and professionally prepared financial
              statements for every business. Our expert team provides
              full-service financial reporting, including Balance Sheets, Income
              Statements, Cash Flow Statements, and Statements of Changes in
              Equity. These essential reports offer a complete view of your
              company’s financial position and performance, helping you stay
              organized, compliant, and ready for <growth className=""></growth>
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              We tailor each financial statement to align with your business
              structure and industry, ensuring accuracy and compliance with
              Canadian financial regulations. Whether you're preparing for
              year-end reviews, tax filing, investor presentations, or internal
              decision-making, we deliver timely reports that bring confidence
              and clarity.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our statements help you track profitability, manage expenses,
              understand cash flow, and monitor financial trends—essential for
              smart budgeting and forecasting. With Canada Wide Bookkeeping &
              Taxes by your side, you can focus on running your business while
              we handle the numbers with precision and care.
            </p>

            <div className="">
              <div>
                <h2 className="text-xl font-semibold mb-3">
                  Why Professional Bookkeeping Matters
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Proper bookkeeping is the foundation of every successful
                  business. It keeps your financials in order, helps you stay
                  compliant with tax regulations, and gives you the insights
                  needed to grow. At Canada Wide Bookkeeping & Taxes Ltd., we
                  provide expert bookkeeping services tailored to your unique
                  business needs—so you can focus on what you do best, while we
                  handle the numbers.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">
                  •Transaction Recording
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  At Canada Wide Bookkeeping & Taxes, we specialize in preparing
                  detailed financial statements tailored to your business
                  requirements.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-3">
                  •Bank & Credit Card Reconciliation
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Our team ensures your balance sheet accurately reflects
                  assets, liabilities, and equity, giving you a snapshot of
                  financial health.
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
