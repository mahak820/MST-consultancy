import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-900">
      {/* Background Image with Zoom Animation */}
      <div 
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[8000ms] ease-out ${
          isLoaded ? 'scale-110' : 'scale-100'
        }`}
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      />
      
      {/* Dark Overlay for Better Text Readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      
      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Heading with Slide Up Animation */}
          <h1 
            className={`font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight transition-all duration-1000 ease-out ${
              isLoaded 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-12 opacity-0'
            }`}
            style={{ 
              fontFamily: '"Poppins", "Segoe UI", system-ui, -apple-system, sans-serif',
              textShadow: '2px 4px 8px rgba(0, 0, 0, 0.8)'
            }}
          >
            250+ Projects Completed
          </h1>
          
          {/* Subtitle with Delayed Animation */}
          <p 
            className={`mt-4 font-sans text-xl sm:text-2xl md:text-3xl font-medium text-white transition-all duration-1000 ease-out delay-300 ${
              isLoaded 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-8 opacity-0'
            }`}
            style={{ 
              fontFamily: '"Poppins", "Segoe UI", system-ui, -apple-system, sans-serif',
              textShadow: '1px 2px 4px rgba(0, 0, 0, 0.8)'
            }}
          >
            by MST Consultancy
          </p>
          
          {/* Decorative Line with Animation */}
          <div 
            className={`mx-auto mt-8 h-1 bg-gradient-to-r from-transparent via-white to-transparent transition-all duration-1000 ease-out delay-500 ${
              isLoaded ? 'w-32 opacity-100' : 'w-0 opacity-0'
            }`}
          />
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div 
          className={`transition-all duration-1000 ease-out delay-700 ${
            isLoaded ? 'translate-y-0 opacity-70' : 'translate-y-4 opacity-0'
          }`}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;