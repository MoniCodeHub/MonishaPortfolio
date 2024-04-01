import React from 'react'


export default function About() {
  return (
    <div name='about' className='w-full h-[550px] bg-gradient-to-b from-slate-500 to-[#212f42] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-800'>
              About Me!
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>I appreciate your curiosity in knowing me! </p>
            </div>
            <div>
              <p className='text-xl text-violet-200 font-serif'>Dynamic and proactive, I am more than a coder. I’m a tech enthusiast 
          exploring the uncharted territories of innovation. Embracing change as a constant, 
          I’m committed to staying on the cutting edge, ready to dive into emerging technologies that shape our digital future!
          <br />
          A strong believer of <strong className='hover:text-purple-500 cursor-pointer'>
            <a href="https://www.japan.go.jp/kizuna/2022/03/ikigai_japanese_secret_to_a_joyful_life.html"
              target="_blank">Ikkigai</a></strong> 
          (a reason for being)! I always love to do what makes me happy while it's also impactful to the society! 
          </p>  
            </div>
          </div>
      </div>
    </div>
  )
}
