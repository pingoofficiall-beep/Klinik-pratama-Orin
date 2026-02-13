import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Klinik Pratama Orin - Kesehatan & Kecantikan Terpadu",
  description: "Klinik Pratama Orin menyediakan layanan kesehatan profesional dan perawatan kecantikan berkualitas dengan tim medis berpengalaman sejak 2020.",
  keywords: [
    "klinik pratama orin",
    "klinik kesehatan",
    "klinik kecantikan",
    "layanan medis",
    "perawatan kecantikan",
    "dokter umum",
    "konsultasi dokter",
    "klinik terpercaya"
  ],
  authors: [{ name: "Klinik Pratama Orin" }],
  creator: "Klinik Pratama Orin",
  publisher: "Klinik Pratama Orin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://klinik-pratama-orin.vercel.app",
    title: "Klinik Pratama Orin - Kesehatan & Kecantikan Terpadu",
    description: "Layanan kesehatan profesional dan perawatan kecantikan berkualitas dengan tim medis berpengalaman.",
    siteName: "Klinik Pratama Orin",
    images: [
      {
        url: "https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=1200",
        width: 1200,
        height: 630,
        alt: "Klinik Pratama Orin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Klinik Pratama Orin - Kesehatan & Kecantikan Terpadu",
    description: "Layanan kesehatan profesional dan perawatan kecantikan berkualitas",
    images: ["https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=1200"],
  },
  verification: {
    google: "your-google-verification-code", // Ganti dengan kode verifikasi Google
  },
  alternates: {
    canonical: "https://klinik-pratama-orin.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
