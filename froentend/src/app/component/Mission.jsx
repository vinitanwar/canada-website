import React from 'react';
import Image from 'next/image'; // Import Image component from Next.js

const Mission = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center p-6 lg:px-30">
      {/* Content Side */}
      <div className="lg:w-1/2 px-4 lg:px-8 mb-6 lg:mb-0">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
        <p className="text-base lg:text-lg text-gray-700 leading-relaxed text-justify">
        At Canada Wide Bookkeeping & Taxes, our mission is to provide accurate, reliable, and personalized financial services, empowering individuals and businesses across Canada to achieve financial clarity, stay compliant, and make informed decisions for lasting success.
        </p>
      </div>

      {/* Image Side */}
      <div className="lg:w-1/2 relative w-full h-40 md:h-64 lg:h-100">
        <img
          src="/Images/mission.webp" // Ensure the path is correct
          alt="Our Mission"
          layout="fill"
          objectFit="contain"
          className="rounded-lg"
        />
      </div>
    </section>
  );
}

export default Mission;
