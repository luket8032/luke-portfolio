import React from 'react'
import { SiJavascript, SiPython, SiReact, SiVuedotjs, SiTailwindcss } from 'react-icons/si';
import { BsFiletypeSql } from 'react-icons/bs'; 

const Skills = () => {
  return (
    <div className='font-poppins text-white h-fit my-[10%]' id='skills'>
        <h1 className='text-5xl text-center my-[5%]'> My Skills </h1>
        <div className='grid grid-rows-2 grid-cols-3 mx-[10%] gap-16 justify-items-center p-8 text-lg' id='skills grid'>
            <div className='bg-neutral-700 text-center p-8 rounded-xl shadow-lg'><SiJavascript size={140} className='mb-6'/> JavaScript</div>
            <div className='bg-neutral-700 text-center p-8 rounded-xl shadow-lg'><SiPython size={140} className='mb-6'/>Python</div>
            <div className='bg-neutral-700 text-center p-8 rounded-xl shadow-lg'><SiReact size={140} className='mb-6'/>React</div>
            <div className='bg-neutral-700 text-center p-8 rounded-xl shadow-lg'><SiVuedotjs size={140} className='mb-6'/>VueJS</div>
            <div className='bg-neutral-700 text-center p-8 rounded-xl shadow-lg'><BsFiletypeSql size={140} className='mb-6'/>SQL</div>
            <div className='bg-neutral-700 text-center p-8 rounded-xl shadow-lg'><SiTailwindcss size={140} className='mb-6'/>Tailwind</div>
        </div>
    </div>
  )
}

export default Skills