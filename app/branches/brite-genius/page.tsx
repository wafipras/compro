"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

export default function MediaBuyingPage() {
  const router = useRouter();

  // State untuk FAQ
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const faqData = [
    {
      id: 1,
      question: "What type of companies do you work with? Who are your target customers?",
      answer:
        "Our target customers and companies mostly start-ups, small businesses, non-profits, and enterprise clients across the industries.",
    },
    {
      id: 2,
      question: "How long does it take to successfully complete a website?",
      answer:
        "Timeline typically ranges from 4-12 weeks depending on project complexity.",
    },
    {
      id: 3,
      question: "Does your web design agency provide only design or web development as well?",
      answer:
        "We provide comprehensive services including both design and development, ensuring a complete solution for your digital needs.",
    },
    {
      id: 4,
      question: "Can you work with my existing Marketing team?",
      answer:
        "We collaborate seamlessly with existing marketing teams to ensure cohesive brand messaging and strategy implementation.",
    },
    {
      id: 5,
      question: "Will you be there for me after the website is complete?",
      answer:
        "We provide ongoing support, maintenance, and updates to ensure your website continues to perform optimally long after launch.",
    },
  ];

  // Data dinamis untuk class dan lesson
  const lessons = [
    {
      id: 1,
      title: "Sekolah Dasar",
      desc: "Matematika, Bahasa Indonesia, IPA, IPS, Seni Budaya",
      image: "/images/sd.png",
    },
    {
      id: 2,
      title: "Sekolah Menengah Pertama",
      desc: "Matematika, Bahasa Indonesia, IPA, IPS, Seni Budaya",
      image: "/images/smp.png",
    },
    {
      id: 3,
      title: "Sekolah Menengah Atas",
      desc: "Matematika, Bahasa Indonesia, Kimia, Biologi, Fisika, Sejarah & Ilmu Sosial, Seni Budaya",
      image: "/images/sma.png",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
        <img
          src="/path/to/your/background-image.jpg"
          alt="Building background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gray Overlay */}
        <div className="absolute inset-0 bg-gray-500" />

        {/* Hero Content */}
        <div className="relative z-10 flex items-center h-full px-8 md:px-16">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Brite Genius
            </h1>
            <h4 className="text-4xl md:text-6xl lg:text-5xl font-bold leading-tight mb-6">
              Your Professional Partner
            </h4>
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed mb-8 text-white/90">
              We elevate your brand image and publication through our professional
              strategic and marketing plan
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-40 right-40 w-20 h-20 bg-white/10 rounded-full blur-lg animate-bounce" />
      </div>

      {/* What is Brite Genius Section */}
      <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-black mb-4">
              What is Brite Genius?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Brite Genius is your trusted partner in education and media. We
              provide structured lessons and creative strategies to help
              students and brands achieve the best results. Our focus is on
              innovation, measurable impact, and long-term success.
            </p>
          </div>
          <div>
            <Image
              src="/images/about-image.jpg"
              alt="About Brite Genius"
              width={500}
              height={350}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Our Class and Lesson */}
      <section className="w-full bg-[#DEFAFF] py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-12">
            Our Class And Lesson
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {lessons.map((lesson) => (
              <div key={lesson.id} className="flex flex-col items-center text-center">
                <Image
                  src={lesson.image}
                  alt={lesson.title}
                  width={120}
                  height={120}
                  className="mb-6"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {lesson.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {lesson.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Access Section */}
      <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-black mb-6">
            FREE ACCESS EVERY CLASS
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a
            href="https://contohwebsite.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-sky-400 hover:bg-sky-500 text-black font-semibold py-3 px-8 rounded-full transition"
          >
            TAKE ME THERE
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-[#DEFAFF] py-16 px-4 sm:px-6 lg:px-8">
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
                        <svg
                          className="w-5 h-5 text-[#000432] transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-5 h-5 text-[#000432] transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      )}
                    </div>
                  </button>

                  {/* Answer */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openFaq === faq.id
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
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
