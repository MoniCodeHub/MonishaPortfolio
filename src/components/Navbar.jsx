import React, {useState} from 'react';

import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaLinkedinIn
} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Logo from '../assets/logo2.png';
import { Link } from 'react-scroll';


export default function Navbar() {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);   

    
  return (
    <div className=' flex w-full h-[80px] justify-between items-center px-4 bg-gradient-to-t from-[#2c3e58] via-stone-700 text-gray-300 to-neutral-500'>
        <div>
            <img src={Logo} alt="logo" className='w-24' />
        </div>

      
         <ul className='hidden md:flex '>
            <li className='px-3 m-2 text-xl font-semibold hover:scale-110 cursor-pointer' >
                <Link to='home'  smooth={true} duration={500}>
                Home
                </Link>
            </li>
            <li className='px-3 m-2 text-xl font-semibold hover:scale-110 cursor-pointer'>
                <Link to='about'  smooth={true} duration={600}>
                About
                </Link>
            </li>
            <li className='px-3 m-2 text-xl font-semibold hover:scale-110 cursor-pointer'>
                <Link to='skills'  smooth={true} duration={500}>
                Skills
                </Link>
            </li>
            <li className='px-3 m-2 text-xl font-semibold hover:scale-110 cursor-pointer'>
                <Link to='work' smooth={true} duration={500}>
                Projects
                </Link>
            </li>
            <li className='px-3 m-2 text-xl font-semibold hover:scale-110  cursor-pointer'>
                <Link to='contact' smooth={true} duration={500}>
                    Contact
                </Link>
            </li>
            <li className='px-3 m-2 text-xl font-semibold hover:scale-110  cursor-pointer'>
                <Link to='resume' smooth={true} duration={500} >
                    Resume
                </Link>
            </li>
         </ul>

         <div onclick={handleClick} className="md:hidden z-10">
            {!nav ? <FaBars /> : <FaTimes />}

         </div>

         <ul className={
            !nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#2c3e58] flex flex-col justify-center items-center '
         }>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                Home
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                {' '}
                <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                About
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                {' '}
                <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                Skills
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                {' '}
                <Link onClick={handleClick} to='work' smooth={true} duration={500}>
                Projects
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                {' '}
                <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                Contact
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                {' '}
                <Link onClick={handleClick} to='resume' smooth={true} duration={500}>
                Resume
                </Link>
            </li>
         </ul>

         {/* Social Icons Menu */}
         <div className='hidden lg:flex fixed flex-col top-[45%] left-3'>
        <ul>
          <li className='w-[160px] h-[60px] flex rounded-lg justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='http://linkedin.com/in/monisha-baskara-rao'
              target="_blank"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex rounded-lg justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/MoniCodeHub'
              target="_blank"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex rounded-lg justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='http://www.gmail.com'
              target="_blank"

            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex rounded-lg justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>

                <a
                  className='flex justify-between items-center w-full text-gray-300'
                  href='/'
                >
                  Resume <BsFillPersonLinesFill size={30} />
                </a>

          </li>
        </ul>
      </div>
    </div>
  )
}
    

