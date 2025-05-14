import Link from 'next/link'
import React from 'react'


const Callaction = () => {
  return (
    <div className="px-4 sm:px-10 py-10 px-4 md:px-8 lg:px-16 xl:px-24">
      <section
        className="w-full bg-center bg-no-repeat bg-cover rounded-[30px] overflow-hidden py-10 md:py-20"
        style={{ backgroundImage: "url('/Images/callact.webp')" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4">
          {/* Text Column */}
          <div className="w-full md:w-2/3 text-white">
            <h3 className="text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-snug mb-4">
              Reliable Bookkeeping & Tax Services <br />
              Across Canada!
            </h3>
            <p className="text-sm sm:text-base md:text-lg">
              Canada Wide Bookkeeping & Taxes offers trusted, affordable financial solutions for individuals and businesses nationwide.
            </p>
          </div>

          {/* Button Column */}
          <div className="w-full md:w-1/3 flex justify-start md:justify-end pt-4 md:pt-0">
            <Link
              href="/contact-us/"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white uppercase bg-orange-500 hover:text-white transition rounded"
            >
              Get Started
              <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Callaction
