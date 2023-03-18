import React from 'react'


const Skills = () => {
  return (
    <div className='font-poppins text-white h-[600px]' id='skills'>
        <h1 className='text-5xl text-center my-[5%]'> My Skills </h1>
        <div className='grid grid-rows-2 grid-cols-3 mx-[10%] gap-16 justify-items-center p-8' id='skills grid'>
            <div className='bg-neutral-700'>JavaScript</div>
            <div>Python</div>
            <div>React</div>
            <div>VueJS</div>
            <div>SQL</div>
            <div>Tailwind</div>
        </div>
    </div>
  )
}

export default Skills