'use client';

import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const whatsappNumber = '628123456789';
  const message = 'Halo, saya ingin konsultasi dan membuat janji temu di Klinik Pratama Orin.';

  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {showTooltip && (
        <div className="hidden sm:block bg-white px-4 py-3 rounded-xl shadow-lg border border-gray-200 max-w-xs animate-fade-in">
          <div className="flex items-start justify-between gap-2">
            <p className="text-sm text-gray-700">
              <span className="font-semibold text-teal-600">Butuh bantuan?</span>
              <br />
              Chat dengan kami sekarang!
            </p>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-gray-400 hover:text-gray-600 flex-shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      <button
        onClick={handleClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="group relative w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
        aria-label="Chat WhatsApp"
      >
        <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75"></div>
        <MessageCircle className="w-8 h-8 text-white relative z-10" />
      </button>
    </div>
  );
};

export default WhatsAppButton;
