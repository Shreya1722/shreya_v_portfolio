import React from 'react'
import Reveal from './reveal'
export default function Skills() {
  const cardStyle =
  "bg-slate-800 p-4 rounded-lg flex flex-col h-full hover:shadow-cyan-400/50 hover:shadow-lg transition-shadow duration-300";
  return (
    <div>
      <section id="skills" className="h-full flex flex-col p-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-950">
        <Reveal direction='up'>
          <h2 className="text-3xl font-semibold text-white">Tech Stack & Skills</h2>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Reveal direction='left'>
            <div className={cardStyle}>
            <h3 className="text-xl font-bold text-cyan-400">Frontend Development</h3>
                <ul className="list-disc list-inside text-slate-300 mt-2">
                    <li>React.js</li>
                    <li>Next.js</li>
                    <li>Tailwind CSS</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>Framer Motion</li>
                    <li>HTML & CSS</li>
                    <li>Responsive Design</li>
                </ul>
            </div>
          </Reveal>
          <Reveal direction='right'>
            <div className={cardStyle}>
              <h3 className="text-xl font-bold text-cyan-400">Programming Languages</h3>
                <ul className="list-disc list-inside text-slate-300 mt-2">
                  <li>Python</li>
                  <li>Java</li>
                </ul>
            </div>
          </Reveal>
          <Reveal direction='left'>
            <div className={cardStyle}>
              <h3 className="text-xl font-bold text-cyan-400">Database Management</h3>
                <ul className="list-disc list-inside text-slate-300 mt-2">
                  <li>MySQL</li>
                  <li>DBMS concepts</li>
                </ul>
            </div>
          </Reveal>
          <Reveal direction='right'>
            <div className={cardStyle}>
              <h3 className="text-xl font-bold text-cyan-400">CS Fundamentals</h3>
              <ul className="list-disc list-inside text-slate-300 mt-2">
                <li>Data Structures and Algorithms</li>
                <li>Object-Oriented Programming</li>
                <li>Problem Solving</li>
              </ul>
            </div>
          </Reveal>
          <Reveal direction='left'>
            <div className={cardStyle}>
              <h3 className="text-xl font-bold text-cyan-400">Tools & Technologies</h3>
              <ul className="list-disc list-inside text-slate-300 mt-2">
                <li>Git & GitHub</li>
                <li>VS Code</li>
                <li>Cursor AI</li>
                <li>NPM</li>
                <li>Vercel</li>
              </ul>
            </div>
          </Reveal>
          <Reveal direction='right'>
            <div className={cardStyle}>
              <h3 className="text-xl font-bold text-cyan-400">Cybersecurity</h3>
              <ul className="list-disc list-inside text-slate-300 mt-2">
                <li>Network Security</li>
                <li>Web Application Security</li>
                <li>Wireshark</li>
                <li>Burp Suite</li>
                <li>Networking Fundamentals</li>
              </ul>
            </div>
          </Reveal>
          <Reveal direction='left'>
            <div className={cardStyle}>
              <h3 className="text-xl font-bold text-cyan-400">Soft Skills</h3>
              <ul className="list-disc list-inside text-slate-300 mt-2">
                <li>Communication</li>
                <li>Teamwork</li>
                <li>Leadership</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
