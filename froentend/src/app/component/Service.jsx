"use client";

import React, { useEffect, useRef, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const cards = [
  {
    title: "BookKeeping",
    description:
      "Canada Wide Bookkeeping & Taxes offers expert financial management, accurate bookkeeping, GST/HST filing, payroll, and tax services for individuals and businesses across Canada. Reliable, affordable, and tailored to your needs.",
    href: "/bookKeeping",
    img: "/Images/vedio-2.webp",
  },
  {
    title: "Payroll Services",
    description:
      "Streamline your business with our expert Payroll Services at Canada Wide Bookkeeping & Taxes. Accurate, timely payroll processing ensures compliance, reduces stress, and keeps your team paid—on time, every time.",
    href: "/payroll",
    img: "/Images/vedio-3.avif",
  },
  {
    title: "Financial Statements",
    description:
      "We prepare accurate financial statements to help businesses understand their performance, make informed decisions, and stay compliant. Trust Canada Wide Bookkeeping & Taxes for reliable, clear, and professional reporting.",
    img: "/Images/bookie.webp",
  },

  {
    title: "Corporate Tax Filing",
    description:
      "Ensure accurate and timely corporate tax filing with Canada Wide Bookkeeping & Taxes. We simplify compliance, maximize deductions, and support your business with expert guidance across all Canadian provinces.",
    href: "/corporate-tax-filing",
    img: "/Images/img-2.webp",
  },

  {
    title: "Personal Tax Filing",
    description:
      "Simplify your personal tax filing with Canada Wide Bookkeeping & Taxes. We ensure accurate, on-time submissions, maximizing refunds and minimizing stress. Trusted, affordable service tailored for individuals across Canada.",
    href: "/personal-tax-filing",
    img: "/Images/img-3.webp",
  },

  {
    title: "Self Employed Tax Filing",
    description:
      "Simplify your self-employed tax filing with Canada Wide Bookkeeping & Taxes. Expert support, accurate calculations, and timely submissions ensure peace of mind and maximum returns for freelancers and small businesses.",
    href: "/self-employed-tax-filing",
    img: "/Images/blog-3.webp",
  },

  {
    title: "Non Resident Taxes",
    description:
      "Maximize your refund and stay compliant with our expert Non-Resident Tax Services. Canada Wide Bookkeeping & Taxes ensures accurate filings, CRA compliance, and stress-free tax solutions tailored for non-residents.",
    href: "/non-resident-taxes",
    img: "/Images/nonresdient.webp",
  },

  {
    title: "Incorporating New Company",
    description:
      "Canada Wide Bookkeeping & Taxes offers expert financial services including bookkeeping, tax preparation, GST/HST filing, and payroll solutions tailored to businesses and individuals across Canada with accuracy and reliability.",
    href: "/Incorporating-New-Company",
    img: "/Images/incorporating.webp",
  },
];

export default function Service() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const timerRef = useRef(null);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    breakpoints: {
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 16 },
      },
      "(min-width: 768px)": {
        slides: { perView: 3, spacing: 16 },
      },
      "(max-width: 767px)": {
        slides: { perView: 1, spacing: 12 },
      },
    },
    slides: { perView: 1, spacing: 12 }, // default fallback

    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  // Autoplay effect
  useEffect(() => {
    const next = () => {
      if (instanceRef.current) {
        instanceRef.current.next();
      }
    };
    timerRef.current = setInterval(next, 3500);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [instanceRef]);

  return (
    <div className="bg-white py-10 px-4 md:px-8 lg:px-16 xl:px-24">
      <div className="container mx-auto   relative">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center">
          Our Services
        </h2>
        <p className="text-center max-w-2xl mx-auto text-gray-600 mb-10 text-sm sm:text-base md:text-lg">
          Expert tax services covering income tax, GST, corporate tax, and more,
          ensuring full compliance and optimization
        </p>

        <div ref={sliderRef} className="keen-slider">
          {cards.map((card, index) => (
            <div className="keen-slider__slide h-full" key={index}>
              <a
                href={card.href}
                className="block bg-white rounded-2xl border border-gray-200  overflow-hidden transition hover:h-full"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="Canada Wide Bookkeeping & Taxes lg:h-60 w-full object-cover"
                />
                <div className="p-4 h-auto">
                  <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {card.description}
                  </p>
                  <div className="text-orange-500  flex items-center gap-2 font-medium">
                    View Services <span>→</span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        {loaded && instanceRef.current && (
          <>
            <button
              onClick={() => instanceRef.current.prev()}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white border  rounded-full w-10 h-10 flex items-center justify-center z-10 hover:bg-gray-100"
              aria-label="Previous Slide"
            >
              ‹
            </button>
            <button
              onClick={() => instanceRef.current.next()}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white border  rounded-full w-10 h-10 flex items-center justify-center z-10 hover:bg-gray-100"
              aria-label="Next Slide"
            >
              ›
            </button>
          </>
        )}

        {/* Dots */}
        {loaded && instanceRef.current && (
          <div className="flex justify-center mt-6 gap-2">
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => (
              <button
                key={idx}
                onClick={() => instanceRef.current.moveToIdx(idx)}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === idx ? "bg-blue-700" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
