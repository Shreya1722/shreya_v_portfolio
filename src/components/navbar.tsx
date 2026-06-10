import React from 'react'
export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 bg-slate-900/70 text-white fixed top-0 z-10 backdrop-blur-md transition-all duration-300">
      <div className="font-bold text-xl text-white">
        My Portfolio
      </div>
      <div className="flex space-x-6 text-sm">
        <a href="#hero" className="text-slate-300 hover:text-cyan-400">Home</a>
        <a href="#about" className="text-slate-300 hover:text-cyan-400">About</a>
        <a href="#skills" className="text-slate-300 hover:text-cyan-400">Skills</a>
        <a href="#contact" className="text-slate-300 hover:text-cyan-400">Contact</a>
      </div>
    </nav>
  );
}
