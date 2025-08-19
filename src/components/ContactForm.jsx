import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    toast.success('Pesan Anda telah terkirim!');
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nama Lengkap</label>
        <input
          type="text"
          id="name"
          {...register('name', { required: 'Nama wajib diisi' })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {errors.name && <p className="text-red-500 text-xs italic mt-1">{errors.name.message}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
        <input
          type="email"
          id="email"
          {...register('email', {
            required: 'Email wajib diisi',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Alamat email tidak valid'
            }
          })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {errors.email && <p className="text-red-500 text-xs italic mt-1">{errors.email.message}</p>}
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Pesan</label>
        <textarea
          id="message"
          rows="5"
          {...register('message', { required: 'Pesan wajib diisi' })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary"
        ></textarea>
        {errors.message && <p className="text-red-500 text-xs italic mt-1">{errors.message.message}</p>}
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-primary hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300"
        >
          Kirim Pesan
        </button>
      </div>
    </form>
  );
}

export default ContactForm;