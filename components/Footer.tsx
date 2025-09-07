// components/Footer.tsx
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#000432] text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Kolom 1 - Alamat */}
        <div>
          <h2 className="font-bold text-lg mb-2">
            PT Bahurekso Ingkang Teguh | Brite Indonesia
          </h2>
          <p className="text-sm leading-relaxed">
            Brite House, Jl. Kesehatan No.7, RT.5/RW.11, Gedong, Kec. Ps. Rebo,  
            Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13760
          </p>
        </div>

        {/* Kolom 2 - Company */}
        <div>
          <h3 className="font-bold text-lg mb-2">Company</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-gray-300">About us</a></li>
            <li><a href="#" className="hover:text-gray-300">Career</a></li>
            <li><a href="#" className="hover:text-gray-300">Our Partner</a></li>
            <li><a href="#" className="hover:text-gray-300">Our Team</a></li>
          </ul>
        </div>

        {/* Kolom 3 - Our Business */}
        <div>
          <h3 className="font-bold text-lg mb-2">Our Business</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-gray-300">Media Buying</a></li>
            <li><a href="#" className="hover:text-gray-300">Event Management</a></li>
            <li><a href="#" className="hover:text-gray-300">Virtual Office & Working Space</a></li>
            <li><a href="#" className="hover:text-gray-300">Brite Radio</a></li>
            <li><a href="#" className="hover:text-gray-300">Brite Genius</a></li>
          </ul>
        </div>

        {/* Kolom 4 - Sosial Media */}
        <div>
          <h3 className="font-bold text-lg mb-2">Connect with us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-pink-400"><FaInstagram size={24} /></a>
            <a href="#" className="hover:text-blue-500"><FaFacebook size={24} /></a>
            <a href="#" className="hover:text-red-500"><FaYoutube size={24} /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        © {new Date().getFullYear()} | Brite Indonesia
      </div>
    </footer>
  );
}
