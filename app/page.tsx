'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Doctors from '@/components/Doctors';
import OperatingHours from '@/components/OperatingHours';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import BookingModal from '@/components/BookingModal';

export default function Home() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero onBookingClick={() => setIsBookingModalOpen(true)} />
      <Services />
      <WhyChooseUs />
      <Doctors />
      <OperatingHours />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </div>
  );
}
