import React from 'react'
import realpfp from '../assets/Luke_Profile.jpg'

const about = () => {
  return (
    <div className='h-[600px] bg-neutral-700'>
        <div className='flex justify-left'>
            <img className='w-96 h-96 rounded-full m-28' src={realpfp} alt='realpfp'></img>
            <h1 className='font-poppins text-white text-3xl h-16'>About me</h1>
        </div>
    </div>
  )
}

export default about