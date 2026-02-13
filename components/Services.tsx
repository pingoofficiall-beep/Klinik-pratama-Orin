import { Sparkles, Heart, Stethoscope, Baby, Eye, Brain, Users } from 'lucide-react';

const Services = () => {
  const faceServices = [
    { name: 'Facial Basic', price: '60K', icon: Sparkles },
    { name: 'Facial Acne', price: '100K', icon: Eye },
    { name: 'Facial Radio Frequency', price: '125K', icon: Brain },
    { name: 'Facial Hydra Peel', price: '150K', icon: Sparkles },
    { name: 'Facial Detox', price: '175K', icon: Heart },
    { name: 'BabySkin Facial', price: '200K', icon: Baby },
  ];

  const bodyServices = [
    { name: 'Foot Spa (Massage, Scrub)', price: '50K' },
    { name: 'Hand Spa (Massage, Scrub)', price: '40K' },
    { name: 'Foot & Hand Spa', price: '85K' },
    { name: 'Body Spa (Massage, Scrub, Masker)', price: '150K' },
    { name: 'Body Massage', price: '60K' },
    { name: 'Body Scrub', price: '60K' },
    { name: 'Body Massage Scrub', price: '110K' },
    { name: 'Body RF', price: '150K' },
  ];

  const generalServices = [
    { name: 'Konsultasi Umum', icon: Stethoscope, desc: 'Pemeriksaan kesehatan menyeluruh' },
    { name: 'Perawatan Anak', icon: Baby, desc: 'Layanan kesehatan untuk anak' },
    { name: 'Perawatan Gigi', icon: Sparkles, desc: 'Kesehatan gigi dan mulut' },
    { name: 'Perawatan Keluarga', icon: Users, desc: 'Layanan untuk seluruh keluarga' },
  ];

  return (
    <section id="layanan" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Layanan <span className="text-teal-600">Kami</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Berbagai layanan kesehatan dan kecantikan dengan peralatan modern dan tenaga medis profesional
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {generalServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Perawatan Wajah</h3>
            </div>
            <div className="space-y-3">
              {faceServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-white p-4 rounded-xl hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-amber-600" />
                      <span className="font-medium text-gray-800">{service.name}</span>
                    </div>
                    <span className="font-bold text-amber-600">{service.price}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Perawatan Badan</h3>
            </div>
            <div className="space-y-3">
              {bodyServices.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-white p-4 rounded-xl hover:shadow-md transition-shadow"
                >
                  <span className="font-medium text-gray-800">{service.name}</span>
                  <span className="font-bold text-teal-600">{service.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
