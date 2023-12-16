import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

import './scroltotopbutton.css';

const ScrollToTopButton = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return <div className="top-to-btm"> {showTopBtn && <FaArrowUp className="icon-position icon-style" onClick={goToTop} />} </div>;
};
export default ScrollToTopButton;
