import React from 'react'
import Education from '../components/Education'
import Work from '../components/Work'
import RevealOnScroll from '../components/RevealOnScroll'
const About = () => {
  const languages = ['Java', 'HTML', 'CSS', 'JavaScript', 'MySQL']
  const frameworks = ['React.js', 'React Native', 'Tailwind CSS']
  return (
    <section
      id='about'
      className='min-h-screen flex items-center justify-center py-20'>
      <RevealOnScroll>
        <div className='max-w-3xl mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-8 bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>About Me</h2>
          <div className='rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all'>
            <p className='text-gray-300 mb-6 text-center'>
              Passionate developer with expertise in building scalable web
              and mobile applications, and creating innovative solutions.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='p-6 rounded-xl hover:-translate-y-1 transition-all'>
                <h3 className='text-xl font-bold mb-4 text-center'>Languages</h3>
                <div className='flex flex-wrap gap-2 items-center justify-center'>
                  {languages.map((tech, key) => (
                    <span
                      key={key}
                      className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className='p-6 rounded-xl hover:-translate-y-1 transition-all'>
                <h3 className='text-xl font-bold mb-4 text-center'>Frameworks</h3>
                <div className='flex flex-wrap gap-2 items-center justify-center'>
                  {frameworks.map((tech, key) => (
                    <span
                      key={key}
                      className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
            <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all'>
              <h3 className='text-xl font-bold mb-4 text-center'>Education</h3>
              <div className='space-y-8 text-gray-300'>
                <Education degree='B.Tech in Computer Science - Manav Rachna University (2022-2026)' coursework='Relevant Coursework: Data Structures, Software Engineering, Database Management' />
              </div>
            </div>
            <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all'>
              <h3 className='text-xl font-bold mb-4 text-center'>Work Experience</h3>
              <div className='space-y-4 text-gray-300'>
                <Work title='Intern at Centre for Health Innovations, MRIIRS (June 2025 - July 2025)' description='Contributed to the development of DawaSathi, a React Native based mobile app designed to assist elderly users in managing daily medications.' />
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}
export default About