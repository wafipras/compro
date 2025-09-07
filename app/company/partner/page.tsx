"use client";

import Image from "next/image";
import { useState } from "react";

const clientsData = {
  Pharmacy: [
    "/images/imboost.png",
    "/images/imunped.png",
    "/images/fortid.png",
    "/images/silex.png",
    "/images/antimo.png",
    "/images/antimo-anak.png",
    "/images/klink.png",
    "/images/paratusin.png",
    "/images/bioron.png",
    "/images/calorease.png",
  ],
  Beauty: [
    "/images/beauty1.png",
    "/images/beauty2.png",
    "/images/beauty3.png",
    "/images/beauty4.png",
  ],
  "Baby Project": [
    "/images/baby1.png",
    "/images/baby2.png",
    "/images/baby3.png",
  ],
  "F&B": [
    "/images/fnb1.png",
    "/images/fnb2.png",
    "/images/fnb3.png",
    "/images/fnb4.png",
  ],
  Technology: [
    "/images/tech1.png",
    "/images/tech2.png",
    "/images/tech3.png",
  ],
  Education: [
    "/images/edu1.png",
    "/images/edu2.png",
  ],
  Corporate: [
    "/images/corp1.png",
    "/images/corp2.png",
    "/images/corp3.png",
  ],
};

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("Pharmacy");

  return (
    <div className="w-full">
      {/* Hero Section with Building Background */}
<div className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <img 
          src="/e1d8d81d-712e-42e3-bcd0-99904aa8dfe9.png" 
          alt="Building background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Grey Overlay */}
        <div className="absolute inset-0 bg-gray-500/60" />
        
        {/* Hero Content */}
        <div className="relative z-10 flex items-center h-full px-8 md:px-16">
          <div className="max-w-2xl text-white">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Join us to create wonders
            </h1>
            
            {/* Description Text */}
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed mb-8 text-white/90">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae 
              pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu 
              dignean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. 
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque.
            </p>
            
            {/* CTA Button */}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-40 right-40 w-20 h-20 bg-white/10 rounded-full blur-lg animate-bounce" />
      </div>

      {/* Clients Section */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-purple-600 mb-12">
          Our Clients
        </h2>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto px-4">
          {Object.keys(clientsData).map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-3 text-sm font-medium rounded-full transition-all duration-300 transform hover:scale-105 ${
                activeTab === category
                  ? "bg-purple-600 text-white shadow-lg border-b-4 border-purple-800"
                  : "bg-white text-gray-600 hover:bg-purple-50 hover:text-purple-600 hover:shadow-md border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Logo Grid without Swiper */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {clientsData[activeTab].map((logo, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center p-8 bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 group border border-gray-100"
              >
                <Image
                  src={logo}
                  alt={`${activeTab} client logo`}
                  width={150}
                  height={80}
                  className="transition-all duration-300 group-hover:scale-110 group-hover:opacity-80 filter grayscale group-hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Category Info */}
        {/* <div className="text-center mt-8 max-w-2xl mx-auto px-4">
          <p className="text-gray-600">
            Showing {clientsData[activeTab].length} clients in{" "}
            <span className="font-semibold text-purple-600">{activeTab}</span>{" "}
            category
          </p>
        </div> */}
      </section>
    </div>
  );
}