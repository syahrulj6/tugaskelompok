import React from 'react';
import { motion } from 'framer-motion';
import OutlineButton from '../../Components/Button/OutlineButton';
import MovingDot from '../../Components/MovingDot';

import logo from '../../assets/image/logowk.png';

import itcamp2 from '../../assets/image/itcamp2.jpg';
import itcamp3 from '../../assets/image/itcamp3.jpg';
import itcamp4 from '../../assets/image/itcamp4.jpg';
import ldkm1 from '../../assets/image/ldkm1.jpg';
import ldkm2 from '../../assets/image/ldkm2.jpg';
import ldkm3 from '../../assets/image/ldkm3.jpg';
import ldkm4 from '../../assets/image/ldkm4.jpg';

const Home = () => {
  return (
    <>
      <MovingDot />
      <div className="flex flex-col mx-5 gap-8 lg:mx-60 mt-7">
        <motion.div initial={{ opacity: 0, x: -1000 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
          <h1 className="text-white text-5xl lg:text-7xl font-bold">
            {' '}
            <span className="grad-text lg:flex items-center justify-normal lg:justify-between ">
              Informatika UWKS <img src={logo} alt="logo-uwks" className="w-14 h-14 mt-3 lg:mt-0 " />
            </span>
          </h1>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: -1000 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ duration: 2 }}>
          <div className="text-neutral-400 leading-relaxed">
            Informatika adalah ilmu yang mempelajari tentang penggunaan komputer untuk mengatur dan menganalisis data yang berukuran besar, baik data maupun informasi pada mesin berbasis komputasi. Informatika juga mencakup studi,
            perancangan, dan pembuatan sistem komputasi dasar yang dapat memproses dan menyajikan informasi secara <span className="text-white">efektif</span> dan <span className="text-white"> efisien.</span>
          </div>
          <h1 className="text-white text-lg lg:text-xl font-bold mt-5">Beberapa kegiatan TIF di UWKS</h1>
          <h2 className="text-white lg:text-lg font-semibold"> - It Camp</h2>
          <div className="carousel w-full mt-3">
            <div id="slide1itcamp" className="carousel-item relative w-full flex justify-center">
              <img src={itcamp2} className="w-full lg:w-3/4 object-contain h-56 lg:h-auto " />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
                <a href="#slide4itcamp" className="btn btn-accent btn-circle">
                  ❮
                </a>
                <a href="#slide2itcamp" className="btn btn-accent btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2itcamp" className="carousel-item relative w-full flex justify-center">
              <img src={itcamp3} className="w-full lg:w-3/4 object-contain h-56 lg:h-auto" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2itcamp" className="btn btn-accent btn-circle">
                  ❮
                </a>
                <a href="#slide3itcamp" className="btn btn-accent btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3itcamp" className="carousel-item relative w-full flex justify-center">
              <img src={itcamp4} className="w-full lg:w-3/4 object-contain h-56 lg:h-auto" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2itcamp" className="btn btn-accent btn-circle">
                  ❮
                </a>
                <a href="#slide1itcamp" className="btn btn-accent btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
          <div className="text-neutral-400 leading-relaxed">
            <p>
              di kegiatan ini kita diajarkan beberapa materi seperti manajemen waktu, prospek pekerjaan di informatika, dan juga dijelaskan tentang keorganisasian yang ada di teknik informatika. selain itu kita juga memainkan beberapa fun
              games.
            </p>

            <h2 className="text-white lg:text-lg font-semibold mt-5"> - LDKMM</h2>
            <div className="carousel w-full mt-3">
              <div id="slide1ldkm" className="carousel-item relative w-full flex justify-center">
                <img src={ldkm1} className=" w-full lg:w-3/4 object-contain h-56 lg:h-auto" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
                  <a href="#slide4ldkm" className="btn btn-accent btn-circle">
                    ❮
                  </a>
                  <a href="#slide2ldkm" className="btn btn-accent btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide2ldkm" className="carousel-item relative w-full flex justify-center">
                <img src={ldkm2} className="w-full lg:w-3/4 object-contain h-56 lg:h-auto" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1ldkm" className="btn btn-accent btn-circle">
                    ❮
                  </a>
                  <a href="#slide3ldkm" className="btn btn-accent btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide3ldkm" className="carousel-item relative w-full flex justify-center">
                <img src={ldkm3} className="w-full lg:w-3/4 object-contain h-56 lg:h-auto" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2ldkm" className="btn btn-accent btn-circle">
                    ❮
                  </a>
                  <a href="#slide4ldkm" className="btn btn-accent btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide4ldkm" className="carousel-item relative w-full flex justify-center">
                <img src={ldkm4} className="w-full lg:w-3/4 object-contain h-56 lg:h-auto" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide3ldkm" className="btn btn-accent btn-circle">
                    ❮
                  </a>
                  <a href="#slide1ldkm" className="btn btn-accent btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            </div>
            <div className="text-neutral-400 leading-relaxed">
              <p>
                LDKMM merupakan suatu kegiatan orientasi bagi mahasiswa baru untuk meningkatkan kemampuan dalam menerapkan dasar-dasar <span className="text-white">kepemimpinan</span> serta mempersiapkan mahasiswa/i untuk turut aktif
                bergabung dalam organisasi kemahasiswaan.
              </p>
              <p className="mt-2">
                di kegiatan ini kita diajarkan beberapa materi seperti manajemen waktu, kepemimpinan, public speaking, dan juga dijelaskan tentang keorganisasian yang ada di fakultas teknik. selain itu kita juga memainkan beberapa fun
                games.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: -1000 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ duration: 2.4 }}>
          <div className="mb-12">
            <OutlineButton text="biodata kelompok kita" to="/aboutus" />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Home;
