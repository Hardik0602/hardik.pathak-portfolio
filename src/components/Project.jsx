import React from 'react'
import { FaGithub } from 'react-icons/fa'
const Project = ({ name = '', description = '', techStack = [], link = '' }) => {
    return (
        <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
            <h3 className='text-xl font-bold mb-2 text-center'>{name}</h3>
            <p className='text-gray-400 mb-4'>{description}</p>
            <div className='flex flex-wrap items-center justify-center gap-2 mb-4'>
                {techStack.map((tech, key) => (
                    <span
                        key={key}
                        className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'>
                        {tech}
                    </span>
                ))}
            </div>
            <div>
                {link.length > 1
                    ? <a
                        href={link}
                        target='_blank'
                        className='text-blue-400 hover:text-blue-300 transition-colors mt-4 inline-flex items-center gap-2'>
                        <FaGithub />View Project
                    </a>
                    : null}
            </div>
        </div>
    )
}
export default Project