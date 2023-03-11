import React from 'react'

const Navbar = () => {
  return (
    <div className='font-poppins bg-neutral-700 flex justify-left h-20 py-4 px-24 items-end text-white'>
        <h1 className='w-full font-medium text-5xl h-12'> Luke Tran </h1>
        <ul className='flex justify-between text-center text-xl font-light'>
            <li className='p-4 w-fit h-12 pt-5'>About</li>
            <li className='p-4 w-fit h-12 pt-5'>Skills</li>
            <li className='p-4 w-fit h-12 pt-5'>Projects</li>
            <li className='p-4 w-fit h-12 pt-5'>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar