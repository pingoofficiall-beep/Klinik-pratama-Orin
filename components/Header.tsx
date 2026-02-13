'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Activity } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'layanan', label: 'Layanan' },
    { id: 'dokter', label: 'Dokter' },
    { id: 'tentang', label: 'Tentang Kami' },
    { id: 'kontak', label: 'Kontak' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('beranda')}>
            <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Klinik Pratama Orin</h1>
              <p className="text-xs text-teal-600">Kesehatan & Kecantikan</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-teal-600 transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('booking')}
              className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-2.5 rounded-full hover:shadow-lg transition-all duration-300 font-medium"
            >
              Buat Janji
            </button>
          </nav>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-100">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-3 text-gray-700 hover:text-teal-600 hover:bg-teal-50 px-4 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('booking')}
              className="w-full mt-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-3 rounded-full font-medium"
            >
              Buat Janji
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
