import React from 'react';
import AnimatedCursor from 'react-animated-cursor';

const MovingDot = () => {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      innerScale={0.8}
      outerScale={3}
      outerAlpha={0}
      hasBlendMode={true}
      innerStyle={{
        backgroundColor: '#fff',
      }}
      outerStyle={{
        border: '1px solid #fff',
      }}
    ></AnimatedCursor>
  );
};

export default MovingDot;
