"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

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

  const handleCheckBusiness = (path: string) => {
    router.push(path);
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
        <div className="absolute inset-0 bg-gray-500" />

        <div className="relative z-10 flex items-center h-full px-8 md:px-16">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Radio Brite
            </h1>
            <h4 className="text-4xl md:text-6xl lg:text-5xl font-bold leading-tight mb-6">
              Born To Be Loud
            </h4>
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed mb-8 text-white/90">
              We elevate your brand image and publication trough our professional
              strategic and marketing plan
            </p>
          </div>
        </div>

        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-40 right-40 w-20 h-20 bg-white/10 rounded-full blur-lg animate-bounce" />
      </div>

      {/* About Section */}
      <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-black mb-4">What is Brite Genius?</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Brite Genius is your trusted partner in education and media. We provide
              structured lessons and creative strategies to help students and brands
              achieve the best results. Our focus is on innovation, measurable impact,
              and long-term success.
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

      {/* Our Program Section */}
      <section className="w-full bg-[#D9D9D9] py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1D1A39] mb-10">
            Our Program
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <p className="text-lg font-semibold text-black">Brite Info</p>
              <p className="text-lg font-semibold text-black">Tips & Tricks</p>
              <p className="text-lg font-semibold text-black">Lunch Info Kuliner</p>
              <p className="text-lg font-semibold text-black">Beats of Music</p>
              <p className="text-lg font-semibold text-black">Brite Traveling</p>
              <p className="text-lg font-semibold text-black">Jumat Barokah</p>
            </div>

            <div className="space-y-6 border-l border-gray-400 pl-6">
              <p className="text-lg text-gray-700">08.00 - 10.00 WIB Everyday</p>
              <p className="text-lg text-gray-700">08.00 - 10.00 WIB Everyday</p>
              <p className="text-lg text-gray-700">08.00 - 10.00 WIB Everyday</p>
              <p className="text-lg text-gray-700">08.00 - 10.00 WIB Everyday</p>
              <p className="text-lg text-gray-700">08.00 - 10.00 WIB Everyday</p>
              <p className="text-lg text-gray-700">08.00 - 10.00 WIB Everyday</p>
            </div>
          </div>
        </div>
      </section>

      {/* Podcast Section */}
      <section className="w-full bg-[#F8F0E3] py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1D1A39] mb-10">Podcast</h2>

          <div className="space-y-8">
            {[
              {
                id: 1,
                url: "https://www.youtube.com/embed/TMUxxNK6pwk?si=pQnSLFw1smH-gXQA",
                title:
                  "Lebih Dekat Dengan Rusmin Kusen CEO CPP Radio Network | Brite Show S2 Eps 128",
                date: "May 6, 2025",
              },
              {
                id: 2,
                url: "https://www.youtube.com/embed/UaHPbsDaLbc?si=8C3kAOpqnJKy5iRI",
                title:
                  "Cerita di Balik PENCARIAN Digarap Hanya dalam Waktu 10 MENIT?! | Brite Show S2 Eps 128",
                date: "Apr 11, 2025",
              },
              {
                id: 3,
                url: "https://www.youtube.com/embed/uf_SUlgGCms?si=iW-7FsfBDOWmkZJ1",
                title:
                  "TIPS MIX & MATCH WARNA Bareng Colour & Style Analyst Nihel Rashiqa | Brite Show S2 Eps 127",
                date: "Mar 5, 2025",
              },
            ].map((podcast) => (
              <div
                key={podcast.id}
                className="flex flex-col sm:flex-row items-start gap-6"
              >
                <div className="w-full sm:w-1/3 aspect-video rounded-lg overflow-hidden shadow-md">
                  <iframe
                    src={podcast.url}
                    title={`Podcast ${podcast.id}`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="flex-1 text-left">
                  <p className="text-lg text-black mb-2">{podcast.title}</p>
                  <p className="text-sm text-gray-700">{podcast.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Section */}
      <section className="bg-[#F8F0E3] py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B1C4D] mb-12">
            Our Package and Partnership
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div>
              <h3 className="text-xl font-bold mb-4">spot PT/RT</h3>
              <p className="text-gray-800">
                Materi iklan radio dari hasil proses recording yang berisi "pesan" para
                advertiser lengkap dengan narasi, backsound musik dan tagline
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Insert Recorded</h3>
              <p className="text-gray-800">
                Program iklan yang memberikan ruang interaksi kepada pendengar untuk
                menjawab pertanyaan seputar produk knowledge atau jasa dari para
                advertiser. Pendengar yang beruntung akan mendapatkan hadiah.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Adlibs Recorder</h3>
              <p className="text-gray-800">
                Materi iklan radio yang dibacakan oleh penyiar melalui improvisasi sehingga
                membangun theatre of mind pendengar
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-[#DEFAFF] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#000432] leading-tight">
                Frequently asked questions
              </h2>
            </div>

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

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openFaq === faq.id
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pb-4">
                      <p className="text-gray-700 leading-relaxed text-base">{faq.answer}</p>
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
