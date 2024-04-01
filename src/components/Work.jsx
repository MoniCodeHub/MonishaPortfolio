import React from 'react';
import { data } from "../data/data.js";
import {motion} from "framer-motion";

export default function Work() {
    const projects = data;

  return (
    <div name='work' className='w-full md:h-[550px] text-gray-300 bg-gradient-to-b from-slate-500 to-[#212f42]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            

        {/* container for projects */}

                <div className='pb-8 text-center'>
                    <h1 className='text-4xl  font-bold inline border-b-4 border-pink-600'>My Projects</h1>
                
                    <div className="flex justify-center mt-10 p-8">
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                            {
                            projects.map((project) => (
                        
                                <div key={project.id} className="bg-gradient-to-t from-slate-600 to-neutral-200 shadow-md rounded-lg p-4 hover:scale-110 duration-500">
                                <motion.div
                                    animate = {{ scale: [1, 2, 2, 1, 1],
                                    rotate: [0, 0, 180, 180, 0],
                                    borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                                    }}
                                    whileTap={{ scale: 1.0 }}                                  
                                        transition={{
                                        duration: 2,
                                        ease: "easeInOut",                            
                                        repeat: 0,
                                    }}
                                >
                                <img src={project.image} alt={project.title} className=' h-[225px] rounded-xl' />
                                <h2 className='text-xl text-slate-700 font-semibold mt-2 py-3 mb-2'>{project.title}</h2>
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <button 
                                    className="text-center rounded-lg px-3 py-3 m-2
                                    bg-blue-800 text-gray-300 font-bold text-lg"
                                    >View Source</button>
                                </a>
                                <p className='text-slate-800 px-1'>{project.description}</p>
                                </motion.div>
                                </div>           

                            ))
                            }              
                        </div>
                    </div> 
                    <h2 className='font-semibold text-pink-600'>More projects to be added..!</h2> 
                </div>
        </div>
    </div>

  )
}
