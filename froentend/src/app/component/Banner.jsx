import Link from 'next/link';
import React from 'react';


export default function Banner({ MainHead, mainPara, bannerTitle }) {
  return (
    <div className="relative text-white text-center py-16 px-6 mb-5">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/Images/service-banner.webp"
          alt="Banner Background"
          className="object-cover w-full h-48 md:h-64 lg:h-80"
        />
        <div className="absolute inset-0 bg-black opacity-40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-16 md   lg:h-full">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
          Accounting & Book
          <span className="text-orange-500">{MainHead || 'keeping Service'}</span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 max-w-xl">
          {mainPara || 'Stress-Free Bookkeeping Starts Here and Affordable Price'}
        </p>
      </div>

      {/* Breadcrumb */}
      <div className="absolute bottom-4 left-6 md lg:left-24 z-10 text-sm sm:text-base">
        <span className="text-white opacity-90"><Link href='/'>Home /</Link>   {bannerTitle || 'Banner'}</span>
      </div>
    </div>
  );
}
