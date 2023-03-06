import React from 'react'
import pfp from '../assets/Luke_Profile.jpg'

const Hero = () => {
  return (
    <div className='flex p-16 bg-neutral-6  00' id="Hero">
        <img className='ml-28 rounded-3xl max-w-xl' src={pfp} alt='pfp' id="hero img"></img>
        <div className='text-white font-poppins px-16 py-24 w-fit mr-[10%] my-auto' id="hero text">
            <h1 className='text-6xl'>Hello, my name is Luke.</h1>
            <p className='text-md pt-8'>
                I am currently a senior and aspiring web developer at the University of Houston pursuing a bachelors degree in Computer Information Systems.
                My graduation date is going to be on May 11th, 2023. I have been developing my skills in web development through courses I have taken at University as well as working on my own personal projects. 
                After I graduate I hope to start a career in web development doing either front-end or back-end work.
            </p>
            <p className='text-md pt-5'>
                What makes me passionate about web development is the satisfaction that comes from working with other to find solutions to challenging problems.
                It feels really good to develop something that can be useful to others and make their lives a little easier. I also enjoy the creative aspect of web development.
                I believe that designing things such as user interfaces or websites can be considered an art form such as painting, writing, sculpting etc.
            </p>
            <p className='text-md py-5'>
                I am still currently looking for an oppurtunity to start a career in web development. I would love work with the right company to expand my web development skills 
                and help make others lives a little bit easier. Please contact me!
            </p>
            <div className='flex justify-center h-fit'>
                <button className='my-4 mx-4 h-12 w-36 bg-blue-500 rounded-md'>Contact Me</button>
                <button className='my-4 mx-4 h-12 w-36 bg-blue-500 rounded-md'>Resumé</button>
            </div>
        </div>
    </div>
  )
}

export default Hero