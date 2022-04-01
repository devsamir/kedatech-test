import React from 'react';
import Button from './Button';
import TextField from './TextField';
import TextArea from './TextArea';

const ContactSection = () => {
  return (
    <div id="contact" className="px-16 py-12 lg:px-8 md:px-4">
      <div className="rounded-xl shadow-xl bg-gradient-to-br from-primary-900 to-primary-600 overflow-hidden w-full pt-12 px-16 pb-16 lg:px-8">
        <h2 className="text-white font-medium text-4xl capitalize mb-4">Mulai bekerja sama dengan kami</h2>
        <p className="text-lg text-gray-200 mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, quos distinctio. Reiciendis repellendus perspiciatis modi,
          voluptatum porro similique accusantium iste. Necessitatibus dolorem mollitia corrupti aperiam.
        </p>
        <form>
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
            <TextField type="text" label="Nama" placeholder="Masukan Nama Anda" labelstyle="text-white" />
            <TextField type="text" label="Nama Perusahaan" placeholder="Masukan Nama Perusahaan Anda" labelstyle="text-white" />
            <TextField type="text" label="Email" placeholder="Masukan Nomor Email Anda" labelstyle="text-white" />
            <TextField type="text" label="Nomor Telephone" placeholder="Masukan Nomor Telephone Anda" labelstyle="text-white" />
            <TextArea label="Pesan Anda" placeholder="Masukan Pesan Anda" labelstyle="text-white" margin="col-span-2 lg:col-span-1" />
          </div>
          <Button className="custom-btn-secondary text-white hover:shadow-lg hover:shadow-primary-500/30 active:shadow-none mt-auto">
            Kirim Pesan
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
