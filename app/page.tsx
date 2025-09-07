"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { useState } from "react";

const newsData = [
  {
    id: 1,
    category: "Brand Identity",
    time: "5 min read",
    title: "The importance of a strong brand identity",
    desc: "This post could discuss the process of developing a brand identity that reflects the values and mission of a business...",
    image: "/news1.jpg",
  },
  {
    id: 2,
    category: "UI/UX",
    time: "5 min read",
    title: "Top 10 UI and UX design mistakes to avoid",
    desc: "This post could list and discuss common mistakes that businesses make when it comes to UI and UX design...",
    image: "/news2.jpg",
  },
  {
    id: 3,
    category: "Web Development",
    time: "5 min read",
    title: "The benefits of using a web framework",
    desc: "This post could discuss the benefits of using a web framework, such as speeding up the development process...",
    image: "/news3.jpg",
  },
];

const testimonials = [
  {
    name: "Theresa Webb",
    role: "Marketing Coordinator",
    photo: "/avatars/user1.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.",
  },
  {
    name: "Robert Fox",
    role: "CEO of Tech Corp",
    photo: "/avatars/user2.jpg",
    text: "Suspendisse potenti. Vivamus elementum, est a sagittis volutpat, odio felis gravida tortor, eget vulputate justo odio eu velit.",
  },
  {
    name: "Jenny Wilson",
    role: "Brand Manager",
    photo: "/avatars/user3.jpg",
    text: "Curabitur a est eu diam volutpat feugiat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.",
  },
];

const businesses = [
  { title: "Digital Media Buying", desc: "We provide service ...", img: "/images/media-buying.jpg" },
  { title: "Influencer & Creator Marketing", desc: "We provide service ...", img: "/images/influencer.jpg" },
  { title: "Strategic Audio Marketing", desc: "We provide service ...", img: "/images/audio.jpg" },
  { title: "Event Management", desc: "We provide service ...", img: "/images/event.jpg" },
  { title: "Content Production", desc: "We provide service ...", img: "/images/content.jpg" },
  { title: "Brand Strategy", desc: "We provide service ...", img: "/images/brand.jpg" },
];

const clients = [
  { name: "Google", logo: "/logos/google.png" },
  { name: "Meta", logo: "/logos/meta.png" },
  { name: "Netflix", logo: "/logos/netflix.png" },
  { name: "Amazon", logo: "/logos/amazon.png" },
  { name: "Spotify", logo: "/logos/spotify.png" },
  { name: "Apple", logo: "/logos/apple.png" },
  { name: "Microsoft", logo: "/logos/microsoft.png" },
  { name: "Coca Cola", logo: "/logos/cocacola.png" },
  { name: "Nike", logo: "/logos/nike.png" },
  { name: "Adidas", logo: "/logos/adidas.png" },
  { name: "Samsung", logo: "/logos/samsung.png" },
  { name: "Disney", logo: "/logos/disney.png" },
];

const faqData = [
  {
    id: 1,
    question: "What type of companies do you work with? Who are your target customers?",
    answer: "Our target customers and companies mostly start-ups, small businesses, non-profits, and enterprise clients across the industries."
  },
  {
    id: 2,
    question: "How long does it take to successfully complete a website?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Timeline typically ranges from 4-12 weeks depending on project complexity."
  },
  {
    id: 3,
    question: "Does your web design agency provide only design or web development as well?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. We provide comprehensive services including both design and development, ensuring a complete solution for your digital needs."
  },
  {
    id: 4,
    question: "Can you work with my existing Marketing team?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. We collaborate seamlessly with existing marketing teams to ensure cohesive brand messaging and strategy implementation."
  },
  {
    id: 5,
    question: "Will you be there for me after the website is complete?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. We provide ongoing support, maintenance, and updates to ensure your website continues to perform optimally long after launch."
  }
];

const PrimaryButton = ({ children }: { children: React.ReactNode }) => (
  <button className="px-6 py-3 rounded-full bg-[#000432] text-white hover:bg-[#111852] transition">
    {children}
  </button>
);

export default function Page({ handleChatWithUs }) {
  const [openFaq, setOpenFaq] = useState<number | null>(1); // Set pertanyaan pertama terbuka by default

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="w-full bg-white">
      {/* Hapus main wrapper karena sudah ada di layout */}
        {/* Hero Section */}
<div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src="/building-bg.jpg"
        alt="Building background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
<div className="absolute inset-0 bg-gray-500/70"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center h-full px-8 md:px-16">
        <div className="max-w-3xl text-white text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
            BRITE INDONESIA
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-6">
            Your Professional Partner
          </h2>
          <p className="text-base md:text-lg mb-6 text-gray-200">
            We elevate your brand image and publication through our professional
            strategic and marketing plan.
          </p>

          {/* CTA Button */}
          <button
            onClick={handleChatWithUs}
            className="group bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-2 mx-auto md:mx-0"
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

        {/* About Section */}
        <section className="w-full bg-[#F8F0E3] py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-black mb-4">
                Faster Better Best Network in Indonesia
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Brite Indonesia makes it easy for brands to execute media buying
                quickly and measurably through platforms designed to optimize reach
                and ROI, with care for client success and a better future.
              </p>
            </div>
            <div>
              <img
                src="/about-image.jpg"
                alt="About Brite Indonesia"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Our Business */}
        <section className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-[#000432] text-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Our Business</h2>
            <div className="swiper-container">
              <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                className="business-swiper"
              >
                {businesses.map((item, i) => (
                  <SwiperSlide key={i}>
                    <div className="bg-[#F8F0E3] text-black rounded-2xl shadow-lg overflow-hidden flex flex-col h-full">
                      <Image src={item.img} alt={item.title} width={500} height={300} className="h-48 w-full object-cover" />
                      <div className="p-4 flex flex-col flex-grow">
                        <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                        <p className="text-sm flex-grow mb-4">{item.desc}</p>
                        <PrimaryButton>See What We Do</PrimaryButton>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>

        {/* Clients */}
        <section className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-[#F8F0E3] text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#000432] mb-12">
            Our awesome clients that we are proud to work with
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {clients.map((c, i) => (
              <div key={i} className="flex items-center justify-center p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
                <Image src={c.logo} alt={c.name} width={120} height={60} className="object-contain max-h-16" />
              </div>
            ))}
          </div>
          <div className="mt-12">
            <PrimaryButton>Check our Business</PrimaryButton>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-[#F8F0E3]">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#000432] mb-12">
              A few words from our clients
            </h2>
            <div className="testimonial-swiper">
              <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                className="testimonials-swiper"
              >
                {testimonials.map((item, i) => (
                  <SwiperSlide key={i}>
                    <div className="bg-[#2C145A] text-white rounded-xl shadow-lg p-6 flex flex-col justify-between h-full">
                      <p className="text-sm text-left mb-6">{item.text}</p>
                      <div className="flex items-center gap-4">
                        <Image src={item.photo} alt={item.name} width={48} height={48} className="rounded-full object-cover" />
                        <div className="text-left">
                          <h4 className="font-semibold">{item.name}</h4>
                          <p className="text-xs opacity-80">{item.role}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>

        {/* Latest News */}
        <section className="w-full bg-[#6C0D0D] py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl font-bold text-white">
                Latest <span className="ml-2">Brite News</span>
              </h2>
              <button className="border border-white text-white px-6 py-2 rounded-md hover:bg-white hover:text-[#6C0D0D] transition">
                View All
              </button>
            </div>

            {/* Desktop Grid */}
            <div className="hidden lg:grid grid-cols-3 gap-8">
              {newsData.map((item) => (
                <div key={item.id} className="bg-transparent rounded-lg overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-56 object-cover rounded-lg"
                  />
                  <div className="mt-4 flex items-center gap-2 text-sm">
                    <span className="bg-[#0D0D6C] text-white px-3 py-1 rounded-full text-xs font-medium">
                      {item.category}
                    </span>
                    <span className="bg-[#6C0D0D] text-white border border-white px-3 py-1 rounded-full text-xs font-medium">
                      {item.time}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-200 line-clamp-3">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Mobile & Tablet Slider */}
            <div className="lg:hidden">
              <Swiper 
                spaceBetween={16} 
                slidesPerView={1.2}
                className="news-swiper"
              >
                {newsData.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="bg-transparent rounded-lg overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-56 object-cover rounded-lg"
                      />
                      <div className="mt-4 flex items-center gap-2 text-sm">
                        <span className="bg-[#0D0D6C] text-white px-3 py-1 rounded-full text-xs font-medium">
                          {item.category}
                        </span>
                        <span className="bg-[#6C0D0D] text-white border border-white px-3 py-1 rounded-full text-xs font-medium">
                          {item.time}
                        </span>
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-gray-200 line-clamp-3">
                        {item.desc}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full bg-[#F8F0E3] py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Side - Title */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#000432] leading-tight">
                  Frequently asked questions
                </h2>
              </div>

              {/* Right Side - FAQ Items */}
              <div className="space-y-4">
                {faqData.map((faq) => (
                  <div key={faq.id} className="border-b border-gray-300 pb-4">
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full flex justify-between items-center text-left py-4 focus:outline-none group"
                    >
                      <span className="text-lg font-semibold text-[#000432] pr-4 group-hover:text-[#111852] transition-colors">
                        {faq.question}
                      </span>
                      <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                        {openFaq === faq.id ? (
                          <svg className="w-5 h-5 text-[#000432] transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-[#000432] transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        )}
                      </div>
                    </button>
                    
                    {/* Answer with smooth transition */}
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openFaq === faq.id 
                          ? 'max-h-96 opacity-100' 
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="pb-4">
                        <p className="text-gray-700 leading-relaxed text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }