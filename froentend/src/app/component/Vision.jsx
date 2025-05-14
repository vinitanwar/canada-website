import React from 'react'

const Vision = () => {
  return (
    <>
       <section className="flex flex-col lg:flex-row items-center p-6 pt-0 lg:px-30">
      {/* Content Side */}
      <div className="lg:w-1/2 relative w-full h-40 md:h-64 lg:h-100">
        <img
          src="/Images/Vision.webp" // Ensure the path is correct
          alt="Our Mission"
          layout="fill"
          objectFit="contain"
          className="rounded-lg"
        />
      </div>
      <div className="lg:w-1/2 px-4 lg:px-8 mb-6 lg:mb-0 pt-0">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
        <p className="text-base lg:text-lg text-gray-700 leading-relaxed text-justify">
        At Canada Wide Bookkeeping & Taxes, our vision is to empower businesses across Canada with accurate, transparent, and reliable financial services, helping them grow confidently through expert bookkeeping, tax planning, and financial guidance tailored to their unique needs.
        </p>
      </div>

      {/* Image Side */}
  
    </section>
    </>
  )
}

export default Vision
