'use client';

import { Activity, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Klinik Pratama Orin</h3>
                <p className="text-sm text-teal-400">Kesehatan & Kecantikan</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Memberikan layanan kesehatan profesional dan perawatan kecantikan berkualitas dengan tim medis berpengalaman.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Layanan</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-teal-400 transition-colors cursor-pointer">Konsultasi Umum</li>
              <li className="hover:text-teal-400 transition-colors cursor-pointer">Perawatan Wajah</li>
              <li className="hover:text-teal-400 transition-colors cursor-pointer">Perawatan Badan</li>
              <li className="hover:text-teal-400 transition-colors cursor-pointer">Perawatan Gigi</li>
              <li className="hover:text-teal-400 transition-colors cursor-pointer">Perawatan Anak</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Kontak</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-400 flex-shrink-0 mt-1" />
                <span>Jl. Kesehatan No. 123, Jakarta Selatan</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <a href="tel:+622112345678" className="hover:text-teal-400 transition-colors">
                  (021) 1234-5678
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <a href="mailto:info@klinikpratamaorin.com" className="hover:text-teal-400 transition-colors">
                  info@klinikpratamaorin.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Jam Operasional</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex justify-between">
                <span>Senin - Jumat</span>
                <span className="text-teal-400">08:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sabtu</span>
                <span className="text-teal-400">08:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Minggu</span>
                <span className="text-teal-400">09:00 - 15:00</span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Ikuti Kami</h4>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-sky-500 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Klinik Pratama Orin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
