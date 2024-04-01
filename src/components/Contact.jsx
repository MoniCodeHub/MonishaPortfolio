import React from 'react'

export default function Contact() {
  return (
    <div name='contact' className='flex pt-24 justify-center items-center md:h-screen bg-gradient-to-t from-slate-500 to-[#212f42]  '>
        <form method='POST' action="https://getform.io/f/pbnvqknb" className='flex flex-col max-w-[600px] w-full'>
            <div className='text-center rounded-full shadow-md shadow-[#848a91] hover:scale-110 duration-500'>
              <h2 className='text-xl text-gray-300 font-semibold'>Ready to Hire?</h2>
            </div>
            <div className=' py-4 pb-8 text-center'>
                <p className='text-4xl  font-bold inline border-b-4 border-pink-800 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or send me an - 
                <a href="https://www.gmail.com" target='_blank'
                classname='text-white-800'>Email</a></p>
            </div>
            <div className='flex flex-col mx-20'>
            <input className=' p-3 rounded-lg bg-[#e5e7f5]' type="text" placeholder='Name....' name='name' />
            <input className='my-3 p-3 bg-[#e5e7f5] rounded-md' type="email" placeholder='Email....' name='email' />            
            <textarea className='bg-[#e5e7f5] p-2 rounded-lg' name="message" rows="10" placeholder='Message'></textarea>              
            </div>            
            
            <button className='text-white border-2 hover:border-fuchsia-600  px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
            <span className='text-center text-gray-300'>click Here</span>
        </form>
    </div>
  )
}
