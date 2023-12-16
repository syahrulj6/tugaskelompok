import React from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

const TypeWritter = () => {
  return (
    <>
      <motion.div className="flex justify-center text-white h-screen items-center" initial={{ opacity: 0, x: 0 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString('Kelompok Pahlawan').pauseFor(300).deleteAll().typeString('Pacarmu kok gitu, sini sama aku aja!').pauseFor(400).deleteAll().start();
          }}
        />
      </motion.div>
    </>
  );
};

export default TypeWritter;
