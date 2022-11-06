import React from 'react';
import './style.css';

const Ladybug = ({ position }) => {
  return (
    <div 
      className={`ladybug ladybug--${position.orientation}`} 
      style={{
        top: `${position.posX}px`,
        left: `${position.posY}px`,
      }}
    />
  );
};

export default Ladybug;