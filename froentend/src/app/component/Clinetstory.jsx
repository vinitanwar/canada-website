'use client';

import React, { useState } from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { ArrowLeft, ArrowRight, PlayCircle, X } from 'lucide-react';

export default function ClientStory() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    breakpoints: {
      '(min-width: 1024px)': {
        slides: { perView: 3, spacing: 16 },
      },
      '(min-width: 768px)': {
        slides: { perView: 3, spacing: 16 },
      },
      '(max-width: 767px)': {
        slides: { perView: 1, spacing: 12 },
      },
    },
    slides: { perView: 1, spacing: 12 }, // default fallback
  });

  const [modalVideo, setModalVideo] = useState(null);

  const slides = [
    {
      title: 'Small Business, Amin',
      thumbnail: '/Images/vedio-1.webp',
      video: 'https://www.youtube.com/embed/N35d97Oa-IY?si=_Wkjim6AguI2WLtr',
    },
    {
      title: 'International Taxes, Bhagat',
      thumbnail: '/Images/loan-about.webp',
      video: 'https://www.youtube.com/embed/N35d97Oa-IY?si=_Wkjim6AguI2WLtr',
    },
    {
      title: 'Importing / Exporting, Cody',
      thumbnail: '/Images/vedio-icon-2.avif',
      video: 'https://www.youtube.com/embed/N35d97Oa-IY?si=_Wkjim6AguI2WLtr',
    },
    {
      title: 'YouTube Client Video',
      thumbnail: '/Images/vedio-2.webp',
      video: 'https://www.youtube.com/embed/N35d97Oa-IY?si=_Wkjim6AguI2WLtr',
      youtube: true,
    },
  ];

  return (
    <div className="py-10 px-4 md:px-8 lg:px-16 xl:px-24">
      <h2 className="text-2xl md:text-3xl font-bold text-[#0f2d3f]  text-center lg:text-left lg:mb-9  mb-6 md">
        CLIENT SUCCESS STORIES
      </h2>

      <div ref={sliderRef} className="keen-slider">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className="keen-slider__slide bg-[#f2f2f2] rounded  overflow-hidden cursor-pointer"
            onClick={() => setModalVideo(slide.video)}
          >
            <div className="relative group">
              <img
                src={slide.thumbnail}
                alt={slide.title}
                className="w-full h-56 md:h-64 object-cover group-hover:opacity-90 transition-opacity duration-300"
              />
              <PlayCircle className="absolute inset-0 m-auto text-white bg-[#00000088] rounded-full p-1 w-12 h-12 group-hover:scale-110 transition-transform" />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-sm md:text-base text-[#0f2d3f]">{slide.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-between mt-6 gap-4">
        {/* Pagination Dots */}
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-[#555] opacity-50 hover:opacity-100" />
          ))}
        </div>

       
        <div className="flex gap-4">
          <button onClick={() => instanceRef.current?.prev()} className="border rounded-full p-2 hover:bg-gray-200 ">
            <ArrowLeft />
          </button>
          <button onClick={() => instanceRef.current?.next()} className="border rounded-full p-2 hover:bg-gray-200">
            <ArrowRight />
          </button>
        </div>
      </div>

      {/* Modal */}
      {modalVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden">
            <button
              onClick={() => setModalVideo(null)}
              className="absolute top-2 right-2 text-white bg-black bg-opacity-60 rounded-full p-1 hover:bg-opacity-90 z-50"
            >
              <X className="w-6 h-6" />
            </button>

            {slides.find((s) => s.video === modalVideo)?.youtube ? (
              <iframe
                src={modalVideo}
                title="YouTube Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            ) : (
              <video src={modalVideo} controls autoPlay className="w-full h-full object-cover" />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
