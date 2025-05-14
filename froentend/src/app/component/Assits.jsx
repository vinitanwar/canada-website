import React from "react";
import {
  HandCoins,
  Handshake,
  Clock,
  BadgeDollarSign,
} from "lucide-react";

const Assists = () => {
  const services = [
    {
      icon: <HandCoins className=" text-orange-500 w-10 h-10" />,
      title: "Tax Planning & Compliance",
      description:
        "Maximize your savings while staying fully compliant with Canadian tax laws. We help individuals and businesses plan smart and file stress-free.",
    },
    {
      icon: <Handshake className=" text-orange-500 w-10 h-10" />,
      title: "Business Advisory & Strategy",
      description:
        "Looking to grow or streamline? We offer expert financial advice to help you scale smartly, manage risk, and boost profitability.",
    },
    {
      icon: <Clock className=" text-orange-500 w-10 h-10" />,
      title: "Financial Reporting & Analysis",
      description:
        "Get clear, accurate financial reports to support better decision-making. From balance sheets to cash flow analysis — we’ve got you covered.",
    },
    {
      icon: <BadgeDollarSign className=" text-orange-500 w-10 h-10" />,
      title: "Corporate Accounting Services",
      description:
        "From startups to established corporations, we manage your accounting needs, including payroll, reconciliations, and CRA compliance.",
    },
  ];

  return (
    <section className="bg-[#f5fafd] py-10 md:px-8 lg:px-16 xl:px-22">
 <div className="container mx-auto text-center mb-12 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
 
  <h2 className="text-4xl md:text-4xl lg:text-4xl font-bold text-gray-800 mb-4">
    Why we stand out ?
  </h2>
  
</div>


      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-start text-left hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-lg lg:text-xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm lg:text-base mb-6">
              {service.description}
            </p>
          
          </div>
        ))}
      </div>
    </section>
  );
};

export default Assists;
