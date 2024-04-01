import React, {useState} from 'react';
import {motion} from "framer-motion";
import ResumeImg from '../assets/resumeImage.jpg';

export default function Resume() {

  const [showResume, setShowResume] = useState(false);
 

  return (
    <div name='resume' className='flex w-full md:h-[550px]  bg-gradient-to-b from-[#657792] via-teal-700 to-cyan-700 justify-center items-center py-4 '>
      <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>            
            <button 
            onClick={()=>
              setShowResume(true)            
            } 
            className='text-3xl text-gray-200 mx-8'
            >View My Resume</button>     
          <div className={
                !showResume ? 'md:hidden flex' : ' '
           } >
        <motion.div
            animate = {{ scale:[1,2]}}
            whileTap={{ scale: 2.0 }}                                  
            transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: 0,
        }}
        >
        <img src={ResumeImg} alt="resume" className='h-[420px]' />

        </motion.div>
       
        
      </div>
      </div>

    </div>
  )
}
