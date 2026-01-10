import React from 'react';

const Herosection = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <h1 className="text-5xl md:text-8xl font-black text-white mb-6 leading-tight">
        MODERN <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">INTERFACE</span>
      </h1>
      <p className="text-gray-400 max-w-xl text-lg md:text-xl">
        The background gradient and animated pulses from the Home component are 
        fully visible through this section and the floating navbar.
      </p>
      <div className="mt-10 flex gap-4">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-semibold transition">
          View Projects
        </button>
      </div>
    </section>
  );
};

export default Herosection;