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
      <Banner bannerTitle=" Self Employed Tax Filing" />

      <section className="w-full bg-white py-14 px-4 md:px-8">
        <div className="max-w-[1331px] mx-auto flex flex-col lg:flex-row gap-12">
          {/* Left Text Content */}
          <div className="lg:w-2/3 w-full">
            <img src="/newimages/Self_Employed.jpg" className="pb-6" alt="service-img" />
            <h1 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">
              Expert Self-Employed Tax Filing Services
            </h1>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Being your own boss is rewarding—but tax season can be
              overwhelming. At Canada Wide Bookkeeping & Taxes, we specialize in
              self-employed tax filing for freelancers, contractors, and small
              business owners. We understand the unique deductions, expenses,
              and reporting requirements that come with self-employment. Our
              experts ensure your tax return is filed accurately, on time, and
              in compliance with CRA guidelines. Whether you work in
              construction, delivery, beauty, or consulting—we’ll help maximize
              your tax refund while keeping you audit-ready. Let us simplify the
              tax process so you can focus on growing your business.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Self-employed individuals are eligible for a variety of tax
              deductions—but many miss out due to lack of knowledge or poor
              recordkeeping. Our team helps you identify and claim every
              possible deduction, from vehicle and home office expenses to
              supplies and advertising costs. We’ll help categorize your income
              and expenses properly, ensuring nothing is left behind. At Canada
              Wide Bookkeeping & Taxes, we don’t just file—we help you save.
              With our support, you’ll feel confident that your return is
              complete, optimized, and tailored to your unique situation.
            </p>

            <h2 className="text-2xl font-semibold mb-4">
              Hassle-Free CRA Compliance
            </h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              The Canada Revenue Agency has strict rules for self-employed
              individuals. Whether it’s quarterly instalments, HST/GST filing,
              or income reporting, our service ensures you stay compliant
              without stress. We keep your records organized, your deadlines in
              check, and your filings accurate. CRA audits can be scary—but with
              us in your corner, you’ll be fully prepared. Canada Wide
              Bookkeeping & Taxes ensures your business stays on the right side
              of the law while minimizing tax liability. Stay confident, stay
              compliant—with expert support year-round.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Self-employed professionals across Canada work in many different
              industries—rideshare, real estate, healthcare, trades, e-commerce,
              and more. Each industry has specific write-offs, tax codes, and
              documentation needs. Our service is customized to your line of
              work.
            </p>
            <p className="text-gray-700 leading-relaxed">
              business, track the right expenses, and prepare your tax return
              accordingly. At Canada Wide Bookkeeping & Taxes, there’s no
              one-size-fits-all solution—we tailor everything to you. With deep
              industry insight, we make sure your filing reflects your true
              financial picture.
            </p>

            <div className="">
              <div>
                <h2 className="text-xl font-semibold mb-3">
                  Affordable Pricing, No Surprises
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We believe tax filing should be accessible and affordable for
                  all self-employed Canadians. That’s why we offer transparent,
                  flat-rate pricing with no hidden fees. You’ll know exactly
                  what you’re paying for—professional service, expert advice,
                  and peace of mind. Whether you’re just starting your
                  self-employment journey or have years of experience, our
                  pricing is designed to suit your needs and budget. Canada Wide
                  Bookkeeping & Taxes makes high-quality tax support easy and
                  cost-effective. Save time, save money—and stay stress-free.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">
                  Digital and Remote Filing Options
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We offer modern, digital solutions for self-employed
                  individuals who value convenience and speed. With secure
                  portals, e-signatures, and online consultations, Canada Wide
                  Bookkeeping & Taxes allows you to file your taxes without
                  leaving home. Whether you're across the street or across
                  Canada, our virtual services deliver the same expertise with
                  added flexibility.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-3">
                  Book Your Free Consultation Today
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Don’t let tax season catch you off guard. Our friendly and
                  knowledgeable team is here to help—starting with a free,
                  no-obligation consultation. We’ll review your documents,
                  answer your questions, and explain how we can simplify your
                  self-employed tax filing process. Whether in-person or
                  virtual, Canada Wide Bookkeeping & Taxes is committed to
                  making your tax experience smooth, efficient, and stress-free.
                  Let’s talk today and build a plan that works for you and your
                  business. Book now and take the first step toward smarter tax
                  filing.
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
