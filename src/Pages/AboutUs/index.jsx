import React, { useState } from 'react';
import MyWork from '../../Components/MyWork';
import img1 from '../../assets/image/adit.png';
import img2 from '../../assets/image/syahrul.png';
import img3 from '../../assets/image/damar1.png';
import { motion } from 'framer-motion';
import Modals from '../../Components/Modals';
import OutlineButton from '../../Components/Button/OutlineButton';

const Projects = () => {
  const [succesJay, setSuccessJay] = useState(false);
  const [succesAdit, setSuccessAdit] = useState(false);
  const [succesDamar, setSuccessDamar] = useState(false);

  function handleClickJay() {
    setSuccessJay((success) => !success);
  }

  function handleCloseJay() {
    setSuccessJay((succes) => !succes);
  }
  function handleClickAdit() {
    setSuccessAdit((success) => !success);
  }

  function handleCloseAdit() {
    setSuccessAdit((succes) => !succes);
  }
  function handleClickDamar() {
    setSuccessDamar((success) => !success);
  }

  function handleCloseDamar() {
    setSuccessDamar((succes) => !succes);
  }

  return (
    <>
      {succesJay && <Modals onClick={handleCloseJay} quotes="Kamu nanti malam Free ga? Main yuk" made="~ Syahrul Jay 2023 ~" />}
      {succesAdit && <Modals onClick={handleCloseAdit} quotes="Kamu kenapa? sini cerita sama aku" made="~ Adit 2023 ~" />}
      {succesDamar && <Modals onClick={handleCloseDamar} quotes="Pacarnya mana?, Pacarku lagi Pacaran sama Pacarnya" made="~ Damar 2023 ~" />}
      <div className="h-screen">
        <div className="w-full flex bg-[#10101a] flex-wrap justify-center gap-8">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} exit={{ opacity: 0 }}>
            <MyWork number="02" h1Class="bg-gradient-to-r from-cyan-500 rounded-sm  mx-4 lg-mx-0 text-5xl relative top-5 right-6" img={img1} title="Aditya Ramadhan">
              <div className="flex flex-wrap gap-1">
                <div className="text-cyan-300 px-2 py-2 rounded-full bg-slate-800">23120021</div>
              </div>
              <button onClick={handleClickAdit} className="text-white mt-3 underline">
                See more
              </button>
            </MyWork>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} exit={{ opacity: 0 }}>
            <MyWork h1Class="bg-gradient-to-r from-purple-400  mx-4 lg-mx-0 rounded-sm text-5xl relative top-5 right-6" img={img2} title="Moch Syahrul Jaylani">
              <div className="flex flex-wrap gap-1">
                <div className="text-cyan-300 px-2 py-2 rounded-full bg-slate-800">23120078</div>
              </div>
              <button onClick={handleClickJay} className="text-white mt-3 underline">
                See more
              </button>
            </MyWork>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} exit={{ opacity: 0 }}>
            <MyWork number="01" h1Class="bg-gradient-to-r from-indigo-500 rounded-sm text-5xl mx-4 lg-mx-0 relative top-5 right-6" img={img3} title="Aditya Damar">
              <div className="flex flex-wrap gap-1">
                <div className="text-cyan-300 px-2 py-2 rounded-full bg-slate-800">23120027</div>
              </div>
              <button onClick={handleClickDamar} className="text-white mt-3 underline">
                See more
              </button>
            </MyWork>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Projects;
