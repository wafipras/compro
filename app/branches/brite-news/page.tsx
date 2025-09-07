"use client";

import { useRouter } from "next/navigation";

export default function MediaBuyingPage() {
  const router = useRouter();

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
    // Ganti link di sini ke website tujuanmu
    window.open("https://example.com", "_blank");
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <img
          src="/path/to/your/background-image.jpg"
          alt="Building background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gray Overlay */}
        <div className="absolute inset-0 bg-gray-500/50" />

        {/* Hero Content */}
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
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B1C4D]">
            FREE ACCESS EVERY NEWS
          </h2>
          <button
            onClick={handleRedirect}
            className="bg-[#E63946] text-white font-bold px-8 py-3 rounded-full shadow-md hover:bg-[#d62828] transition"
          >
            TAKE ME THERE
          </button>
        </div>
      </section>
    </div>
  );
}
