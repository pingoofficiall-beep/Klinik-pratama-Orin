import { Clock, Calendar, AlertCircle } from 'lucide-react';

const OperatingHours = () => {
  const schedule = [
    { day: 'Senin - Jumat', hours: '08:00 - 20:00 WIB', status: 'open' },
    { day: 'Sabtu', hours: '08:00 - 18:00 WIB', status: 'open' },
    { day: 'Minggu', hours: '09:00 - 15:00 WIB', status: 'open' },
    { day: 'Hari Libur Nasional', hours: 'Tutup', status: 'closed' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-teal-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl mb-4">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Jam <span className="text-teal-600">Operasional</span>
            </h2>
            <p className="text-lg text-gray-600">
              Kami siap melayani Anda dengan jadwal yang fleksibel
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="space-y-4">
              {schedule.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-6 rounded-2xl transition-all duration-300 ${
                    item.status === 'open'
                      ? 'bg-gradient-to-r from-teal-50 to-cyan-50 hover:shadow-md'
                      : 'bg-gray-100'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        item.status === 'open'
                          ? 'bg-gradient-to-br from-teal-500 to-cyan-600'
                          : 'bg-gray-400'
                      }`}
                    >
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-lg font-semibold text-gray-900">{item.day}</span>
                  </div>
                  <span
                    className={`text-lg font-bold ${
                      item.status === 'open' ? 'text-teal-600' : 'text-gray-500'
                    }`}
                  >
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-amber-50 border-l-4 border-amber-500 rounded-xl">
              <div className="flex gap-3">
                <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-amber-900 mb-2">Informasi Penting</h4>
                  <ul className="text-sm text-amber-800 space-y-1">
                    <li>Disarankan untuk membuat janji terlebih dahulu</li>
                    <li>Pasien dengan janji akan diprioritaskan</li>
                    <li>Untuk layanan tertentu, mohon konfirmasi ketersediaan dokter</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperatingHours;
