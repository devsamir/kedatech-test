import React from 'react';
import { HiCheck } from 'react-icons/hi';
import Button from './Button';

const PricingSection = () => {
  return (
    <div id="pricing" className="px-16 py-12 lg:px-8 md:px-4">
      <h2 className="text-center text-4xl mb-8 capitalize">
        <span className="custom-highlight-text">Pricing</span>
      </h2>
      <div className="grid grid-cols-3 gap-8 lg:grid-cols-2 md:grid-cols-1">
        <div className="rounded-xl p-12 w-100% shadow-2xl flex flex-col items-center transition-all duration-500 hover:shadow-primary-500/30 hover:-translate-y-2">
          <h4 className="text-center text-primary-800 font-medium text-xl uppercase mb-4">Basic Plan</h4>
          <p className="text-4xl  text-gray-800 font-semibold mr-2 mb-8 flex justify-center gap-1">
            <span className="text-lg self-start font-medium">Rp</span> 2,000,000<span className="text-lg self-end font-medium">/bln</span>
          </p>

          <ul className="flex flex-col list-none gap-4 mb-12">
            <li className="text-lg flex items-center gap-4">
              <HiCheck className="w-8 h-8 text-primary-600" /> Mencatat barang masuk
            </li>
            <li className="text-lg flex items-center gap-4">
              <HiCheck className="w-8 h-8 text-primary-600" /> Mencatat barang keluar
            </li>
            <li className="text-lg flex items-center gap-4">
              <HiCheck className="w-8 h-8 text-primary-600" /> Mencatat hasil keuntungan
            </li>
          </ul>
          <Button className="border border-primary-500 text-primary-600 custom-btn-outline-primary hover:text-white hover:shadow-lg hover:shadow-primary-500/30 active:shadow-none  mt-auto">
            Mulai Sewa
          </Button>
        </div>

        <div className="rounded-xl p-12 w-100% shadow-2xl flex flex-col items-center transition-all duration-500 hover:shadow-primary-500/30 hover:-translate-y-2">
          <h4 className="text-center text-primary-800 font-medium text-xl uppercase mb-4">Business Plan</h4>
          <p className="text-4xl  text-gray-800 font-semibold mr-2 mb-8 flex justify-center gap-1">
            <span className="text-lg self-start font-medium">Rp</span> 3,500,000<span className="text-lg self-end font-medium">/bln</span>
          </p>

          <ul className="flex flex-col list-none gap-4 mb-12">
            <li className="text-lg flex items-center gap-4">
              <HiCheck className="w-8 h-8 text-primary-600" /> Mencatat barang masuk dan keluar
            </li>
            <li className="text-lg flex items-center gap-4">
              <HiCheck className="w-8 h-8 text-primary-600" /> Mencatat hasil keuntungan
            </li>
            <li className="text-lg flex items-center gap-4">
              <HiCheck className="w-8 h-8 text-primary-600" /> Analisa penjualan dengan Chart
            </li>
            <li className="text-lg flex items-center gap-4">
              <HiCheck className="w-8 h-8 text-primary-600" /> Support 7x24 Jam
            </li>
          </ul>
          <Button className="border border-primary-500 text-primary-600 custom-btn-outline-primary hover:text-white hover:shadow-lg hover:shadow-primary-500/30 active:shadow-none  mt-auto">
            Mulai Sewa
          </Button>
        </div>

        <div
          className="rounded-xl p-12 w-100% shadow-2xl flex flex-col items-center transition-all duration-500 hover:shadow-primary-500/30 hover:-translate-y-2 
        relative overflow-hidden lg:col-span-2 lg:mx-auto md:mx-0 md:col-span-1"
        >
          <div className="absolute uppercase text-sm font-bold top-[3%] right-[-13%] bg-primary-500 text-white py-2 px-16 transform rotate-45">
            Best Deal
          </div>
          <h4 className="text-center text-primary-800 font-medium text-xl uppercase mb-4">Entrepreneur Plan</h4>
          <p className="text-4xl  text-gray-800 font-semibold mr-2 mb-8 flex justify-center gap-1">
            <span className="text-lg self-start font-medium">Rp</span> 4,500,000<span className="text-lg self-end font-medium">/bln</span>
          </p>

          <ul className="flex flex-col list-none gap-4 mb-12">
            <li className="text-lg flex items-center gap-4">
              <HiCheck className="w-8 h-8 text-primary-600" /> Mencatat barang masuk dan keluar
            </li>
            <li className="text-lg flex items-center gap-4">
              <HiCheck className="w-8 h-8 text-primary-600" /> Mencatat hasil keuntungan
            </li>
            <li className="text-lg flex items-center gap-4">
              <HiCheck className="w-8 h-8 text-primary-600" /> Analisa penjualan dengan Chart
            </li>
            <li className="text-lg flex items-center gap-4">
              <HiCheck className="w-8 h-8 text-primary-600" /> Support 7x24 Jam
            </li>
            <li className="text-lg flex items-center gap-4">
              <HiCheck className="w-8 h-8 text-primary-600" /> Export data ke Excel
            </li>
            <li className="text-lg flex items-center gap-4">
              <HiCheck className="w-8 h-8 text-primary-600" /> AI Prediksi penghasilan
            </li>
          </ul>
          <Button className="custom-btn-primary text-white hover:shadow-lg hover:shadow-primary-500/30 active:shadow-none mt-auto">
            Mulai Sewa
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
