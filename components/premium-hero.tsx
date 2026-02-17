'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const carouselImages = [
  {
    url: 'https://lasu.edu.ng/home/img/banner_new3.png',
    title: 'Academic Excellence',
  },
  {
    url: 'https://lasu.edu.ng/home/img/group_picture.jpg',
    title: 'Our Community',
  },
  {
    url: 'https://lasu.edu.ng/home/img/banner_slider88.jpg',
    title: 'Innovation & Learning',
  },
];

export function PremiumHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
    setIsAutoPlay(false);
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* Carousel Container */}
      <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] group">
        {/* Slides */}
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image.url}
              alt={image.title}
              fill
              className="object-cover w-full h-full"
              priority={index === 0}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent" />
            
            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 sm:pb-16 lg:pb-20 px-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-6 animate-fade-in">
                Welcome to <span className="text-accent">STE</span>
              </h2>
              <p className="text-xl sm:text-2xl text-white font-semibold mb-8 animate-fade-in">
                Science and Technology Education
              </p>
              <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto text-center leading-relaxed mb-8 animate-fade-in">
                Your comprehensive hub for accessing courses, learning resources, and staying updated with departmental announcements.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
                <a
                  href="#academics"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-all hover:shadow-lg hover:scale-105 transform duration-300"
                >
                  Explore Courses
                </a>
                <a
                  href="#resources"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 border-white text-white font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  Browse Resources
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/20 hover:bg-white/40 transition-all duration-300 text-white opacity-0 group-hover:opacity-100 transform hover:scale-110"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/20 hover:bg-white/40 transition-all duration-300 text-white opacity-0 group-hover:opacity-100 transform hover:scale-110"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-3">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-accent w-8'
                  : 'bg-white/50 w-2 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
