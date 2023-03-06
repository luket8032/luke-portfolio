import React from 'react'

const Navbar = () => {
  return (
    <div className='text-white font-poppins flex justify-left h-24 px-4 mx-[5%] items-center'>
        <h1 className='w-full font-medium text-5xl'> Luke Tran </h1>
        <ul className='flex justify-between text-center text-xl font-light'>
            <li className='p-4 w-44'>About Me</li>
            <li className='p-4 w-44'>Skills</li>
            <li className='p-4 w-44'>My Projects</li>
            <li className='p-4 w-44'>Contact Me</li>
        </ul>
    </div>
  )
}

export default Navbar