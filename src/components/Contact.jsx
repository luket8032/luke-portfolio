import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div className='font-poppins text-white h-fit m-[10%]' id='contact'>
        <h1 className='text-5xl text-center'>Contact Me!</h1>
        <div className='font-poppins text-white m-auto w-[40%] items-center' id='contact form'>
          <form className='place-content-center p-4'>
            <div className='py-2'>
              <label for='name'className='text-xl my-2'>Name: </label>
              <input id='name' className='rounded-md w-full text-black p-2 shadow-lg' placeholder='Your name'></input>
            </div>
            <div className='py-2'>
              <label for='email'className='text-xl my-2'>Email: </label>
              <input id='email' className='rounded-md w-full text-black p-2 shadow-lg' placeholder='name@example.com'></input>
            </div>
            <div className='py-2'>
              <label for='message'className='text-xl my-2'>Message: </label>
              <textarea id='message' rows={8} className='rounded-md w-full text-black p-2 shadow-lg' placeholder='Leave a message...'></textarea>
            </div>
            <button type='submit' className='my-4 h-10 w-36 bg-blue-500 rounded-md'>Send Message</button>
          </form>
        </div>
    </div>
  )
}

export default Contact