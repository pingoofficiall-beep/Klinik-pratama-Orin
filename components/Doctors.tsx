import { GraduationCap, Award } from 'lucide-react';
import Image from 'next/image';

const Doctors = () => {
  const doctors = [
    {
      name: 'dr. Sarah Putri',
      specialty: 'Dokter Umum',
      experience: '8 Tahun Pengalaman',
      education: 'Universitas Indonesia',
      image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'dr. Ahmad Hidayat',
      specialty: 'Dokter Gigi',
      experience: '6 Tahun Pengalaman',
      education: 'Universitas Gadjah Mada',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'dr. Maya Kusuma, Sp.A',
      specialty: 'Spesialis Anak',
      experience: '10 Tahun Pengalaman',
      education: 'Universitas Airlangga',
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Siti Nurhaliza, S.Kep',
      specialty: 'Terapis Kecantikan',
      experience: '5 Tahun Pengalaman',
      education: 'Certified Beauty Therapist',
      image: 'https://images.pexels.com/photos/3985320/pexels-photo-3985320.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  return (
    <section id="dokter" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tim <span className="text-teal-600">Medis</span> Kami
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Didukung oleh tenaga medis profesional dan berpengalaman yang siap melayani Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden aspect-square">
                <Image
                  src={doctor.image}
                  alt={`${doctor.name} - ${doctor.specialty} di Klinik Pratama Orin`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
                <p className="text-teal-600 font-semibold mb-4">{doctor.specialty}</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Award className="w-4 h-4 text-teal-500" />
                    <span>{doctor.experience}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <GraduationCap className="w-4 h-4 text-teal-500" />
                    <span>{doctor.education}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
