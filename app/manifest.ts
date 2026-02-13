import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Klinik Pratama Orin - Kesehatan & Kecantikan Terpadu',
    short_name: 'Klinik Orin',
    description: 'Layanan kesehatan profesional dan perawatan kecantikan berkualitas',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#14b8a6',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
