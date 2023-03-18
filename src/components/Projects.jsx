import React from 'react'

const Projects = () => {
  return (
    <div className='font-poppins text-white h-[600px] mx-[5%] p-16 bg-neutral-700 rounded-3xl shadow-xl' id='projects'>
        <h1 className='text-5xl text-center'>My Projects</h1>
        <div className='flex group justify-center gap-36 my-10' id='project cards'>
            <div className='h-96 w-72 bg-neutral-600 rounded-2xl shadow-xl'>
                <h1 className='text-2xl p-4 text-center'>PokeMart</h1>
            </div>
            <div className='h-96 w-72 bg-neutral-600 rounded-2xl shadow-xl'>
                <h1 className='text-2xl p-4 text-center'>Weather App</h1>
            </div>
            <div className='h-96 w-72 bg-neutral-600 rounded-2xl shadow-xl'>
                <h1 className='text-2xl p-4 text-center'>Lennin Repizo</h1>
            </div>
        </div>
    </div>
  )
}

export default Projects