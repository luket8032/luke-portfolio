import React from 'react'
import realpfp from '../assets/Luke_Profile.jpg'

const about = () => {
  return (
    <div className='h-[600px] mx-[5%] p-16 bg-neutral-700 rounded-3xl shadow-xl' id='about'>
        <div className='flex'>
            <img className='w-96 h-96 rounded-full m-10' src={realpfp} alt='realpfp'></img>
            <div className='font-poppins text-white p-4' id='about text'>
              <h1 className='text-3xl h-16 text-center h-12'>About me</h1>
              <p className='text-xl mb-6'> Hi! My name is Luke. I'm currently a senior studying Computer Information Systems at the University of Houston.
              I've been developing my skills in web development through the courses I take at University. <br></br> <br></br>
              I really enjoy web development because of the satisfaction that comes from the work. It feels great to work together with others and find 
              solutions to problems to make people's lives a little bit easier. <br></br> <br></br>
              After I graduate, I plan to start a career in web development doing either front-end or back-end work. I would love to work with anyone to help me do so, please contact me! </p>
              <a href='#contact' className='font-poppins text-white bg-blue-500 rounded-md py-2 px-3  '> Contact me!</a>
            </div>
        </div>
    </div>
  )
}

export default about