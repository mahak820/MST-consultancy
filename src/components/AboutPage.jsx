import React, { useState, useEffect } from 'react';

const AboutUsSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div 
            className={`transition-all duration-800 ease-out ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <p className="text-red-500 font-semibold text-sm md:text-base uppercase tracking-wider mb-4">
              ABOUT MST CONSULTANCY
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 leading-tight mb-6">
              Building Excellence Since 2009
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are a premier construction consultancy firm dedicated to transforming visions into reality through innovative engineering solutions and exceptional project management.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Left Content - Our Story */}
          <div 
            className={`transition-all duration-1000 ease-out delay-300 ${
              isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
            }`}
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Story</h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Founded in 2009, MST Consultancy emerged from a vision to revolutionize the construction industry through innovative solutions and unwavering commitment to quality. What started as a small team of passionate engineers has grown into a trusted name in commercial and institutional construction.
              </p>
              <p>
                Over the years, we have successfully delivered 250+ projects across various sectors including educational institutions, healthcare facilities, commercial complexes, and government buildings. Our expertise spans from initial concept development to final project delivery.
              </p>
              <p>
                Today, MST Consultancy stands as a beacon of excellence, known for our technical expertise, innovative approach, and client-centric solutions that exceed expectations.
              </p>
            </div>
          </div>

          {/* Right Content - Image */}
          <div 
            className={`transition-all duration-1000 ease-out delay-500 ${
              isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80"
                alt="MST Consultancy Team"
                className="w-full h-96 object-cover rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
              />
              <div className="absolute inset-0 bg-blue-900 bg-opacity-20 rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          
          {/* Mission */}
          <div 
            className={`bg-blue-50 p-8 rounded-lg transition-all duration-1000 ease-out delay-700 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-900">Our Mission</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              To deliver exceptional construction consultancy services that transform communities through innovative, sustainable, and cost-effective solutions while maintaining the highest standards of quality and safety.
            </p>
          </div>

          {/* Vision */}
          <div 
            className={`bg-red-50 p-8 rounded-lg transition-all duration-1000 ease-out delay-900 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-red-500">Our Vision</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              To be the leading construction consultancy firm in India, recognized for our innovation, integrity, and excellence in creating sustainable infrastructure that enhances quality of life for generations.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div 
          className={`text-center mb-20 transition-all duration-1000 ease-out delay-1100 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            
            {/* Value 1 */}
            <div className="text-center group hover:transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-blue-900 mb-2">Quality</h4>
              <p className="text-gray-600">Uncompromising commitment to excellence in every project</p>
            </div>

            {/* Value 2 */}
            <div className="text-center group hover:transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors duration-300">
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-red-500 mb-2">Integrity</h4>
              <p className="text-gray-600">Transparent and honest relationships with all stakeholders</p>
            </div>

            {/* Value 3 */}
            <div className="text-center group hover:transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-green-600 mb-2">Innovation</h4>
              <p className="text-gray-600">Embracing cutting-edge technology and creative solutions</p>
            </div>

            {/* Value 4 */}
            <div className="text-center group hover:transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-purple-600 mb-2">Value</h4>
              <p className="text-gray-600">Delivering maximum value through cost-effective solutions</p>
            </div>
          </div>
        </div>

        {/* Achievement Stats */}
        <div 
          className={`bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-12 text-white text-center transition-all duration-1000 ease-out delay-1300 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h2 className="text-3xl font-bold mb-12">Our Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-4xl font-bold text-red-400 mb-2">250+</h3>
              <p className="text-blue-100 font-medium">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-red-400 mb-2">15+</h3>
              <p className="text-blue-100 font-medium">Years Experience</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-red-400 mb-2">100%</h3>
              <p className="text-blue-100 font-medium">Client Satisfaction</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-red-400 mb-2">50+</h3>
              <p className="text-blue-100 font-medium">Expert Engineers</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUsSection;