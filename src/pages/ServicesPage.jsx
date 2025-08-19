import React from 'react';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';
import { Book, Image, Play } from 'lucide-react';

function ServicesPage() {
  return (
    <div className="services-page py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Layanan Kami"
          subtitle="Kami menyediakan berbagai sumber daya untuk memperdalam pemahaman Anda tentang Manusia dan Dewa."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            icon={Book}
            title="Artikel & Esai Mendalam"
            description="Baca analisis komprehensif tentang mitos, legenda, dan interpretasi filosofis dari berbagai budaya."
          />
          <Card
            icon={Image}
            title="Galeri Visual Inspiratif"
            description="Jelajahi koleksi gambar, ilustrasi, dan seni yang menggambarkan kisah-kisah ilahi dan manusiawi."
          />
          <Card
            icon={Play}
            title="Podcast & Video Edukatif"
            description="Dengarkan diskusi ahli dan tonton dokumenter singkat yang mengulas topik-topik menarik."
          />
          <Card
            icon={Users}
            title="Forum Komunitas"
            description="Berinteraksi dengan sesama penggemar, bagikan pandangan, dan diskusikan ide-ide baru."
          />
          <Card
            icon={Star}
            title="Studi Kasus Mitologi"
            description="Analisis mendalam tentang dewa-dewi tertentu dan peran mereka dalam narasi manusia."
          />
          <Card
            icon={Globe}
            title="Perbandingan Lintas Budaya"
            description="Temukan persamaan dan perbedaan dalam kisah dewa dan manusia di berbagai peradaban dunia."
          />
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;