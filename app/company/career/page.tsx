export default function AboutPage() {
  const handleChatWithUs = () => {
    alert("Chat with us clicked!"); // bisa diganti dengan aksi lain
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
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
    </div>
  )
}
