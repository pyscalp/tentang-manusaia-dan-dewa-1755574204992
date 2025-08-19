import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-secondary text-white p-8 mt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Tentang Kami</h3>
          <p className="text-gray-200">
            Menjelajahi hubungan kompleks antara manusia dan dewa, dari mitologi kuno hingga interpretasi modern.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Kontak</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Mail size={20} className="mr-2 text-accent" />
              info@manusiadandewa.com
            </li>
            <li className="flex items-center">
              <Phone size={20} className="mr-2 text-accent" />
              +62 812-3456-7890
            </li>
            <li className="flex items-center">
              <MapPin size={20} className="mr-2 text-accent" />
              Jalan Mitologi No. 1, Dunia Fana
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Ikuti Kami</h3>
          <div className="flex space-x-4">
            {/* Placeholder for social media icons */}
            <a href="#" className="text-white hover:text-accent transition-colors">
              <Globe size={24} />
            </a>
            <a href="#" className="text-white hover:text-accent transition-colors">
              <Users size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-indigo-600 mt-8 pt-8 text-center text-gray-300">
        &copy; {new Date().getFullYear()} Manusia & Dewa. Hak Cipta Dilindungi.
      </div>
    </footer>
  );
}

export default Footer;