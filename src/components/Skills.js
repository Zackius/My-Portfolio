import React from 'react'
import { javascript } from '../assests'
import { html } from '../assests'
import { css } from '../assests'
import { reacts } from '../assests'
import { github } from '../assests'
import { tailwind } from '../assests'
import {ruby} from '../assests'


const Skills = () => {
  return (
      <div name="skills"  className='  text-gray-300 bg-gradient-to-r from-white via-blue-300  to-gray-300'>
          
          <div className='max-w-[1000px]  mx-auto  p-4  flex  flex-col  justify-center  w-full  h-full'>
              <div >
                  <p className='text-4xl font-bold inline border-b-4 border-blue-700 text-[#0a192f] '>Experience</p>
                  <p className='py-4 text-[#0a192f] '> This are the technologies that i've worked with </p>
              </div>
              <div className='w-full  grid  grid-cols-2  sm:grid-cols-4  gap-4  text-center  py-8'>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110  bg-[#0a192f] duration-500'>
                      <img className='w-20 mx-auto' src={html} alt='HTML icon' />
                      <p className='my-4 text-white'>HTML</p>
                  </div>
   

                  <div className='shadow-md shadow-[#040c16] hover:scale-110  bg-[#0a192f] duration-500'>
                      <img className='w-20 mx-auto' src={css} alt='CSS icon' />
                      <p className='my-4 text-white'>CSS</p>
                  </div>
           
      
                  <div className='shadow-md shadow-[#040c16] hover:scale-110  bg-[#0a192f] duration-500'>
                      <img className='w-20 mx-auto' src={tailwind} alt='TAILWIND icon' />
                      <p className='my-4 text-white'>TAILWIND CSS</p>
                  </div>
 

                  <div className='shadow-md shadow-[#040c16] hover:scale-110  bg-[#0a192f] duration-500'>
                      <img className='w-20 mx-auto' src={javascript} alt='JAVASCRIPT icon' />
                      <p className='my-4 text-white'>JAVASCRIPT</p>
                  </div>
             
                  <div className='shadow-md shadow-[#040c16] hover:scale-110  bg-[#0a192f] duration-500'>
                      <img className='w-20 mx-auto' src={reacts} alt='REACT icon' />
                      <p className='my-4 text-white'>REACT JS</p>
                  </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110  bg-[#0a192f] duration-500'>
                      <img className='w-20 mx-auto' src={github} alt='GITHUB icon' />
                      <p className='my-4 text-white'>GITHUB</p>
                  </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110  bg-[#0a192f] duration-500'>
                      <img className='w-20 mx-auto' src={ruby} alt='GITHUB icon' />
                      <p className='my-4 text-white'>RUBY ON RAILS</p>
                  </div>
              </div>
                  
          
          </div>
    </div>
  )
}

export default Skills