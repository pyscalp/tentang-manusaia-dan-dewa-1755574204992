// src/pages/ContactPage.jsx
import React from 'react';
import SectionHeader from '../components/SectionHeader';
import ContactForm from '../components/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

function ContactPage() {
  return (
    <div className="contact-page py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Hubungi Kami"
          subtitle="Kami senang mendengar dari Anda! Kirimkan pertanyaan, saran, atau kolaborasi."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h3>
            <ContactForm />
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Informasi Kontak</h3>
            <ul className="space-y-6 text-lg text-gray-700">
              <li className="flex items-center">
                <Mail size={28} className="mr-4 text-primary" />
                <div>
                  <span className="font-semibold">Email:</span><br />
                  info@manusiadandewa.com
                </div>
              </li>
              <li className="flex items-center">
                <Phone size={28} className="mr-4 text-primary" />
                <div>
                  <span className="font-semibold">Telepon:</span><br />
                  +62 812-3456-7890
                </div>
              </li>
              <li className="flex items-center">
                <MapPin size={28} className="mr-4 text-primary" />
                <div>
                  <span className="font-semibold">Alamat:</span><br />
                  Jalan Mitologi No. 1, Dunia Fana, Alam Semesta
                </div>
              </li>
            </ul>
            <div className="mt-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Jam Operasional</h4>
              <p className="text-lg text-gray-700">Senin - Jumat: 09:00 - 17:00 WIB</p>
              <p className="text-lg text-gray-700">Sabtu - Minggu: Tutup</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;