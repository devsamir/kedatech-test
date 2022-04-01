import React from 'react';
import chartImg from '../assets/chart.svg';

const HomeSection = () => {
  return (
    <div id="home" className="min-h-[calc(100vh-6rem)] px-16 py-4 grid grid-cols-2 lg:grid-cols-1 relative custom-bg-home">
      <div className="flex flex-col justify-end items-start  lg:hidden">
        <h5 className="italic mb-8 text-gray-600 text-xl">&#8220; Ayo Kembangkan Bisnis Anda Sekarang &#8221;</h5>
        <img src={chartImg} alt="image chart for home title" className="h-60" />
      </div>
      <div className="flex flex-col items-start lg:items-center lg:justify-center sm:justify-start">
        <div className="text-center">
          <h1 className="text-6xl 2xl:text-4xl md:text-2xl  text-gray-800 font-medium tracking-wider capitalize mt-16 2xl:mt-8">
            Aplikasi wirausaha modern
          </h1>
          <span className="custom-highlight-text inline-block text-4xl 2xl:text-2xl md:text-xl  uppercase">karya anak bangsa</span>

          <h5 className="italic mb-8 text-gray-600 text-xl md:text-lg hidden lg:block">
            &#8220; Ayo Kembangkan Bisnis Anda Sekarang &#8221;
          </h5>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
