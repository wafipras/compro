"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function MediaBuyingPage() {
  const router = useRouter();
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
      answer: "Timeline typically ranges from 4-12 weeks depending on project complexity.",
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

  const categories = [
    "Politics",
    "Economy",
    "Sports",
    "Technology",
    "Health",
    "Entertainment",
    "Lifestyle",
    "Education",
  ];

  const handleRedirect = () => {
    window.open("https://example.com", "_blank");
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
        <img
          src="/path/to/your/background-image.jpg"
          alt="Building background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gray-500/50" />

        <div className="relative z-10 flex items-center h-full px-8 md:px-16">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Brite News
            </h1>
            <h4 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Connecting the World Through Stories
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

      {/* What is Brite News Section */}
      <section className="w-full bg-[#F8C8C8] py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B1C4D] mb-4">
              What is Brite News?
            </h2>
            <p className="text-base md:text-lg text-[#1B1C4D] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <img
              src="/images/brite-news-logo.png"
              alt="Brite News Logo"
              className="w-24 h-24 mb-4"
            />
          </div>
        </div>
      </section>

      {/* What We Provide Section */}
      <section className="w-full bg-[#F8C8C8] py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B1C4D] mb-8">
            What we provide
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-white shadow-sm rounded-full text-[#1B1C4D] font-medium cursor-pointer hover:bg-gray-100 transition"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Free Access Section */}
 <section className="w-full bg-[#FFF8F0] py-16 px-6 md:px-12 lg:px-20">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
    {/* Left Text */}
    <div className="text-left">
      <h2 className="text-xl md:text-2xl font-bold text-[#1B1C4D]">
        FREE ACCESS EVERY NEWS
      </h2>
      <p className="text-sm md:text-base text-[#1B1C4D] mt-1">
        FREE ACCESS EVERY NEWS
      </p>
    </div>

    {/* Button */}
    <button
      onClick={() => window.open("https://example.com", "_blank")}
      className="bg-[#FF5A5A] text-black font-semibold px-8 py-3 rounded-full shadow-md hover:bg-[#ff3d3d] transition"
    >
      TAKE ME THERE
    </button>
  </div>
</section>


      {/* FAQ Section */}
      <section className="w-full bg-[#F8C8C8] py-16 px-4 sm:px-6 lg:px-8">
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
