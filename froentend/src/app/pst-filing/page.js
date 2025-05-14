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
     <Banner bannerTitle="Pst Filing" />
      <section className="w-full bg-white py-14 px-4 md:px-8">
        <div className="max-w-[1331px] mx-auto flex flex-col lg:flex-row gap-12">
          {/* Left Text Content */}
          <div className="lg:w-2/3 w-full">
            <img src="/Images/herosectionimg.avif" className="pb-6" alt="service-img" />
            <h1 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">
              Expert PST Filing Services Across Canada
            </h1>
            <p className="mb-4 text-gray-700 leading-relaxed">
              At Canada Wide Bookkeeping & Taxes, we specialize in helping
              businesses of all sizes stay compliant with provincial sales tax
              (PST) regulations. Our team understands the complex rules
              surrounding PST in each province, ensuring your returns are
              accurate and submitted on time.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Whether you're operating in British Columbia, Saskatchewan, or
              Manitoba, our tailored services reduce your tax-related stress so
              you can focus on growing your business. Avoid penalties and
              unnecessary audits by partnering with our knowledgeable PST
              specialists who are here to support you every step of the
              way.Whether you're operating in British Columbia, Saskatchewan, or
              Manitoba, our tailored services reduce your tax-related stress so
              you can focus on growing your business. Avoid penalties and
              unnecessary audits by partnering with our knowledgeable PST
              specialists who are here to support you every step of the way.
            </p>

            <h2 className="text-2xl font-semibold mb-4">
            Stay PST Compliant, Hassle-Free
            </h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
            PST compliance can be time-consuming and confusing, especially for businesses operating in multiple provinces. Canada Wide Bookkeeping & Taxes simplifies the process by handling every detail, from collecting relevant data to filing complete and accurate returns.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
            We keep track of legislative updates to ensure your filings reflect the latest tax regulations. Our systemized approach minimizes the risk of errors and guarantees timely submission. Let us take care of your PST obligations so you never have to worry about compliance again.
            </p>
            <p className="text-gray-700 leading-relaxed">
            Our experts evaluate your sales processes and records to ensure accurate tax application and reporting. With us, you're not just getting a filing service — you're gaining a tax partner committed to optimizing your financial workflow and ensuring consistent compliance across every filing cycle.
            </p>

            <div className="">
              <div>
                <h2 className="text-xl font-semibold mb-3">
                Accurate Recordkeeping for PST Reporting
                </h2>
                <p className="text-gray-700 leading-relaxed">
                Proper documentation is the key to successful PST filing. We help you maintain and organize invoices, sales receipts, and exemption certificates, making the filing process seamless. At Canada Wide Bookkeeping & Taxes, we ensure all necessary documentation is accurately recorded and accessible. This not only helps in preparing error-free filings but also protects your business during audits. Our digital bookkeeping systems allow easy access to your historical PST data at any time, giving you full control and visibility over your tax records.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">
                Timely PST Return Submission
                </h2>
                <p className="text-gray-700 leading-relaxed">
                Filing your PST return on time is critical to avoid interest charges and penalties. Our team keeps a close watch on due dates and ensures your returns are submitted well within deadlines. We manage reminders, gather data, and file returns without any disruptions to your workflow. 
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-3">
                PST Audit Preparation and Support
                </h2>
                <p className="text-gray-700 leading-relaxed">
                If your business is selected for a PST audit, we’re here to support you throughout the process. We prepare your documentation, help you understand auditor requests, and ensure your records are in order. 
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
    { name: "Bookkeeping Services", href: "/bookkeeping" },
    { name: "Payroll Services", href: "/payroll" },
    { name: "Financial Statements", href: "/financial-statements" },
    { name: "Corporate Tax Filing", href: "/corporate-tax-filing" },
    { name: "Personal Tax Filing", href: "/personal-tax-filing" },
    { name: "Self Employed Tax Filing", href: "self-employed-tax-filing" },
    { name: "GST Filing", href: "gst-filing" },
    { name: "Non-Resident Taxes", href: "/non-resident-taxes" },
    { name: "Incorporating New Company", href: "/incorporating-new-company" },
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
