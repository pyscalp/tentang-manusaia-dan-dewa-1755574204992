// src/pages/GalleryPage.jsx
import React from 'react';
import SectionHeader from '../components/SectionHeader';

function GalleryPage() {
  const images = [
    { src: '/images/gallery_image_1.svg', alt: 'Manusia Berdoa', caption: 'Manusia dalam doa dan refleksi.' },
    { src: '/images/gallery_image_2.svg', alt: 'Dewa Langit', caption: 'Representasi dewa langit yang agung.' },
    { src: '/images/gallery_image_3.svg', alt: 'Pertemuan Ilahi', caption: 'Momen pertemuan antara fana dan ilahi.' },
    { src: '/images/gallery_image_4.svg', alt: 'Pahlawan Mitologi', caption: 'Pahlawan legendaris menghadapi takdir.' },
    { src: '/images/gallery_image_5.svg', alt: 'Alam Dewa', caption: 'Pemandangan alam yang diyakini sebagai tempat dewa.' },
    { src: '/images/gallery_image_6.svg', alt: 'Simbol Kuno', caption: 'Simbol-simbol kuno yang merepresentasikan kekuatan.' },
  ];

  return (
    <div className="gallery-page py-16">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Galeri Kisah & Simbol"
          subtitle="Koleksi visual yang menggambarkan interaksi, simbol, dan representasi Manusia dan Dewa dari berbagai era."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <p className="text-lg font-semibold text-gray-800">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GalleryPage;