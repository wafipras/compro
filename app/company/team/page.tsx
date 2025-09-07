export default function AboutPage() {
  const teamMembers = [
    {
      name: "Lorem Ipsum",
      role: "Dolor Sit Amet",
      image: "/images/team1.jpg",
      hoverImage: "/images/team1-hover.jpg",
    },
    {
      name: "Lorem Ipsum",
      role: "Dolor Sit Amet",
      image: "/images/team2.jpg",
      hoverImage: "/images/team2-hover.jpg",
    },
    {
      name: "Lorem Ipsum",
      role: "Dolor Sit Amet",
      image: "/images/team3.jpg",
      hoverImage: "/images/team3-hover.jpg",
    },
    {
      name: "Lorem Ipsum",
      role: "Dolor Sit Amet",
      image: "/images/team4.jpg",
      hoverImage: "/images/team4-hover.jpg",
    },
     {
      name: "Lorem Ipsum",
      role: "Dolor Sit Amet",
      image: "/images/team4.jpg",
      hoverImage: "/images/team4-hover.jpg",
    },
     {
      name: "Lorem Ipsum",
      role: "Dolor Sit Amet",
      image: "/images/team4.jpg",
      hoverImage: "/images/team4-hover.jpg",
    },
     {
      name: "Lorem Ipsum",
      role: "Dolor Sit Amet",
      image: "/images/team4.jpg",
      hoverImage: "/images/team4-hover.jpg",
    },
     {
      name: "Lorem Ipsum",
      role: "Dolor Sit Amet",
      image: "/images/team4.jpg",
      hoverImage: "/images/team4-hover.jpg",
    },
    {
      name: "Lorem Ipsum",
      role: "Dolor Sit Amet",
      image: "/images/team1.jpg",
      hoverImage: "/images/team1-hover.jpg",
    },
    {
      name: "Lorem Ipsum",
      role: "Dolor Sit Amet",
      image: "/images/team2.jpg",
      hoverImage: "/images/team2-hover.jpg",
    },
    {
      name: "Lorem Ipsum",
      role: "Dolor Sit Amet",
      image: "/images/team3.jpg",
      hoverImage: "/images/team3-hover.jpg",
    },
    {
      name: "Lorem Ipsum",
      role: "Dolor Sit Amet",
      image: "/images/team4.jpg",
      hoverImage: "/images/team4-hover.jpg",
    },
     {
      name: "Lorem Ipsum",
      role: "Dolor Sit Amet",
      image: "/images/team4.jpg",
      hoverImage: "/images/team4-hover.jpg",
    },
     {
      name: "Lorem Ipsum",
      role: "Dolor Sit Amet",
      image: "/images/team4.jpg",
      hoverImage: "/images/team4-hover.jpg",
    },
     {
      name: "Lorem Ipsum",
      role: "Dolor Sit Amet",
      image: "/images/team4.jpg",
      hoverImage: "/images/team4-hover.jpg",
    },
     {
      name: "Lorem Ipsum",
      role: "Dolor Sit Amet",
      image: "/images/team4.jpg",
      hoverImage: "/images/team4-hover.jpg",
    },
   
    
    // duplikat sesuai kebutuhan
  ];

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

          {/* Meet Our Team Section */}
          <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-12">
          MEET OUR TEAM
        </h2>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-md"
            >
              {/* Default Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-[500px] sm:h-[350px] md:h-[300px] object-cover transform group-hover:scale-105 transition duration-500"
              />

              {/* Hover Image */}
              <img
                src={member.hoverImage}
                alt={`${member.name} hover`}
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition duration-500"
              />

              {/* Overlay Info */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition duration-500 flex flex-col items-center justify-end text-white p-4">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-200">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}
