import React from 'react'
import Cat from '../assets/cathub.PNG'
import Portfolio from '../assets/portfolio.PNG'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { SiGithub } from 'react-icons/si';
import { CgWebsite } from 'react-icons/cg';

const Projects = () => {
  return (
    <AnimationOnScroll animateIn='animate__fadeInUp'> 
        <div className='font-poppins text-white h-fit mx-[5%] p-16 bg-neutral-700 rounded-3xl shadow-xl' id='projects'>
            <h1 className='text-5xl text-center'>My Projects</h1>
            <div className='flex group justify-center gap-36 my-10' id='project cards'>

                <div className='h-fit w-72 bg-neutral-600 rounded-2xl shadow-xl p-4 flex-col'>
                    <img src={Cat} alt="catimg"  className='rounded-md'/>
                    <h1 className='text-2xl p-4 text-center leading-3 font-semibold'>CatHub</h1>
                    <p className='text-center'>CatHub is a React-based website that leverages The Cat API, allowing users to explore cat breeds, access detailed descriptions, and find additional information about their selected breed.</p>
                    <div id='project-btns' className='flex justify-center gap-5'>
                        <a href="https://cat-app-luket8032.vercel.app/" className='my-4 h-fit w-20 p-2 flex justify-center bg-blue-500 hover:bg-blue-700 rounded-md transition ease-in-out hover:scale-110 hover:-translate-y-1' ><CgWebsite size={25}/></a>
                        <a href="https://github.com/luket8032/cat-app" className='my-4 h-fit w-20 p-2 flex justify-center bg-blue-500 hover:bg-blue-700 rounded-md transition ease-in-out hover:scale-110 hover:-translate-y-1' ><SiGithub size={25}/></a>
                    </div>
                </div>

                <div className='h-fit w-72 bg-neutral-600 rounded-2xl shadow-xl p-4'>
                    <img src={Portfolio} alt="portfolio"  className='rounded-md border-2'/>
                    <h1 className='text-2xl p-4 text-center font-semibold leading-3'>Portfolio Website</h1>
                    <p className='text-center'>My portfolio website highlights my front-end development skills and user-centric approach. I create visually appealing designs and responsive layouts using HTML and Tailwind CSS</p>
                    <div id='project-btns' className='flex justify-center gap-5'>
                        <a href="https://luke-portfolio.vercel.app/" className='my-4 h-fit w-20 p-2 flex justify-center bg-blue-500 hover:bg-blue-700 rounded-md transition ease-in-out hover:scale-110 hover:-translate-y-1' ><CgWebsite size={25}/></a>
                        <a href="https://github.com/luket8032/luke-portfolio" className='my-4 h-fit w-20 p-2 flex justify-center bg-blue-500 hover:bg-blue-700 rounded-md transition ease-in-out hover:scale-110 hover:-translate-y-1' ><SiGithub size={25}/></a>
                    </div>
                </div>
                
            </div>
        </div>
    </AnimationOnScroll>
  )
}

export default Projects