import React, { useState, useEffect } from 'react';

const HomeCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const isLive = true; // Change to true if live streaming is active
  const liveStreamUrl = "";
  const logoUrl1 = "/img/enforcer1.png";
  const logoUrl2 = "/img/enforcer2.png";

  const slides = [
    {
      id: 0,
      backgroundVideo: "/vid/vid1.mp4",
      title: "Truth Enforcers Bible Church Intl",
      subtitle: "Messengers Of Truth",
      description: "Welcome To De Enforcers World.",
      subdescription: "Here! We live and overcome by the truth."
    },
    {
      id: 1,
      backgroundImage: "/img/img1.jpg",
      title: "Truth Enforcers Bible Church Intl",
      subtitle: "Messengers Of Truth",
      description: "Welcome To De Enforcers World.",
      subdescription: "Here! We live and overcome by the truth."
    },
    {
      id: 2,
      backgroundImage: "/img/img2.jpg",
      title: "Truth Enforcers Bible Church Intl",
      subtitle: "Messengers Of Truth",
      description: "Join our community of faith.",
      subdescription: "Where truth meets fellowship and  true love of God is lived."
    },
    {
      id: 3,
      backgroundImage: "/img/Img3.jpg",
      title: "Truth Enforcers Bible Church Intl",
      subtitle: "Messengers Of Truth",
      description: "Experience the power of worship.",
      subdescription: "With the God of truth, There is no impossibility before us."
    }
  ];

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length, isPaused]);

  const nextSlide = (): void => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsPaused(true); // Pause when user manually navigates
  };

  const prevSlide = (): void => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsPaused(true); // Pause when user manually navigates
  };

  const goToSlide = (index: number): void => {
    setCurrentSlide(index);
    setIsPaused(true); // Pause when user manually navigates
  };

  // Handle mouse enter - pause the carousel
  const handleMouseEnter = (): void => {
    setIsPaused(true);
  };

  // Handle mouse leave - resume the carousel after a delay
  const handleMouseLeave = (): void => {
    setTimeout(() => {
      setIsPaused(false);
    }, 1000); // Resume after 1 second delay
  };

  // Handle touch/click - toggle pause state
  const handleTouch = (): void => {
    setIsPaused(!isPaused);
  };

  return (
    <div
      className="relative h-screen overflow-hidden bg-gray-50 dark:bg-gray-800"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouch}
      onClick={handleTouch}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-700 ease-in-out ${index === currentSlide ? 'translate-x-0' :
              index < currentSlide ? '-translate-x-full' : 'translate-x-full'
            }`}
        >
          <section
            className="bg-center bg-no-repeat bg-cover bg-gray-700 bg-blend-multiply flex items-center relative h-screen w-full"
            style={slide.backgroundImage ? { backgroundImage: `url('${slide.backgroundImage}')` } : undefined}
          >
            {slide.backgroundVideo && (
              <video
                className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
                src={slide.backgroundVideo}
                autoPlay
                loop
                muted
                playsInline
              />
            )}
            <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56 relative z-10">
              <div className="flex items-center space-x-1">
                <img
                  src={logoUrl1}
                  className="h-12 w-auto rounded-2xl"
                  alt={slide.title}
                />
                <h1 className="text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                  {slide.title}
                </h1>
                <img
                  src={logoUrl2}
                  className="h-12 w-auto rounded-2xl"
                  alt={slide.title}
                />
              </div>

              <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                AKA: <span className="text-base">{slide.subtitle}</span>
              </p>
              <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                {slide.description} <br /> {slide.subdescription}
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                <a
                  href="/about"
                  className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-gradient-to-br from-blue-600 via-purple-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-transparent-900 dark:focus:ring-purple-500 font-medium rounded-lg text-sm text-center me-2 mb-2 transition-all duration-300"
                >
                  About Us
                  <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </a>
                <a
                  href={isLive ? liveStreamUrl : "/Enforcers Window"}
                  className={isLive ? "inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-gradient-to-br from-blue-600 via-orange-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-transparent-900 dark:focus:ring-orange-500 font-medium rounded-lg text-sm text-center me-2 mb-2 transition-all duration-300" : "inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-gradient-to-br from-blue-600 via-white-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-white dark:focus:ring-white font-medium rounded-lg text-sm text-center me-2 mb-2 transition-all duration-300"}
                >
                  {isLive ? "Watch Us Live" : "Enforcers Window"}
                  <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </a>
              </div>
            </div>
          </section>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-300 z-10"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-300 z-10"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-20  flex space-x-3 z-10 mx-auto left-0 right-0 justify-center">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                ? 'bg-white scale-110'
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeCarousel;