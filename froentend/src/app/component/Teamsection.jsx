'use client';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useRef, useEffect } from 'react';

const teamMembers = [
  {
    name: 'Steve Ambuul',
    title: 'REVENUE OFFICER',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCZPWjCbYxbPzblGR8vOiL6bk3kmSVaoAzoQ&s',
  },
  {
    name: 'Alden Dale',
    title: 'DIRECTOR OF SOLUTIONS',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCZPWjCbYxbPzblGR8vOiL6bk3kmSVaoAzoQ&s',
  },
  {
    name: 'Kaley Deneen',
    title: 'DIRECTOR OF STRATEGY & SERVICE, EMEA',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCZPWjCbYxbPzblGR8vOiL6bk3kmSVaoAzoQ&s',
  },
  {
    name: 'Phil Dupertuis',
    title: 'DIRECTOR OF CLIENT SERVICES, NA',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCZPWjCbYxbPzblGR8vOiL6bk3kmSVaoAzoQ&s',
  },
  {
    name: 'Tony Eades',
    title: 'CHIEF EVANGELIST',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCZPWjCbYxbPzblGR8vOiL6bk3kmSVaoAzoQ&s',
  },
];

export default function TeamSlider() {
  const timer = useRef(null);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: 'snap',
    slides: {
      perView: 1,
      spacing: 15,
    },
    breakpoints: {
      '(min-width: 640px)': {
        slides: { perView: 2, spacing: 20 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 3, spacing: 25 },
      },
      '(min-width: 1280px)': {
        slides: { perView: 4, spacing: 30 },
      },
    },
  });

  useEffect(() => {
    const slider = instanceRef.current;
    if (!slider) return;

    timer.current = setInterval(() => {
      slider.next();
    }, 3000);

    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [instanceRef]);

  return (
    <section className="bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-16 xl:px-24 py-10">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Meet the Team
        </h2>
        <div ref={sliderRef} className="keen-slider">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="keen-slider__slide">
              <div className="bg-white border border-orange-200 rounded-2xl p-6 flex flex-col items-center text-center mb-5">
                <div className="relative w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-2 dotted  border-orange-500  shadow-md">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="text-sm text-orange-500  font-medium uppercase mt-1 tracking-wide">
                  {member.title}
                </p>
                <button className="mt-4 px-4 py-2 text-sm font-medium text-white bg-orange-500  hover:text-white   rounded-full shadow-md transition duration-200">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
