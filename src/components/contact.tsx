import React from 'react'
import Reveal from './reveal'
export default function Contact() {
  return (
    <div>
      <section id="contact" className="h-screen flex flex-col items-center justify-center pt-10 sm:p-12 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-950">
        <Reveal direction='up'>
          <h2 className="text-4xl font-semibold text-white">Contact Me</h2>
        </Reveal>
        <Reveal direction='up' >
          <p className="text-slate-300 mt-4 text-lg text-center">
            Feel free to reach out to me for any inquiries, collaborations, or just to say hello! </p>
        </Reveal>
        <Reveal direction='up'>
          <p className="text-slate-300 mt-4 text-lg">
            You can contact me via email at <a href="mailto:shreya.vv.23@gmail.com" rel="noopener noreferrer" className="text-cyan-400 transition-colors duration-300 hover:text-cyan-300">shreya.vv.23@gmail.com</a>
          </p>
        </Reveal>
        <Reveal direction='up'>
          <p className="text-slate-300 mt-4 text-lg">
            Connect with me on LinkedIn at <a href="https://www.linkedin.com/in/shreya-v17/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 transition-colors duration-300 hover:text-cyan-300">linkedin.com/in/shreya-v17/</a>
          </p>
        </Reveal>
        <Reveal direction='up'>
          <p className="text-slate-300 mt-4 text-lg">
            Check out my GitHub profile at <a href="https://github.com/Shreya1722" target="_blank" rel="noopener noreferrer" className="text-cyan-400 transition-colors duration-300 hover:text-cyan-300">github.com/Shreya1722</a>
          </p>
        </Reveal>
      </section>
    </div>
  )
}
