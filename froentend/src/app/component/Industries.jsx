import React from 'react';

const Industries = () => {
  const cardsData = [
    { id: 1, src: '/Images/franchise-agreement.webp', text: 'Franchises' },
    { id: 2, src: '/Images/self-employed.webp', text: 'Self-Employed' },
    { id: 3, src: '/Images/civil-law.webp', text: 'Law Firms' },
    { id: 4, src: '/Images/start.webp', text: 'Start Ups' },
    { id: 5, src: '/Images/store.webp', text: 'Small Business' },
    { id: 6, src: '/Images/serving-dish.webp', text: 'Restaurants' },
    { id: 7, src: '/Images/first-aid-kit.webp', text: 'Medical Clinics' },
    { id: 8, src: '/Images/Consultants.webp', text: 'Consultants' },
    { id: 9, src: '/Images/power-plant.webp', text: 'Manufacturers' },
    { id: 10, src: '/Images/transportation.webp', text: 'Amazon DSP/Sellers' },
    { id: 11, src: '/Images/mortgage-broker.webp', text: 'Mortgage Brokers' },
    { id: 12, src: '/Images/acquisition.webp', text: 'Real Estate Investors' },
  ];

  return (
    <div className="Business-domain mt-10 lg:px-24 md:px-10 pb-16 bg-gray-50 py-4 pt-10 ">
      <div className="flex flex-col lg:flex-row gap-12 ">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 p-4 md">
          <div className="common-heading sticky top-30">
            <span
              className="text-xl lg:text-4xl mb-6 block text-[#fc8f4b]"
              style={{ fontFamily: "'Bilbo Swash Caps', cursive" }}
            >
              Industries We Serve:
            </span>
            <h3 className="text-2xl md:text-4xl font-bold mb-4 text-gray-800">
              Canada-Wide Financial Services You Trust
            </h3>
            <p className="text-justify text-base md:text-lg leading-7 text-gray-700 mb-4">
              At Canada Wide Bookkeeping & Taxes, we take pride in offering dependable, transparent, and expert financial services tailored to meet the needs of individuals and businesses across the country. Whether you're a small business owner, a freelancer, or managing a growing enterprise, our team ensures your books are accurate, your taxes are optimized, and your financial goals are always in focus.
            </p>
            <p className="text-justify text-base md:text-lg leading-7 text-gray-700">
              With deep industry experience and a commitment to personalized support, we make managing your finances simpler, smarter, and stress-free.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2">
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 justify-items-center">
            {cardsData.map((card) => (
              <div
                key={card.id}
                className="group h-24 w-28 sm:h-32 sm:w-32 p-2 rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-center items-center border border-gray-200 hover:border-blue-500"
              >
                <img
                  src={card.src}
                  alt={card.text}
                  className="h-10 w-auto mb-1 group-hover:scale-105 transition-transform duration-300"
                />
                <p className="text-center text-xs sm:text-sm font-semibold text-gray-800 group-hover:text-blue-600">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;
