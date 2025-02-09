import React, { useState } from 'react';
import { IoMenu, IoClose } from "react-icons/io5";
import CV from "../assets/My_latest_Resume.pdf";
import { Link } from "react-scroll";

const NavBar = () => {
    const [menu, setMenu] = useState(false);
    const items = [
        { id: 1, text: "Home", to: "Home" },
        { id: 2, text: "About", to: "About" },
        { id: 3, text: "Projects", to: "Projects" },
        { id: 4, text: "Certifications", to: "Certifications" },
        { id: 5, text: "Skills", to: "Skills"},
        { id: 6, text: "Contact Us", to: "Contact" },
    ];

    return (
        <div className='bg-yellow-50 text-black w-full'>
            {/* Desktop Navigation */}
            <div className='container mx-auto p-4 hidden md:flex justify-between items-center'>
                <div className='text-3xl font-bold flex items-center gap-1'>
                    <span>Narasimha</span>
                    <span>Gonela</span>
                </div>
                <ul className='flex space-x-6 items-center list-none text-lg font-semibold'>
                    {items.map(({ id, text, to }) => (
                        <li 
                            key={id} 
                            className='hover:text-blue-900 cursor-pointer duration-200'
                        >
                            <Link to={to} smooth={true} duration={500}>{text}</Link>
                        </li>
                    ))}
                </ul>
                <a 
                    href={CV} 
                    download="My_latest_Resume.pdf" 
                    className='text-lg bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400 font-semibold'
                >
                    Download CV
                </a>
            </div>

            {/* Mobile Navigation */}
            <div className='flex w-full justify-between items-center md:hidden p-2 shadow-sm'>
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
                <div className='md:hidden bg-yellow-50 py-6 flex flex-col items-center text-black list-none shadow-sm font-semibold'>
                    {items.map(({ id, text, to }) => (
                        <li 
                            key={id} 
                            className='hover:text-blue-800 cursor-pointer duration-200 py-2'
                        >
                            <Link to={to} smooth={true} duration={500}>{text}</Link>
                        </li>
                    ))}
                    <a 
                        href={CV} 
                        download="My_latest_Resume.pdf" 
                        className='text-lg bg-yellow-500 text-black px-4 py-2 mt-3 rounded hover:bg-yellow-400'
                    >
                        Download CV
                    </a>
                </div>
            )}
        </div>
    );
};

export default NavBar;
