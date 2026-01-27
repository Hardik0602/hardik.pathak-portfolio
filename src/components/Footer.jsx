import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
const Footer = () => {
    return (
        <footer className='w-full border-t border-white/10 bg-[rgba(10,10,10,0.8)]'>
            <div className='max-w-5xl mx-auto py-8'>
                <div className='flex justify-evenly text-2xl text-white'>
                    <a
                        href='https://github.com/Hardik0602'
                        target='_blank'
                        className='hover:text-blue-400 transition-colors hover:-translate-y-1'>
                        <FaGithub />
                    </a>
                    <a
                        href='https://www.linkedin.com/in/pathak-hardik'
                        target='_blank'
                        className='hover:text-blue-400 transition-colors hover:-translate-y-1'>
                        <FaLinkedin />
                    </a>
                    <a
                        href='https://leetcode.com/u/Hardik_Pathak_/'
                        target='_blank'
                        className='hover:text-blue-400 transition-colors hover:-translate-y-1'>
                        <SiLeetcode />
                    </a>
                </div>
            </div>
        </footer>
    )
}
export default Footer