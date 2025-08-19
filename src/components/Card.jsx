import React from 'react';

function Card({ icon: Icon, title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300 border border-gray-200">
      {Icon && <Icon size={48} className="text-primary mx-auto mb-4" />}
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default Card;