import { Outfit } from 'next/font/google';
import Gallery from './Gallery';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function Page() {
  return (
    <>
    <div className={outfit.className}>
        {/* Section 1: fullscreen background */}
        <section
          className="relative w-full h-[80vh] bg-cover bg-center flex items-center"
          style={{ backgroundImage: "url('/img/bg1.png')" }}
        >
          {/* Text */}
          <div className="text-white space-y-4 px-6 md:px-12 text-left ml-6 sm:ml-10 md:ml-22 lg:ml-[120px]">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg">
              Mari kenali kami
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl drop-shadow">
              Teks tambahan lagi biar enak diliatnya
            </p>
          </div>
        </section>

        {/* Section 2: Our Vision */}
        <div className="mx-auto py-8 sm:py-12 md:py-[60px] px-4">
          <section className="text-center max-w-[1000px] mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal max-w-[600px] mx-auto mb-6">
              Brite Indonesia membantumu untuk I've gained an unusually
            </h2>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-normal mb-4 mt-10 sm:mt-16 md:mt-20">
              first paragraph
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-900 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus
              ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus
              duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar
              vivamus fringilla lacus nec metus bibendum egestas. Lorem ipsum dolor sit
              amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae
              pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.
            </p>
          </section>

          <section className="text-center max-w-[1000px] mx-auto mt-12 sm:mt-16 md:mt-20">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-normal mb-4">
              second one
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-900 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus
              ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus
              duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar
              vivamus fringilla lacus nec metus bibendum egestas. Lorem ipsum dolor sit
              amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae
              pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.
            </p>
          </section>
        </div>

        <section className="flex justify-center my-[30px]">
          <div className="w-[1300px] h-px bg-gray-300"></div>
        </section>

        {/* Section 3: Our Mission */}
        <section className="max-w-[1300px] mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Card 1 */}
          <div className="bg-[#0a0e3f] text-[#F8F0E3] rounded-xl p-[60px] min-h-[400px]">
            <h3 className="text-3xl font-normal mb-6 leading-snug">
              Your Professional Partner to <br /> the end
            </h3>
            <p className="text-base leading-relaxed md:mt-10">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus
              ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus
              duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar
              vivamus fringilla lacus nec metus bibendum egestas.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#7a0f0f] text-[#F8F0E3] rounded-xl p-[60px] min-h-[400px]">
            <h3 className="text-3xl font-normal mb-6 leading-snug">
              Faster, Better, and Best <br /> Network in Indonesia
            </h3>
            <p className="text-base leading-relaxed md:mt-10">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus
              ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus
              duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar
              vivamus fringilla lacus nec metus bibendum egestas.
            </p>
          </div>
        </section>

        <section className="flex justify-center my-[30px]">
          <div className="w-[1300px] h-px bg-gray-300"></div>
        </section>

        {/* Section 4: Gallery */}
<Gallery />

{/* Section 5: Company History */}
<section className="relative bg-[#7d0000] py-0 text-white overflow-hidden">
  {/* Timeline container */}
  <div className="
      relative max-w-[1300px] ml-6 sm:ml-10 md:ml-22 lg:ml-[120px] 
      origin-top-left 
      scale-[0.65] sm:scale-[0.8] md:scale-90 lg:scale-100
      transition-transform duration-300
    "
  >
    {/* Vertical Line */}
    <div className="absolute left-[450px] top-0 h-full w-2 bg-[#F8F0E3]"></div>

    {/* Bulatan di ujung atas garis */}
    <div className="absolute left-[453px] top-0 -translate-x-1/2 -translate-y-1/2 
                    w-12 h-12 bg-[#F8F0E3] rounded-full "></div>
    {/* Bulatan di ujung bawah garis */}
    <div className="absolute left-[453px] bottom-0 -translate-x-1/2 translate-y-1/2 
                    w-12 h-12 bg-[#F8F0E3] rounded-full "></div>

    <div className="space-y-32">
      {/* Heading sebagai bagian timeline (tanpa bulatan) */}
      <div className="relative flex items-start gap-14">
        <div className="w-[260px] sm:w-[340px] md:w-[420px] flex-shrink-0"></div>
        <div className="flex-1 pl-10 flex flex-col justify-start md:mt-20">
          <h2 className="text-3xl md:text-4xl font-semibold ">Our Journey</h2>
        </div>
      </div>

      {/* Timeline items */}
      {[
        {
          year: "2015",
          title: "Berdiri nya Brite",
          text: "Lorem ipsum dolor sit amet consecteturem ipsum dolor sit amet consectetur adipiscing elitem ipsum dolor sit amet consectetur adipiscing elitem ipsum doloem ipsum dolor sit amet consectetur adipiscing elitem ipsum dolor sit amet consectetur adipiscing elitem ipsum dolor sit amet consectetur adipiscing elitem ipsum dolor sit amet consectetur adipiscing elitem ipsum dolor sit amet consectetur adipiscing elitr sit amet consectetur adipiscing elit adipiscing elit...",
          img: "/img/company/gallery/test.jpg",
        },
                {
          year: "2015",
          title: "Berdiri nya Brite",
          text: "Lorem ipsum dolor sit amet consecteturem ipsum dolor sit amet consectetur adipiscing elitem ipsum dolor sit amet consectetur adipiscing elitem ipsum doloem ipsum dolor sit amet consectetur adipiscing elitem ipsum dolor sit amet consectetur adipiscing elitem ipsum dolor sit amet consectetur adipiscing elitem ipsum dolor sit amet consectetur adipiscing elitem ipsum dolor sit amet consectetur adipiscing elitr sit amet consectetur adipiscing elit adipiscing elit...",
          img: "/img/company/gallery/test.jpg",
        },
        {
          year: "2018",
          title: "Ekspansi Pertama",
          text: "In id cursus mi pretium tellus dui convallis...",
          img: "/img/history/img2.jpg",
        },
        {
          year: "2022",
          title: "Transformasi Digital",
          text: "Pulvinar vivamus fringilla lacus nec metus...",
          img: "/img/history/img3.jpg",
        },
      ].map((item, idx) => (
        <div key={idx} className="relative flex items-start gap-14">
          {/* Foto kiri */}
          <div className="w-[260px] sm:w-[340px] md:w-[420px] flex-shrink-0">
            <img
              src={item.img}
              alt={item.title}
              className="rounded-xl shadow-xl w-full h-[180px] sm:h-[200px] md:h-[220px] object-cover"
            />
          </div>

          {/* Container teks kanan */}
          <div className="flex-1 pl-10 flex flex-col justify-start mt-12">
            <div className="flex items-center gap-4 mb-5">
              <span className="font-semibold text-3xl">{item.year}</span>
              <span className="text-2xl">|</span>
              <span className="font-semibold text-3xl">{item.title}</span>
            </div>
            <p className="text-lg leading-relaxed">{item.text}</p>
          </div>

          {/* Bulatan untuk tiap item */}
          <div className="absolute left-[430px] top-[40px] w-12 h-12 bg-[#F8F0E3] rounded-full "></div>
        </div>
      ))}

      <div className="relative flex items-start gap-14">
        <div className="w-[260px] sm:w-[340px] md:w-[420px] flex-shrink-0"></div>
        <div className="flex-1 pl-5 flex flex-col justify-start md:mt-10"></div>
      </div>
    </div>
  </div>
</section>









{/* Section 6: Leadership Team */}
<section className="relative w-full min-h-screen bg-[#0b0020] flex flex-col mx-auto px-4 py-10">
  {/* Judul di atas */}
  <h2 className="text-left text-3xl md:text-4xl font-semibold mb-12 text-white lg:ml-[120px]">
    Corporate Governance
  </h2>

  {/* Konten gambar di tengah */}
  <div className="flex flex-1 items-center justify-center">
    <img
      src="/img/company/gallery/struktur.png"
      alt="Corporate Governance Structure"
      className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-lg"
    />
  </div>
</section>



{/* Section 7: Achievements */}
<section className="bg-[#F8F0E3] px-4 py-12">
  <h2 className="text-center text-3xl md:text-4xl font-semibold mb-12 text-[#000435]">
    Awards & Recognitions
  </h2>

  <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-stretch">
    {Array(6).fill(0).map((_, i) => (
      <div
        key={i}
        className="relative group rounded-xl overflow-hidden shadow-lg min-h-[480px] max-w-[600px] mx-auto"
      >
        {/* Gambar */}
        <img
          src="/img/company/gallery/struktur.png"
          alt="Achievement"
          className="w-full h-full object-cover transition duration-300 group-hover:brightness-40"
        />

        {/* Overlay teks hanya fade-in */}
        <div className="absolute inset-0 flex items-center px-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/80">
          <p className="text-white text-left text-lg md:text-2xl leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vitae sapien ut libero venenatis faucibus.
          </p>
        </div>
      </div>
    ))}
  </div>
</section>









{/* Section 8: Visit Us */}
<section className="bg-[#7d0000] text-white text-center px-6 py-12">
  <h2 className="text-3xl md:text-4xl font-semibold mb-8">Visit Us</h2>

  {/* Info Grid */}
  <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
    {/* Phone */}
    <div>
      <h3 className="text-lg font-medium mb-2">Phone</h3>
      <p>+021-08936573947</p>
    </div>

    {/* Email */}
    <div>
      <h3 className="text-lg font-medium mb-2">Email</h3>
      <p>@briteyeahh@gmail.com</p>
    </div>
  </div>

  {/* Location */}
  <div className="max-w-3xl mx-auto mb-8">
    <h3 className="text-lg font-medium mb-2">Location</h3>
    <p>
      Brite House, Jl. Kesehatan No.7, RT.5/RW.11, Gedong, Kec. Ps. Rebo,
      Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13760
    </p>
  </div>
</section>

{/* Google Maps Embed */}
<div className="w-full h-[400px]">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2570949335664!2d106.84335277498955!3d-6.226745761038141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3d71a0b6e1f%3A0xa1b2d7b9c7af80d6!2sJl.%20Kesehatan%20No.7%2C%20RT.5%2FRW.11%2C%20Gedong%2C%20Kec.%20Ps.%20Rebo%2C%20Kota%20Jakarta%20Timur%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2013760!5e0!3m2!1sid!2sid!4v1693799540342!5m2!1sid!2sid"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen={true}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

      </div>
    </>
  );
}