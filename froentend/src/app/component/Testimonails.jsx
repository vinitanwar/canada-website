"use client";
import React, { useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import "keen-slider/keen-slider.min.css";

export default function SuccessStory() {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 2,
          spacing: 20,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 3,
          spacing: 24,
        },
      },
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      slider.current?.next();
    }, 3000);
    return () => clearInterval(interval);
  }, [slider]);

  const testimonials = [
    {
      heading: "Trusted accounting expertise for Canadian businesses.",
      rating: 5,
      desc: "I’ve had an excellent experience working with Canada Wide Bookkeeping & Taxes. Their team is knowledgeable, professional, and always ready to answer my questions with patience and clarity. They made the entire tax filing process smooth and stress-free, and I really appreciate their attention to detail. Whether it’s personal taxes or small business bookkeeping, they handle everything efficiently and accurately. I highly recommend them to anyone looking for trustworthy and reliable financial services in Canada!",
      img: "/Images/45.webp",
      name: "Ginny Gogna",
      position: "Small Business Owner, Toronto",
    },
    {
      heading: "Reliable bookkeeping that scales with our growth.",
      rating: 5,
      desc: "Best service and dealing i ever experienced highly recommended for the greatest services or guidance. Amazing bookkeeping services, will recommend every business to use them!",
      img: "/Images/32.webp",
      name: "Sukh Bhangu",
      position: "Operations Manager, Vancouver",
    },
    {
      heading: "Precise, professional, and always responsive.",
      rating: 4,
      desc: "I highly recommend Canada Wide Bookkeeping for their exceptional service and expertise. Their team delivered accurate, timely financial solutions tailored to our needs. Varinder stands out for his professionalism, deep knowledge, and dedication, ensuring a seamless experience. A trusted partner for any business. 5 star service",
      img: "/Images/57.webp",
      name: "cf0751",
      position: "Independent Contractor, Calgary",
    },
  ];
  

  return (
    <div className="relative mt-10 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-12 bg-white">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2C2C2C]">
          What Our Clients Say
        </h2>
        <div className="flex space-x-3">
          <button
            onClick={() => slider.current?.prev()}
            className="p-3 rounded-full bg-gray-200 hover:bg-[#62371F] hover:text-white transition"
          >
            <IoArrowBack size={20} />
          </button>
          <button
            onClick={() => slider.current?.next()}
            className="p-3 rounded-full bg-gray-200 hover:bg-[#62371F] hover:text-white transition"
          >
            <IoArrowForward size={20} />
          </button>
        </div>
      </div>

      <div ref={sliderRef} className="keen-slider">
        {testimonials.map((item, i) => (
          <div
            key={i}
            className="keen-slider__slide bg-white p-5 md:p-6 rounded-xl shadow-md border border-gray-200"
          >
            <h4 className="text-lg sm:text-xl font-semibold text-[#333] mb-3">
              {item.heading}
            </h4>
            <p className="text-yellow-500 text-sm mb-2">
              {"⭐".repeat(item.rating)}{" "}
              {"☆".repeat(5 - item.rating)}
            </p>
            <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                { item.desc.length>=104 ?`${item.desc.slice(0,104)}...`:`${item.desc}`}
            </p>
            <div className="flex items-center gap-3">
              <img
                src={item.img}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-sm sm:text-base">{item.name}</p>
                <p className="text-sm text-gray-500">{item.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
