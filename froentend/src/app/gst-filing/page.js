import React from "react";

import SuccessStory from "../component/Testimonails";
import ClientStory from "../component/Clinetstory";
import Link from "next/link";
import ThreeCards from "../component/Threecard";
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
      <Banner bannerTitle=" GST Filing" />

      <section className="w-full bg-white py-14 px-4 md:px-8">
        <div className="max-w-[1331px] mx-auto flex flex-col lg:flex-row gap-12">
          {/* Left Text Content */}
          <div className="lg:w-2/3 w-full">
            <img src="/Images/herosectionimg.avif" className="pb-6" alt="service-img" />
            <h1 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">
              Expert GST Filing Services Across Canada
            </h1>
            <p className="mb-4 text-gray-700 leading-relaxed">
              At Canada Wide Bookkeeping & Taxes, we specialize in accurate and
              timely GST filing services for individuals, small businesses, and
              corporations. Whether you operate in a single province or
              nationwide, we ensure compliance with CRA regulations. Our team
              simplifies the entire process—collecting data, preparing returns,
              and submitting them on your behalf—so you can focus on your
              business. We’re familiar with GST, HST, and provincial taxes and
              tailor our services accordingly. With us, there are no
              surprises—just professional service and peace of mind.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Our teamsimplifies the entire process—collecting data, preparing
              returns, and submitting them on your behalf—so you can focus on
              your business. We’re familiar with GST, HST, and provincial taxes
              and tailor our services accordingly. With us, there are no
              surprises—just professional service and peace of mind.
            </p>

            <h2 className="text-2xl font-semibold mb-4">
              Stay CRA-Compliant Year-Round
            </h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Compliance is key when it comes to GST filing. We stay up to date
              with CRA tax rules, filing deadlines, and thresholds so you don’t
              have to. Our proactive reminders and real-time reporting help you
              avoid late penalties or audits.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Whether you're filing monthly, quarterly, or annually, we
              structure your filings to match your needs. Let Canada Wide
              Bookkeeping & Taxes handle the paperwork while you stay focused on
              growth. We make it easy to stay in line with the law, effortlessly
              and efficiently.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Every business is unique, and so are your GST obligations. We
              offer customized GST filing services that match your business
              size, industry, and operational style. From startups to
              established businesses, we’ll prepare and file your GST returns
              based on your revenue, input tax credits, and eligible deductions.
            </p>

            <div className="">
              <div>
                <h2 className="text-xl font-semibold mb-3">
                  Accurate Input Tax Credit (ITC) Claims
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Maximizing your Input Tax Credit is essential for minimizing
                  tax liability. Our GST specialists review all your eligible
                  expenses and ensure you claim what’s rightfully yours. We
                  audit your receipts, match invoices, and eliminate the risk of
                  over- or under-reporting. At Canada Wide Bookkeeping & Taxes,
                  we turn your expense records into accurate ITC claims to
                  reduce the amount of GST you owe. This means more money in
                  your business and fewer chances of CRA disputes. Let us do the
                  heavy lifting while you save more.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">
                  Quarterly and Annual GST Filing Plans
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Whether you're required to file GST returns monthly,
                  quarterly, or annually, we’ve got you covered. Our flexible
                  plans are built to match your tax period and cash flow cycle.
                  We ensure your records are up-to-date each filing period to
                  avoid any backlog or last-minute rush. Our quarterly filing
                  service includes reconciliation, HST adjustments, and
                  real-time CRA filing.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-3">
                  CRA Audit Support and Advisory
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  In case of a CRA audit or review, we don’t just prepare you—we
                  stand by your side. Our GST filing service includes
                  audit-ready documentation and expert advisory to support your
                  case. We review CRA notices, respond to inquiries, and help
                  resolve disputes quickly. With Canada Wide Bookkeeping &
                  Taxes, you never deal with CRA alone.
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

      <ThreeCards />
      <ClientStory />
      <SuccessStory />
    </>
  );
};

export default page;
