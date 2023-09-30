'use client'

import AutotypingComp from '@/Components/Autotyping/AutotypingComp'
import { Button } from '@/Components/ui/button'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
      <div className='flex justify-center items-center flex-col max-w-4xl mt-20 mb-10  relative text-center'>
          
          <div>
             <Button className='rounded-full px-10 py-2 ring-2 shadow-xl shadow-slate-500/20 hover:ring mb-5 '> MO<span className=' text-blue-500 font-extrabold text-xl'>X</span>OK is now public! </Button>
          </div>
       
        <h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl'>
          Chat with your{' '}
          <span className='text-blue-600'>documents</span>{' '}
          in seconds.
        </h1>
        <p className='mt-5 max-w-prose text-gray-100 sm:text-lg'>
         <span className='font-bold'> MO<span className=' text-blue-500 font-extrabold text-xl'>X</span>OK</span> allows you to have conversations with any
          PDF document. Simply upload your file and start
          asking questions right away.
        </p>
          <div className='mt-10'>
               <div className='h-20 w-full rotate-45 bg-gradient-to-bl from-blue-500 to-pink-500 blur-xl -z-30 absolute top-40 right-0 opacity-40'>
          </div>
          <div className='h-20 w-full -rotate-45 bg-gradient-to-bl from-green-500 to-purple-500 blur-xl -z-30 absolute top-40 left-0 opacity-40'>
          </div>
         </div>
          
            <div>
        <div className='relative isolate'>
          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            />
          </div>

          <div>
            <div className='mx-auto max-w-6xl px-6 lg:px-8'>
              <div className='mt-5 flow-root sm:mt-24'>
                <div className='mb-5'>
                  <AutotypingComp />
                </div>
                <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
                  <Image
                    src='/dashboard-preview.jpg'
                    alt='product preview'
                    width={1364}
                    height={866}
                    quality={100}
                    className='rounded-md bg-blue-900/10 backdrop-blur-2xl p-2 sm:p-8 md:p-10 shadow-2xl ring-1 ring-gray-900/10'
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]'
            />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Header