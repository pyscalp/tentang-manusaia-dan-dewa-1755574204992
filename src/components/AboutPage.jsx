// src/pages/AboutPage.jsx
import React from 'react';
import SectionHeader from '../components/SectionHeader';

function AboutPage() {
  return (
    <div className="about-page py-16">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Tentang Manusia & Dewa"
          subtitle="Situs ini didedikasikan untuk eksplorasi mendalam tentang hubungan kompleks antara manusia dan entitas ilahi."
        />

        <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
          <div className="md:w-1/2">
            <img src="/images/about_illustration.svg" alt="Tentang Kami" className="w-full h-auto max-w-md mx-auto rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Perjalanan Abadi</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Sejak awal peradaban, manusia telah mencari makna dan tujuan di luar diri mereka, seringkali melalui konsep dewa-dewi. Hubungan ini telah membentuk agama, seni, filsafat, dan struktur sosial di seluruh dunia. Kami percaya bahwa dengan memahami interaksi ini, kita dapat lebih memahami diri kita sendiri dan tempat kita di alam semesta.
            </p>
          </div>
        </div>

        <div className="bg-indigo-50 p-8 rounded-lg shadow-inner text-center">
          <h3 className="text-3xl font-bold text-indigo-800 mb-4">Misi Kami</h3>
          <p className="text-lg text-indigo-700 max-w-3xl mx-auto">
            Misi kami adalah menyediakan platform yang kaya informasi dan inspiratif bagi siapa saja yang tertarik dengan mitologi, teologi, antropologi, dan studi perbandingan agama. Kami menyajikan konten yang mendalam, akurat, dan mudah diakses, mendorong diskusi dan pemikiran kritis.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;