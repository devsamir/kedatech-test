import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { HiX, HiMenu } from 'react-icons/hi';

import blob1 from '../assets/blob1.svg';
import logo from '../assets/logo.png';
import Button from './Button';
import Modal from './Modal';
import TextField from './TextField';

const Navbar = () => {
  const [modalForm, setModalForm] = useState(false);
  const [open, setOpen] = useState(false);
  const lg = useMediaQuery({ query: '(max-width: 1023px)' });

  return (
    <>
      <div className="w-full h-24 flex items-center justify-between px-12 lg:px-6 md:px-4 sm:px-2">
        <img
          className="absolute top-0 left-0 -z-10 h-[50rem] xl:h-[45rem] lg:h-[40rem] md:h-[35rem]  sm:h-[20rem]"
          src={blob1}
          alt="blob for background brand"
        />
        <a href="#home" className="flex gap-2 items-center no-underline">
          <img className="h-16 lg:h-12" src={logo} alt="logo" />
          <span className="text-3xl text-white tracking-wide font-medium uppercase transform translate-y-[0.4rem] lg:text-2xl sm:hidden">
            Dasica
          </span>
        </a>
        <button className="hidden lg:block text-3xl p-4" onClick={setOpen.bind(this, true)}>
          <HiMenu />
        </button>
        <ul
          className={`flex list-none gap-10 items-center lg:flex-col lg:fixed lg:w-screen lg:h-screen overflow-hidden lg:top-0 lg:left-0 lg:justify-center transition-all 
          duration-300 lg:bg-white lg:z-50 lg:transform lg:origin-top-right ${open ? 'lg:scale-100' : 'lg:scale-0'}`}
        >
          <button
            className={`text-primary-500 invisible absolute top-0 right-0 p-8  text-3xl rounded-full ${
              open ? 'lg:visible' : 'lg:invisible'
            }`}
            onClick={setOpen.bind(this, false)}
          >
            <HiX />
          </button>
          <li>
            <a
              className="inline-block no-underline text-gray-800 text-xl kg:text-lg sm:text-base font-bold relative transition-all duration-500 uppercase custom-nav-link"
              href="#about"
              onClick={setOpen.bind(this, false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              className="inline-block no-underline text-gray-800 text-xl lg:text-lg sm:text-base font-bold relative transition-all duration-500 uppercase custom-nav-link"
              href="#pricing"
              onClick={setOpen.bind(this, false)}
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              className="inline-block no-underline text-gray-800 text-xl lg:text-lg sm:text-base font-bold relative transition-all duration-500 uppercase custom-nav-link"
              href="#contact"
              onClick={setOpen.bind(this, false)}
            >
              Contact
            </a>
          </li>
          <li>
            <Button
              onClick={setModalForm.bind(this, true)}
              className="w-full border border-primary-500 text-primary-600 custom-btn-outline-primary hover:text-white hover:shadow-lg hover:shadow-primary-500/30 active:shadow-none"
            >
              Login
            </Button>
          </li>
        </ul>
      </div>
      <Modal title="Login" show={modalForm} onClose={setModalForm.bind(this, false)} className="max-w-xl">
        <form>
          <TextField type="text" label="Email" margin="mb-2" placeholder="Masukan Email" />
          <TextField type="password" label="Password" margin="mb-2" placeholder="Masukan Password" />
          <div className="flex justify-end items-center gap-4">
            <Button className="bg-gray-200 hover:bg-gray-300" onClick={setModalForm.bind(this, false)}>
              Batal
            </Button>
            <Button className="custom-btn-primary text-white hover:shadow-lg hover:shadow-primary-500/30 active:shadow-none mt-auto">
              Login
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default Navbar;
