import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiAlignJustify } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import { BsInstagram, BsDribbble } from 'react-icons/bs';
import { AiOutlineMail, AiOutlineHome } from 'react-icons/ai';
import './header.css';
import { motion } from 'framer-motion';

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '-100%' },
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header className="w-full py-11">
        <nav className="flex w-3/4 lg:w-2/3 justify-between mx-auto text-neutral-400 navbars px-8 py-5">
          <motion.div whileHover={{ scale: 1.4 }} whileTap={{ scale: 0.8 }}>
            <Link to="/" className=" hover:text-white focus:text-white" onClick={() => setIsOpen(false)}>
              <AiOutlineHome className="text-2xl" />
            </Link>
          </motion.div>
          <div className="lg:flex gap-8 hidden">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <Link to="/aboutus" className=" hover:text-white link focus:text-white">
                About Us
              </Link>
            </motion.div>
          </div>
          <button type="button" className="lg:hidden block" onClick={toggleMenu}>
            {isOpen ? <AiOutlineClose /> : <FiAlignJustify className="" />}
          </button>
        </nav>
        <motion.nav animate={isOpen ? 'open' : 'closed'} variants={variants}>
          {isOpen && (
            <div className="mobileMenu py-8 px-5 text-center  z-10 absolute bg-[#10101a] w-full h-screen flex flex-col justify-between">
              <div className="gap-8 text-neutral-400 flex flex-col">
                <Link to="/aboutus" className=" hover:text-white link animate-slide-in" onClick={toggleMenu}>
                  About us
                </Link>
              </div>
              <div className="flex flex-col justify-end gap-32">
                <div className="flex flex-col mb-28">
                  <p className="text-neutral-400 font-bold mb-3">Kelompok pahlawan</p>
                </div>
              </div>
            </div>
          )}
        </motion.nav>
      </header>
    </div>
  );
};

export default Header;
