import React from 'react';
import { hot } from 'react-hot-loader/root';
import './styles/tailwind.css';
import './styles/main.css';

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-300">
      <h1 className="text-2xl font-bold">React Starter</h1>
    </div>
  );
};

export default hot(App);
