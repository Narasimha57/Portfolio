import React, { useState } from 'react';
import { IoMenu, IoClose } from "react-icons/io5";
import CV from "../assets/Narasimha's_Latest_Resume.pdf";
import { Link } from "react-scroll";

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const items = [
    { id: 1, text: "Home", to: "Home" },
    { id: 2, text: "About", to: "About" },
    { id: 3, text: "Projects", to: "Projects" },
    { id: 5, text: "Skills", to: "Skills" },
    { id: 4, text: "Certifications", to: "Certifications" },
    { id: 6, text: "Contact Us", to: "Contact" },
  ];

  return (
    <div className='fixed top-0 left-0 w-full z-50 bg-white shadow-sm'>
      {/* Desktop Navigation */}
      <div className='hidden md:flex justify-between items-center w-full max-w-[1536px] mx-auto
                      px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 3xl:px-24 4xl:px-32 py-3'>
        <div className='text-3xl font-bold flex items-center gap-1'>
          <span>Narasimha</span>
          <span>Gonela</span>
        </div>
        <ul className='flex space-x-6 items-center list-none text-lg font-semibold'>
          {items.map(({ id, text, to }) => (
            <li key={id} className='hover:text-yellow-500 cursor-pointer transition duration-200'>
              <Link to={to} smooth={true} duration={500} offset={-70}>
                {text}
              </Link>
            </li>
          ))}
        </ul>
        <a
          href={CV}
          download="Narasimha's_Latest_Resume.pdf"
          className='text-lg bg-yellow-500 text-black px-5 py-2 rounded hover:bg-yellow-400 font-semibold transition'
        >
          Download CV
        </a>
      </div>

      {/* Mobile Navigation */}
      <div className='flex md:hidden w-full justify-between items-center px-4 py-4 shadow-sm'>
        <div className='text-2xl font-bold flex items-center gap-2'>
          <span>Narasimha</span>
          <span>Gonela</span>
        </div>
        <div onClick={() => setMenu(!menu)} className='cursor-pointer'>
          {menu ? (
            <IoClose size={30} className='text-black' />
          ) : (
            <IoMenu size={30} className='text-black' />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <div className='bg-yellow-50 py-6 flex flex-col items-center text-black list-none shadow-sm font-semibold md:hidden w-full fixed top-16 left-0 z-40'>
          {items.map(({ id, text, to }) => (
            <li
              key={id}
              className='hover:text-blue-800 cursor-pointer duration-200 py-3 w-full text-center border-b border-yellow-300'
              onClick={() => setMenu(false)}
            >
              <Link to={to} smooth={true} duration={500} offset={-70} onClick={() => setMenu(false)}>{text}</Link>
            </li>
          ))}
          <a
            href={CV}
            download="Narasimha's_Latest_Resume.pdf"
            className='text-lg bg-yellow-500 text-black px-6 py-2 mt-4 rounded hover:bg-yellow-400 w-4/5 text-center'
            onClick={() => setMenu(false)}
          >
            Download CV
          </a>
        </div>
      )}
    </div>
  );
};

export default NavBar;
