import React from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

const TypeWritter = () => {
  return (
    <>
      <motion.div className="flex justify-center text-white h-screen items-center" initial={{ opacity: 0, x: 0 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString('Teknik informatika').pauseFor(300).deleteAll().typeString('Universitas Wijaya Kusuma').pauseFor(400).start();
          }}
        />
      </motion.div>
    </>
  );
};

export default TypeWritter;
