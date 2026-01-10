import React from "react";
import Navbar from "../components/Navber";
import Herosection from "../components/Herosection";

function Home() {
  return (
           <>
      <div className="relative w-full h-screen bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-slate-900 to-black">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
     <div className="relative z-10">
        <Navbar />
        <Herosection />
      </div>
    </div>
    </> 
  );
}

export default Home;
