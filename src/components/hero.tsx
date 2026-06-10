import React from 'react'
import {Geist} from "next/font/google";
const geist = Geist();
import Reveal from "./reveal";
export default function Hero() {
  return (
    <div>
      <section id="hero" className="min-h-screen flex flex-col gap-3 items-center justify-center text-center px-6 pt-10 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-950">
        <Reveal direction='up'>
          <h2 className={`${geist.className} text-sm md:text-lg text-cyan-400 font-medium`}>
            Hi, I am
        </h2>
        <h1 className={`${geist.className} text-5xl md:text-7xl font-bold text-white`}>
            Shreya V
        </h1>
        <h2 className={`${geist.className} mt-4 text-lg md:text-4xl text-cyan-400 font-medium`}>
            Aspiring Full Stack Developer
        </h2>
        <p className={`${geist.className} mt-6 max-w-3xl text-base md:text-lg text-slate-300 font-normal`}>
            Driven by curiosity, I enjoy building projects, solving problems, and exploring new technologies.
        </p>
        </Reveal>
        </section>
    </div>
  )
}
