import React from 'react';
import businessImg from '../assets/business.svg';

const AboutSection = () => {
  return (
    <div id="about" className="px-16 py-12 lg:px-8 md:px-4">
      <h2 className="text-center text-4xl mb-8">
        About <span className="custom-highlight-text">Us</span>
      </h2>
      <div className="grid grid-cols-2 lg:gap-8 lg:grid-cols-1 gap-16">
        <div>
          <h4 className="text-2xl text-center mb-8 text-gray-800 capitalize">aplikasi yang anda butuhkan untuk mengelola bisnis anda</h4>
          <p className="text-gray-600 text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia provident omnis alias id obcaecati ducimus rem velit
            perspiciatis animi reiciendis commodi quibusdam eveniet tempore vel maiores quas aperiam fuga vitae nobis exercitationem labore,
            sit recusandae iste. Repudiandae dicta nulla ullam veritatis dolor cumque beatae vitae ea nostrum. Quia iusto rem laborum,
            repudiandae magnam fugit libero ex, inventore cum corporis consectetur!
          </p>
        </div>
        <div className="flex justify-center">
          <img src={businessImg} alt="business image for about section" className="w-[80%]" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
