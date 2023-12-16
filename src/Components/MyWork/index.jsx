import React from 'react';
import './projects.css';

import MovingDot from '../MovingDot/';
import { Link } from 'react-router-dom';

const MyWork = (props) => {
  return (
    <>
      <MovingDot />
      <div className="w-96 flex items-center flex-col justify-between project-card lg:h-full h-full  px-5 py-10">
        <img src={props.img} alt="" className="object-cover rounded-md h-72 lg:h-72" />
        <div className="flex justify-between gap-8 w-full items-center">
          <div className="my-2">
            <p className="grad-text font-bold ">{props.title}</p>
            <div className="flex flex-wrap my-2 gap-1 text-xs">
              <div className="">{props.children}</div>
            </div>
          </div>
        </div>
      </div>

      {/* <h1 className={props.h1Class}>{props.number}</h1> */}
    </>
  );
};

export default MyWork;
