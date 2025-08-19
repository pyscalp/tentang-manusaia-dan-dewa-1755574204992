import React from 'react';
import HeroSection from '../components/HeroSection';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';
import { Star, Users, Globe } from 'lucide-react';

function HomePage() {
  return (
    <div className="home-page">
      <HeroSection />

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Mengapa Mempelajari Manusia & Dewa?"
            subtitle="Memahami hubungan ini membuka wawasan tentang budaya, sejarah, dan esensi keberadaan."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              icon={Users}
              title="Refleksi Diri"
              description="Kisah-kisah ini mencerminkan sifat manusia, perjuangan, dan aspirasi kita."
            />
            <Card
              icon={Star}
              title="Pemahaman Budaya"
              description="Mitologi adalah fondasi banyak peradaban, membentuk nilai dan tradisi."
            />
            <Card
              icon={Globe}
              title="Wawasan Filosofis"
              description="Menjelajahi pertanyaan abadi tentang moralitas, takdir, dan makna hidup."
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img src="/images/service_icon_1.svg" alt="Kisah Kuno" className="w-full h-auto max-w-md mx-auto" />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Kisah Kuno, Pelajaran Abadi</h3>
            <p className="text-lg text-gray-700 mb-6">
              Dari epik Yunani hingga legenda Nusantara, setiap narasi tentang dewa dan manusia membawa pelajaran yang relevan hingga kini. Mereka mengajarkan kita tentang keberanian, pengorbanan, cinta, dan konsekuensi.
            </p>
            <Link to="/gallery" className="inline-block bg-primary hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300">
              Lihat Galeri Kisah
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;