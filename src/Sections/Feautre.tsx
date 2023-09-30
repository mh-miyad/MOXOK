import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Feature= () => {
  return (
      <>
       <div className='mx-auto mb-32 mt-32 max-w-5xl sm:mt-56'>
        <div className='mb-12 px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl sm:text-center'>
            <h2 className='mt-2 font-extrabold text-4xl text-transparent bg-clip-text bg-gradient-to-tr from-gray-300 capitalize to-slate-600 drop-shadow-xl   sm:text-5xl'>
              Start chatting in minutes
            </h2>
            <p className='mt-4 text-lg text-blue-500  font-medium'>
              Chatting to your PDF files has never been
              easier than with MOXOK
            </p>
          </div>
        </div>

        {/* steps */}
        <ol className='my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0'>
          <li className='md:flex-1 backdrop-blur-2xl bg-slate-900/40 rounded-r-md p-3'>
            <div className='flex flex-col space-y-2 border-l-4 border-blue-500 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-sm font-medium text-blue-600'>
                Step 1
              </span>
              <span className='text-xl font-semibold'>
                Sign up for an account
              </span>
              <span className='mt-2 text-zinc-400'>
                Either starting out with a free plan or
                choose our{' '}
                <Link
                  href='/pricing'
                  className='text-blue-500 underline underline-offset-2'>
                  pro plan
                </Link>
                .
              </span>
            </div>
          </li>
          <li className='md:flex-1 backdrop-blur-2xl bg-slate-900/40 rounded-r-md p-3'>
            <div className='flex flex-col space-y-2 border-l-4 border-blue-500 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-sm font-medium text-blue-500'>
                Step 2
              </span>
              <span className='text-xl font-semibold'>
                Upload your PDF file
              </span>
              <span className='mt-2 text-zinc-400'>
                We&apos;ll process your file and make it
                ready for you to chat with.
              </span>
            </div>
          </li>
           <li className='md:flex-1 backdrop-blur-2xl bg-slate-900/40 rounded-r-md p-3'>
            <div className='flex flex-col space-y-2 border-l-4 border-blue-500 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-sm font-medium text-blue-500'>
                Step 3
              </span>
              <span className='text-xl font-semibold'>
                Start asking questions
              </span>
              <span className='mt-2 text-zinc-400'>
                It&apos;s that simple. Try out Quill today -
                it really takes less than a minute.
              </span>
            </div>
          </li>
        </ol>

        <div className='mx-auto max-w-6xl px-6 lg:px-8'>
          <div className='mt-16 flow-root sm:mt-24'>
            <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
              <Image
                src='/file-upload-preview.jpg'
                alt='uploading preview'
                width={1419}
                height={732}
                quality={100}
                className='rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10'
              />
            </div>
          </div>
        </div>
      </div>
      
      </>
  )
}

export default Feature