import React from 'react';
import './modals.css';
import { AiOutlineClose } from 'react-icons/ai';
import { motion } from 'framer-motion';

const Modals = (props) => {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 modals">
        <div className="relative w-auto my-6 mx-auto max-w-sm">
          {/*content*/}
          <div className=" rounded-lg relative flex flex-col w-full ">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <div className="text-3xl gap-4 flex justify-between font-semibold text-white">
                <p className="text-center">{props.quotes}</p>
              </div>
              <button className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={() => setShowModal(false)}>
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
              </button>
            </div>
            {/*body*/}
            {/*footer*/}
            <div className="flex items-center  justify-between p-6 border-t border-solid border-slate-200 rounded-b">
              <motion.button whileHover={{ scale: 2 }} whileTap={{ scale: 0.8 }} className="text-white text-lg" onClick={props.onClick}>
                <AiOutlineClose />
              </motion.button>
              <p className="text-white italic">{props.made}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Modals;
