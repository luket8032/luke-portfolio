import React from 'react'
import pfp from '../assets/memoji_pfp.png'

const Hero = () => {
  return (
    <div className='flex p-16 m-10 items-center h-[600px]' id="Home">
        <div className='font-poppins justify-left text-white w-full ml-[5%]' id='homeText'>
            <h1 className='text-xl p-1'>Hi, my name is</h1>
            <h1 className='text-6xl p-1'>Luke Tran</h1>
            <h1 className='text-3xl p-1'>Web Developer</h1>
            <p className='text-sm mt-10'>I'm a student in University looking to start a career in web development.</p>
            <button className='my-4 h-10 w-36 bg-blue-500 rounded-md'>Resumé</button>
        </div> 
        <img class='float-right mr-[5%] h-[500px] w-[500px]' src={pfp} alt='profile pic'></img>
    </div>
  )
}

export default Hero