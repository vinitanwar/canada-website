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

 <Banner bannerTitle=' personal Tax Filing' />
   

      <section className="w-full bg-white py-14 px-4 md:px-8">
        <div className="max-w-[1331px] mx-auto flex flex-col lg:flex-row gap-12">
          {/* Left Text Content */}
          <div className="lg:w-2/3 w-full">
            <img src="/newimages/Personal-Tax.jpg" className="pb-6" alt="service-img" />
            <h1 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">
            Personal Tax Filing

            </h1>
            <p className="mb-4 text-gray-700 leading-relaxed">
            At Canada Wide Bookkeeping & Taxes, we make personal tax filing stress-free and accurate. Whether you're a salaried employee, self-employed, or have multiple income sources, our experienced tax professionals ensure you get every deduction and credit you're entitled to. We stay up-to-date with CRA regulations to maximize your refund and minimize any potential liabilities. Trust us to file your taxes on time with precision and confidentiality.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Whether you're an individual, small business, or corporation, our
              team offers personalized consultations to help you understand your
              financial landscape. From day-to-day bookkeeping to long-term tax
              planning, <strong>Canada Wide Bookkeeping & Taxes</strong> gives
              you confidence and clarity.
            </p>

            <h2 className="text-2xl font-semibold mb-4">
              Professional Bookkeeping Services You Can Count On
            </h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              At Canada Wide Bookkeeping & Taxes Ltd., we understand that
              accurate bookkeeping is essential for making informed business
              decisions and maintaining compliance. Our bookkeeping services are
              designed to save you time, reduce stress, and keep your financial
              records organized and up to date.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              We handle everything from day-to-day transaction recording and
              bank reconciliations to accounts payable/receivable and monthly
              reporting. Using secure, cloud-based accounting platforms, we give
              you real-time access to your finances—anytime, anywhere.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Let us take bookkeeping off your plate so you can focus on growing
              your business. With our reliable systems, experienced team, and
              client-first approach, financial tracking becomes simple, clear,
              and completely stress-free.
            </p>

            <div className="">
              <div>
                <h2 className="text-xl font-semibold mb-3">
                Why Choose Us for Personal Tax Filing?
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
                  We record all income, expenses, and transactions in a timely
                  and accurate manner using the latest cloud-based accounting
                  tools. This gives you real-time access to your financial data
                  anytime, anywhere.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-3">
                  •Bank & Credit Card Reconciliation
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Our team ensures that your records match your bank and credit
                  card statements, identifying and correcting discrepancies
                  before they become issues.
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
