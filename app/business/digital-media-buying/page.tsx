"use client"; 

import { useRouter } from "next/navigation";

export default function MediaBuyingPage() {
  const router = useRouter();
  
  const whatsappNumber = "6281234567890"; // Ganti dengan nomor WhatsApp yang sesuai
  const whatsappMessage = "Hello, I'm interested in your Media Buying services";
  
  const handleChatWithUs = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCheckBusiness = (path: string) => {
    router.push(path);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Image - ganti dengan path gambar Anda */}
        <img 
          src="/path/to/your/background-image.jpg" 
          alt="Building background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-gray-500" />
        
        {/* Hero Content */}
        <div className="relative z-10 flex items-center h-full px-8 md:px-16">
          <div className="max-w-2xl text-white">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Media Buying
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed mb-8 text-white/90">
              With experiment, we'll help other business to grow
            </p>
            
            {/* CTA Button */}
            <button 
              onClick={handleChatWithUs}
              className="group bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.687"/>
              </svg>
              <span>Chat With Us</span>
            </button>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-40 right-40 w-20 h-20 bg-white/10 rounded-full blur-lg animate-bounce" />
      </div>

      {/* Services Section */}
      <div className="w-full bg-pink-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Digital Media Buying Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <img 
                src="/images/digital-media.jpg" 
                alt="Digital Media Buying"
                className="w-full h-[300px] object-cover rounded-lg shadow-lg"
              />
            </div>
            
            {/* Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                DIGITAL MEDIA BUYING
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Digital Media Buying is the art and science of placing your brand's message on the 
                right digital platforms, at the right time, to reach the most relevant and potential 
                audience.
              </p>
              
              <ul className="space-y-3 mb-8">
                {[
                  'Search Engine Marketing',
                  'Social Media Advertising',
                  'Programmatic & Display Advertising',
                  'Video & YouTube Advertising',
                  'E-Commerce & Marketplace Ads',
                  'Content Marketing & SEO'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => handleCheckBusiness('/business/digital-media-buying/cabang/digital')}
                className="bg-purple-900 hover:bg-purple-800 text-white px-8 py-3 rounded transition-colors duration-300"
              >
                Check our Business
              </button>
            </div>
          </div>

          {/* Influencer & Creator Marketing Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Content */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                INFLUENCER & CREATOR MARKETING
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Influencer & Creator Marketing is the strategy of connecting your brand with its target 
                audience through the authentic and trusted voices of content creators. It's not about 
                paying for a promotion, it's about building trust through genuine storytelling.
              </p>
              
              <ul className="space-y-3 mb-8">
                {[
                  'Influencer Strategy & Selection',
                  'Campaign Management & Execution',
                  'Content Creator Collaboration',
                  'Performance Tracking & Reporting',
                  'Event & Activation Integration'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => handleCheckBusiness('/business/digital-media-buying/cabang/influencer')}
                className="bg-purple-900 hover:bg-purple-800 text-white px-8 py-3 rounded transition-colors duration-300"
              >
                Check our Business
              </button>
            </div>
            
            {/* Image */}
            <div>
              <img 
                src="/images/influencer-marketing.jpg" 
                alt="Influencer & Creator Marketing"
                className="w-full h-[300px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Strategic Audio Marketing Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <img 
                src="/images/strategic-audio.jpg" 
                alt="Strategic Audio Marketing"
                className="w-full h-[300px] object-cover rounded-lg shadow-lg"
              />
            </div>
            
            {/* Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                STRATEGIC AUDIO MARKETING
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our approach to reach audiences through the power of sound. In a fast-paced world, 
                we leverage the moments when your audience is listening in the car, during a workout, 
                or while relaxing to deliver personal and memorable brand messages.
              </p>
              
              <ul className="space-y-3 mb-8">
                {[
                  'Search Engine Marketing',
                  'Social Media Advertising',
                  'Programmatic & Display Advertising',
                  'Video & YouTube Advertising',
                  'E-Commerce & Marketplace Ads',
                  'Content Marketing & SEO'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => handleCheckBusiness('/business/digital-media-buying/cabang/strategic')}
                className="bg-purple-900 hover:bg-purple-800 text-white px-8 py-3 rounded transition-colors duration-300"
              >
                Check our Business
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}