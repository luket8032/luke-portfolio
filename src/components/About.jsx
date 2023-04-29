import React from 'react'
import realpfp from '../assets/Luke_Profile.jpg'
import { Link } from 'react-scroll'

const about = () => {
  return (
    <div className='h-fit mx-[5%] p-16 bg-neutral-700 rounded-3xl shadow-xl' id='about'>
        <div className='flex'>
            <img className='w-96 h-96 rounded-full m-10' src={realpfp} alt='realpfp'></img>
            <div className='font-poppins text-white p-4' id='about text'>
              <h1 className='text-3xl h-16 text-center h-12'>About me</h1>
              <p className='text-xl mb-6'> Hi! My name is Luke. I'm currently a senior studying Computer Information Systems at the University of Houston.
              I've been developing my skills in web development through the courses I take at University. <br></br> <br></br>
              I really enjoy web development because of the satisfaction that comes from the work. It feels great to work together with others and find 
              solutions to problems to make people's lives a little bit easier. <br></br> <br></br>
              After I graduate, I plan to start a career in web development doing either front-end or back-end work. I would love to work with anyone to help me do so, please contact me! </p>
              <button className='my-4 h-10 w-36 bg-blue-500 hover:bg-blue-700 rounded-md'><Link to="contact" spy={true} smooth={true} offset={-100} duration={500}>Contact me!</Link></button>
            </div>
        </div>
    </div>
  )
}

export default about