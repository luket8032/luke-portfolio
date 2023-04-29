import React from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <div className='fixed top-0 w-screen font-poppins bg-neutral-700 flex justify-left h-20 py-4 px-24 items-end text-white'>
        <h1 className='w-full font-medium text-5xl h-12'><Link to="home" spy={true} smooth={true} offset={-100} duration={500}>Luke Tran</Link></h1>
        <ul className='flex justify-between text-center text-xl font-light'>
            <li className='p-4 w-fit h-12 pt-5 transition ease-in-out hover:scale-110 hover:-translate-y-1'><Link to="home" spy={true} smooth={true} offset={-100} duration={500}>Home</Link></li>
            <li className='p-4 w-fit h-12 pt-5 transition ease-in-out hover:scale-110 hover:-translate-y-1'><Link to="about" spy={true} smooth={true} offset={-100} duration={500}>About</Link></li>
            <li className='p-4 w-fit h-12 pt-5 transition ease-in-out hover:scale-110 hover:-translate-y-1'><Link to="skills" spy={true} smooth={true} offset={-100} duration={500}>Skills</Link></li>
            <li className='p-4 w-fit h-12 pt-5 transition ease-in-out hover:scale-110 hover:-translate-y-1'><Link to="projects" spy={true} smooth={true} offset={-100} duration={500}>Projects</Link></li>
            <li className='p-4 w-fit h-12 pt-5 transition ease-in-out hover:scale-110 hover:-translate-y-1'><Link to="contact" spy={true} smooth={true} offset={-100} duration={500}>Contact</Link></li>
        </ul>
    </div>
  )
}

export default Navbar