import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section id="kontak" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hubungi <span className="text-teal-600">Kami</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kami siap membantu Anda. Jangan ragu untuk menghubungi kami
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="flex gap-6 group">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Alamat</h3>
                <p className="text-gray-600 leading-relaxed">
                  Jl. Kesehatan No. 123, Kelurahan Sentosa<br />
                  Kecamatan Pratama, Jakarta Selatan 12345
                </p>
              </div>
            </div>

            <div className="flex gap-6 group">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Telepon</h3>
                <p className="text-gray-600">
                  <a href="tel:+622112345678" className="hover:text-teal-600 transition-colors">
                    (021) 1234-5678
                  </a>
                </p>
                <p className="text-gray-600">
                  <a href="tel:+628123456789" className="hover:text-teal-600 transition-colors">
                    +62 812-3456-789
                  </a>
                </p>
              </div>
            </div>

            <div className="flex gap-6 group">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">
                  <a href="mailto:info@klinikpratamaorin.com" className="hover:text-teal-600 transition-colors">
                    info@klinikpratamaorin.com
                  </a>
                </p>
                <p className="text-gray-600">
                  <a href="mailto:appointment@klinikpratamaorin.com" className="hover:text-teal-600 transition-colors">
                    appointment@klinikpratamaorin.com
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ikuti Kami</h3>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Facebook className="w-6 h-6 text-white" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Instagram className="w-6 h-6 text-white" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-sky-500 rounded-xl flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Twitter className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Lokasi Kami</h3>
            <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613!3d-6.1944491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Mudah diakses dengan berbagai transportasi umum. Tersedia parkir luas untuk kendaraan pribadi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
