import React from 'react';
import Image from "next/image";
import image from "@/../public/img.jpg";
import Reveal from "./reveal";
export default function About() {
  return (
    <div>
      <section id="about" className="h-full flex flex-col md:flex-row md:h-screen sm:items-center sm:justify-center gap-10 md:pl-40 p-20 md:pt-32 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-950">
        <Reveal direction='left'>
          <div className="flex-shrink-0">
            <Image src={image} alt="Profile" className="w-40 md:w-56 lg:w-72 h-auto rounded-lg object-cover mr-8 hover:scale-105 transition-transform duration-300" />
          </div>
        </Reveal>
        <div className="max-w-3xl">
          <Reveal direction='right'>
            <h2 className="text-5xl font-semibold text-white">About Me</h2>
          </Reveal>
          <Reveal direction='up'>
          <p className="text-slate-300 mt-4 text-lg">
            I am a BCA student and aspiring Full Stack Developer with a strong interest in cybersecurity and modern web technologies. I enjoy building secure, scalable, and user-focused applications while continuously expanding my knowledge through projects, hackathons, and hands-on learning. 
            My experience spans frontend and backend development, databases, and cybersecurity fundamentals, and I am passionate about solving real-world problems through technology. 
            Beyond academics, my background in Karate, Silambam, and Kalari has helped me develop discipline, adaptability, and leadership skills that I bring into every project I work on.         
          </p>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
