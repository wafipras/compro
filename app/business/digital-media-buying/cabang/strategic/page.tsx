"use client";
import React from "react";

export default function MediaBuyingPage() {
  const whatsappNumber = "6281234567890";
  const whatsappMessage = "Hello, I'm interested in your Media Buying services";

  const handleChatWithUs = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const services = [
    {
      title: "Radio Broadcasting Placement",
      description:
        "Placing your ads on leading radio stations, reaching millions of loyal listeners in your target areas, both nationally and locally.",
    },
    {
      title: "Digital Audio & Podcast Advertising ",
      description:
        "Reaching the most engaged listeners through ads integrated into their favorite podcast programs and audio streaming services.",
    },
    {
      title: "Music Streaming Ads",
      description:
        "Reaching listeners segmented by mood, genre, or activity through various leading music streaming platforms.",
    },
    {
      title: "Audio Production",
      description:
        "Producing high-quality audio ad materials, from iconic jingles to natural and persuasive ad-libs.",
    },
    {
      title: "Branded Podcast Production",
      description:
        "We don't just advertise on other podcasts; we produce original podcast series for your brand. It's the most effective way to build a loyal community and position your brand as a thought leader in its industry.",
    },
    
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400" />

        {/* Hero Content */}
        <div className="relative z-10 flex items-center h-full px-8 md:px-16">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Strategic Audio Marketing
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed mb-8 text-white/90">
              With experiment, we’ll help other business to grow
            </p>
            <button
              onClick={handleChatWithUs}
              className="group bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382L12 15.928l-5.472-1.546A1 1 0 015 15.382v-3.764a3 3 0 013-3h8a3 3 0 013 3v3.764a1 1 0 01-1.528 1z" />
              </svg>
              <span>Chat With Us</span>
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="relative min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-orange-100 py-20 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-8 leading-tight">
                  Strategic Audio Marketing              
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-12">
                Strategic Audio Marketing is an approach to reach audiences through the power of sound. 
                In a fast-paced world, we leverage the moments when your audience is listening in the car, 
                during a workout, or while relaxing to deliver personal and memorable brand messages.
              </p>

              {/* What We Do Section - No Box */}
              <div className="mb-16">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                  WHAT WE DO?
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                 We design comprehensive audio strategies, from selecting the right channels to producing high-quality ad creatives. 
                 We ensure your brand's voice is not only heard, but truly listened to, understood, 
                 and capable of driving action, connecting your brand with listeners on a more emotional level.
                </p>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Title */}
            <div className="lg:sticky lg:top-20">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                Our Service <br />
                Includes :
              </h3>
            </div>

            {/* Right Column - Services List */}
            <div className="space-y-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-6 py-6 border-b border-gray-300/50 last:border-b-0"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                      {service.title}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}