import React from 'react';
import {Link} from 'react-scroll';
import Image from '../assets/portfolio1.png'
import { HiArrowNarrowRight } from 'react-icons/hi';


export default function Home() {
  return (
    <div name='home' className=' flex w-full h-[550px] bg-gradient-to-t from-slate-500 to-[#212f42]'>
      {/* Container */}
      <div className='flex-1/2'>
        <img src={Image} alt="image" className='w-[225px]  ml-14 rounded-full' />

      </div>
      <div className=' flex-1/2 md:max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi there! , my name is</p>
        <h1 className='text-4xl sm:text-6xl font-bold text-[#a5a1dc]'>
          Monisha Baskara Rao
        </h1>
        <h2 className='text-3xl sm:text-4xl font-semibold text-[#8892b0]'>
          I'm a Software Engineer.
        </h2>
        <p className='text-[#a6aab4] py-4 max-w-[700px]'>
           Full-stack developer, passionate about building pixel-perfect web & software applications! Tour my website! 
        </p>
        <div>
          <Link to='work' smooth={true} duration={500}>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-400 hover:border-pink-400'>
            View Projects
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
          </Link>
          
        </div>
      </div>
      
    </div>
  );
}
