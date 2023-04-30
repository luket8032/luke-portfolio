import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './contact.css'
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Contact = () => {
const form = useRef();

const formError = () => toast("Something went wrong bro.")

const formSuccess = () => toast("Email sent homie!")

const sendEmail = (e) => {
  e.preventDefault();
  emailjs.sendForm('service_zcen04b', 'template_w3farno', form.current, 'RnVT1zlkdz8VevDyP')
  .then((result) => {
    console.log(result.text);
    console.log("message sent successfully")
    formSuccess();
    e.target.reset();
  }, (error) => {
    console.log(error.text);
    console.log("something went wrong")
    formError();
  });
};
  return (
    <AnimationOnScroll animateIn='animate__fadeInLeft'>
      <div className='font-poppins text-white h-fit m-[10%]' id='contact'>
        <h1 className='text-5xl text-center'>Contact Me!</h1>
        <div className='font-poppins text-white m-auto w-[40%] items-center' id='contact form'>
          <form className='place-content-center p-4' ref={form} onSubmit={sendEmail}>            
            <label className='text-xl my-2'>Name: </label>
            <input name='user_name' id='user_name' className='rounded-md w-full text-black p-2 shadow-lg' placeholder='Your name'></input>          
            <label className='text-xl my-2'>Email: </label>
            <input name='user_email' id='user_email' className='rounded-md w-full text-black p-2 shadow-lg' placeholder='name@example.com'></input>            
            <label className='text-xl my-2'>Message: </label>
            <textarea name='message' id='message' rows={8} className='rounded-md w-full text-black p-2 shadow-lg' placeholder='Leave a message...'></textarea>
            <button type='submit' value='Send' className='my-4 h-10 w-36 bg-blue-500 hover:bg-blue-700 rounded-md'>Send Message</button>
            <ToastContainer/>
          </form>
        </div>
      </div>  
    </AnimationOnScroll>
  )
}

export default Contact