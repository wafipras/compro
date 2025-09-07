'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu)
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#000432] text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md">
              <div className="relative w-8 h-8">
                <div className="w-6 h-6 bg-blue-600 rounded-tl-lg absolute top-0 left-0"></div>
                <div className="w-4 h-4 bg-red-500 rounded-br-lg absolute bottom-0 right-0"></div>
                <div className="w-3 h-3 bg-purple-600 rounded-full absolute top-1 right-1"></div>
              </div>
            </div>
          </div>
          <span className="text-2xl font-bold tracking-wider">Brite</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden block p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8 relative">
          <Link 
            href="/" 
            className="text-white hover:text-blue-200 transition-colors font-medium px-4 py-2 rounded-lg hover:bg-white/10"
          >
            Home
          </Link>

          {/* Company Dropdown */}
          <div className="relative group">
            <button
              className="flex items-center space-x-1 text-white hover:text-blue-200 transition-colors font-medium px-4 py-2 rounded-lg hover:bg-white/10"
              onClick={() => toggleDropdown('company')}
            >
              <span>Company</span>
              <svg className={`w-4 h-4 transition-transform ${openDropdown === 'company' ? 'rotate-180' : ''}`} 
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === 'company' && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50">
                <div className="py-2">
                  <Link href="/company/about" className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    <span>About Us</span>
                  </Link>
                  <Link href="/company/career" className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    <span>Career</span>
                  </Link>
                  <Link href="/company/partner" className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    <span>Our Partner</span>
                  </Link>
                  <Link href="/company/team" className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    <span>Our Team</span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Our Business Dropdown */}
          <div className="relative group">
            <button
              className="flex items-center space-x-1 text-white hover:text-blue-200 transition-colors font-medium px-4 py-2 rounded-lg hover:bg-white/10"
              onClick={() => toggleDropdown('business')}
            >
              <span>Our Business</span>
              <svg className={`w-4 h-4 transition-transform ${openDropdown === 'business' ? 'rotate-180' : ''}`} 
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === 'business' && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50">
                <div className="py-2">
                  <Link href="/business/digital-media-buying" className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    <span>Digital Media Buying</span>
                  </Link>
                  <Link href="/business/event-management" className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    <span>Event Management</span>
                  </Link>
                  <Link href="/business/virtual-office" className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    <span>Virtual Office</span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Branches Dropdown */}
          <div className="relative group">
            <button
              className="flex items-center space-x-1 text-white hover:text-blue-200 transition-colors font-medium px-4 py-2 rounded-lg hover:bg-white/10"
              onClick={() => toggleDropdown('branches')}
            >
              <span>Branches</span>
              <svg className={`w-4 h-4 transition-transform ${openDropdown === 'branches' ? 'rotate-180' : ''}`} 
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === 'branches' && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50">
                <div className="py-2">
                  <Link href="/branches/brite-radio" className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    <span>Brite Radio</span>
                  </Link>
                  <Link href="/branches/brite-news" className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    <span>Brite News</span>
                  </Link>
                  <Link href="/branches/brite-genius" className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    <span>Brite Genius</span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/20 backdrop-blur-sm">
          <nav className="px-6 py-4 space-y-3">
            <Link 
              href="/" 
              onClick={() => setMenuOpen(false)}
              className="block text-white hover:text-blue-200 py-2 font-medium"
            >
              Home
            </Link>

            {/* Mobile Company Dropdown */}
            <details className="group">
              <summary className="text-white hover:text-blue-200 py-2 font-medium cursor-pointer flex items-center justify-between">
                Company
                <svg className="w-4 h-4 transition-transform group-open:rotate-180" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="ml-4 mt-2 space-y-2">
                <Link href="/company/about" onClick={() => setMenuOpen(false)} className="block text-blue-200 hover:text-white py-1">
                  About Us
                </Link>
                <Link href="/company/career" onClick={() => setMenuOpen(false)} className="block text-blue-200 hover:text-white py-1">
                  Career
                </Link>
                <Link href="/company/partner" onClick={() => setMenuOpen(false)} className="block text-blue-200 hover:text-white py-1">
                  Our Partner
                </Link>
                <Link href="/company/team" onClick={() => setMenuOpen(false)} className="block text-blue-200 hover:text-white py-1">
                  Our Team
                </Link>
              </div>
            </details>

            {/* Mobile Business Dropdown */}
            <details className="group">
              <summary className="text-white hover:text-blue-200 py-2 font-medium cursor-pointer flex items-center justify-between">
                Our Business
                <svg className="w-4 h-4 transition-transform group-open:rotate-180" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="ml-4 mt-2 space-y-2">
                <Link href="/business/digital-media-buying" onClick={() => setMenuOpen(false)} className="block text-blue-200 hover:text-white py-1">
                  Digital Media Buying
                </Link>
                <Link href="/business/event-management" onClick={() => setMenuOpen(false)} className="block text-blue-200 hover:text-white py-1">
                  Event Management
                </Link>
                <Link href="/business/virtual-office" onClick={() => setMenuOpen(false)} className="block text-blue-200 hover:text-white py-1">
                  Virtual Office
                </Link>
              </div>
            </details>

            {/* Mobile Branches Dropdown */}
            <details className="group">
              <summary className="text-white hover:text-blue-200 py-2 font-medium cursor-pointer flex items-center justify-between">
                Branches
                <svg className="w-4 h-4 transition-transform group-open:rotate-180" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="ml-4 mt-2 space-y-2">
                <Link href="/branches/brite-radio" onClick={() => setMenuOpen(false)} className="block text-blue-200 hover:text-white py-1">
                  Brite Radio
                </Link>
                <Link href="/branches/brite-news" onClick={() => setMenuOpen(false)} className="block text-blue-200 hover:text-white py-1">
                  Brite News
                </Link>
                <Link href="/branches/brite-genius" onClick={() => setMenuOpen(false)} className="block text-blue-200 hover:text-white py-1">
                  Brite Genius
                </Link>
              </div>
            </details>
          </nav>
        </div>
      )}

      {/* Overlay untuk menutup dropdown saat klik di luar */}
      {openDropdown && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setOpenDropdown(null)}
        ></div>
      )}
    </header>
  )
}
