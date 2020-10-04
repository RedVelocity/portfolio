import React from 'react';
import { hot } from 'react-hot-loader/root';
import './styles/tailwind.css';
import './styles/main.css';

const App = () => {
  return (
    <div className="relative">
      <nav className="sticky top-0 z-50 shadow-md bg-pink-200 p-5">
        <h1 className="text-2xl font-bold">React Starter</h1>
      </nav>
      <div className="hero">
        <img
          src="https://images.unsplash.com/photo-1480506132288-68f7705954bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1993&q=80"
          alt="hero"
        />
      </div>
      <section className="canister">
        <h1 className="text-xl font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          ullam corrupti molestias veniam doloremque enim ex atque provident
          voluptas necessitatibus voluptatibus, culpa dicta repudiandae,
          corporis velit et molestiae reprehenderit recusandae.
        </h1>
      </section>
    </div>
  );
};

export default hot(App);
