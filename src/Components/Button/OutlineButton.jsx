import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';
import './outlinebutton.css';

const OutlineButton = (props) => {
  return (
    <div>
      <Link to={props.to}>
        <div className="text-first flex items-center gap-2 w-auto text-neutral-400 hover:underline hover:text-white">
          {props.text}
          <motion.div className="text-white mb-1" transition={{ repeat: Infinity, duration: 1 }} initial={{ opacity: 1, x: 0 }} animate={{ opacity: 1, x: 20 }}>
            <BsArrowRight id="arrowBtn" className="mt-1 text-2xl" />
          </motion.div>
        </div>
      </Link>
    </div>
  );
};

export default OutlineButton;
