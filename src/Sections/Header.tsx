'use client'

import { Button } from '@/Components/ui/button'
import Image from 'next/image'
import React from 'react'
import img from  '/public/textImage.png'

const Header = () => {
  return (
      <div className='flex justify-center items-center flex-col max-w-4xl mt-20 mb-10  relative'>
          
          <div>
             <Button className='rounded-full px-10 py-2 ring-2 shadow-xl shadow-slate-500/20 hover:ring mb-5 '> Get Start </Button>
          </div>
          
          <div className='mb-10'>
              <p className='text-2xl md:text-5xl/snug text-center font-bold tracking-wider '>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, consectetur?
              </p>
          </div>
          <div className='my-10'>
               <div className='h-20 w-full rotate-45 bg-gradient-to-bl from-blue-500 to-pink-500 blur-xl -z-30 absolute top-40 right-0 opacity-40'>
          </div>
          <div className='h-20 w-full -rotate-45 bg-gradient-to-bl from-green-500 to-purple-500 blur-xl -z-30 absolute top-40 left-0 opacity-40'>
          </div>
         </div>
          
          <div  >
              <p className='text-center m-3 uppercase text-xl md:text-3xl  '>
                  
                  <span className='mx-2 bg-gradient-to-tr bg-clip-text font-extrabold text-transparent from-pink-500  to-red-400 to- '>Text</span> 
                  <span className=' font-extrabold '>TO</span> 
               
                  <span className='mx-2 bg-gradient-to-bl bg-clip-text text-transparent font-extrabold from-green-400 to-blue-400 '>PDF</span>  
                  
              
              </p>
              <Image  src={img} alt='Image ' quality={100} className='rounded-2xl border shadow-xl shadow-blue-500/20 mb-10' />
          </div>

    </div>
  )
}

export default Header