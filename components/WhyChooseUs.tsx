import { Award, Clock, Shield, Users } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: 'Tim Medis Profesional',
      description: 'Dokter dan terapis berpengalaman dengan sertifikasi resmi dan keahlian terpercaya',
      color: 'from-teal-500 to-cyan-600',
    },
    {
      icon: Shield,
      title: 'Peralatan Modern',
      description: 'Menggunakan teknologi dan peralatan medis terkini untuk hasil optimal',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      icon: Clock,
      title: 'Layanan Cepat & Nyaman',
      description: 'Proses pendaftaran mudah dengan waktu tunggu minimal dan ruangan nyaman',
      color: 'from-cyan-500 to-teal-600',
    },
    {
      icon: Users,
      title: 'Ribuan Pasien Puas',
      description: 'Dipercaya oleh ratusan pasien dengan testimoni positif dan hasil memuaskan',
      color: 'from-emerald-500 to-green-600',
    },
  ];

  return (
    <section id="tentang" className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Mengapa Memilih <span className="text-teal-600">Kami</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Komitmen kami adalah memberikan pelayanan kesehatan terbaik dengan standar profesional tinggi
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Siap Untuk Konsultasi?
          </h3>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Hubungi kami sekarang dan dapatkan perawatan terbaik untuk kesehatan Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+62xxx"
              className="inline-flex items-center justify-center gap-2 bg-white text-teal-600 px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 font-semibold"
            >
              Hubungi Sekarang
            </a>
            <a
              href="https://wa.me/62xxx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 font-semibold"
            >
              Chat WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
