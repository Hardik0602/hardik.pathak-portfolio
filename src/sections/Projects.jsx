import React from 'react'
import Project from '../components/Project'
import RevealOnScroll from '../components/RevealOnScroll'
const Projects = () => {
  return (
    <section
      className='min-h-screen flex items-center justify-center py-20'
      id='projects'>
      <RevealOnScroll>
        <div className='max-w-5xl mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-8 bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>Featured Projects</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <Project name='TaskFlow' description='A React-based web application built to streamline how managers receive, review, and act on requests. Also offering a dedicated admin panel for assigning tasks and monitoring overall stats.' techStack={['React.js', 'JavaScript', 'React Router', 'Tailwind CSS', 'JSON Server']} link='https://github.com/Hardik0602/TaskFlow' />
            <Project name='MovieMate' description='A React Native-based mobile app designed to provide comprehensive movie information, trending films, and detailed cast information' techStack={['React Native CLI', 'JavaSvript', 'Nativewind CSS', 'React Navigation', 'TMDB API']} link='https://github.com/Hardik0602/Movie-Mate' />
            <Project name='PetSphere' description='A React-based e-commerce web application built to simplify online shopping for pet parents' techStack={['React.js', 'JavaScript', 'React Router', 'Tailwind CSS', 'JSON Server']} link='https://github.com/Hardik0602/PetSphere' />
            <Project name='WeatherWise' description='A React Native-based mobile app designed to provide real-time location-based weather forecasts and 7-day predictions' techStack={['React Native CLI', 'JavaSvript', 'Nativewind CSS', 'React Native Geolocation Service', 'Weather API']} link='https://github.com/Hardik0602/Weather-Wise' />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}
export default Projects