export default function Gallery() {
  const images = [
    "/img/company/gallery/test.jpg",
    "/img/company/gallery/test.jpg",
    "/img/company/gallery/test.jpg",
    "/img/company/gallery/test.jpg",
    "/img/company/gallery/test.jpg",
    "/img/company/gallery/test.jpg",
    "/img/company/gallery/test.jpg",
    "/img/company/gallery/test.jpg",
    "/img/company/gallery/test.jpg",
    "/img/company/gallery/test.jpg",
    "/img/company/gallery/test.jpg",
    "/img/company/gallery/test.jpg",
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-4 py-16">
      <h2 className="text-center text-3xl md:text-4xl font-semibold mb-12">
        Our Gallery
      </h2>

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((src, idx) => (
          <div key={idx} className="relative overflow-hidden rounded-xl group">
            <img
              src={src}
              alt={`Gallery ${idx + 1}`}
              className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
