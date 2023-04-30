import React from 'react'
import { SiLinkedin, SiGithub } from 'react-icons/si';

const Footer = () => {
  return (
    <div className='font-poppins text-white bg-neutral-700 h-fit p-6' id='footer'>
        <p className='text-center mb-3' id='footer note'>Thanks for taking the time to visit my site! :D
        <br></br>
        - Luke Tran
        </p>
        <div className='flex justify-center gap-4'>
          <a href="https://www.linkedin.com/in/luke-tran-1220171a9/"><SiLinkedin size={25}/></a>
          <a href="https://github.com/luket8032"><SiGithub size={25}/></a>
        </div>
    </div>
  )
}

export default Footer