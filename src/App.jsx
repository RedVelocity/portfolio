import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import './styles/tailwind.css';
import './styles/main.css';

const App = () => {
  const [state, setState] = useState({ xAxis: 0, yAxis: 0 });
  const handleMouseMove = (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / -20;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 20;
    setState({ xAxis, yAxis });
  };
  console.log('rendered');
  return (
    <div
      className="relative min-h-screen flex items-center justify-center"
      // onMouseMove={handleMouseMove}
    >
      <div
        className="p-10 absolute left-0 bottom-0"
        style={{
          transform: `rotateY(${state.xAxis}deg) rotateX(${state.yAxis}deg)`,
          transition: 'transform 0.3s ease',
        }}
      >
        <h1 className="font-bold text-6xl">
          HI IM SHNK, <br /> I MAKE WEBSITES
        </h1>
      </div>
    </div>
  );
};

export default hot(App);
