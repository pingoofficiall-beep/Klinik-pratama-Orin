'use client';

import { Calendar, Phone } from 'lucide-react';
import Image from 'next/image';

interface HeroProps {
  onBookingClick: () => void;
}

const Hero = ({ onBookingClick }: HeroProps) => {
  return (
    <section id="beranda" className="pt-20 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block mb-4 px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
              Klinik Terpercaya Sejak 2020
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Perawatan Kesehatan &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                Kecantikan
              </span>{' '}
              Terpadu
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Memberikan layanan kesehatan profesional dan perawatan kecantikan berkualitas dengan
              tim medis berpengalaman untuk kesejahteraan Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={onBookingClick}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 font-semibold text-lg group"
              >
                <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Buat Janji Sekarang
              </button>
              <a
                href="tel:+62xxx"
                className="inline-flex items-center justify-center gap-2 bg-white text-teal-600 px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 font-semibold text-lg border-2 border-teal-500"
              >
                <Phone className="w-5 h-5" />
                Hubungi Kami
              </a>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg mx-auto md:mx-0">
              <div className="text-center md:text-left">
                <div className="text-3xl font-bold text-teal-600">500+</div>
                <div className="text-sm text-gray-600">Pasien Puas</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl font-bold text-teal-600">15+</div>
                <div className="text-sm text-gray-600">Layanan</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl font-bold text-teal-600">5+</div>
                <div className="text-sm text-gray-600">Dokter</div>
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-3xl transform rotate-6 opacity-20"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8">
                <div className="aspect-square bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl flex items-center justify-center overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Profesional Medis di Klinik Pratama Orin"
                    width={800}
                    height={800}
                    className="w-full h-full object-cover rounded-2xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
