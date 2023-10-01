'use client';
import React from 'react'
import MaxWidthWrapper from '../maxWidthWrapper/MaxWidthWrapper'
import Link from 'next/link'
import { Navbar } from 'flowbite-react';
import Image from 'next/image';
import { Button } from '../ui/button';
const NavbarComp = () => {
  return (
    <>
    
      <MaxWidthWrapper>
        <div className=' '>
              <Navbar
      fluid
          rounded
          className='bg-neutral-950/20  fixed inset-0 z-10 text-white backdrop-blur-xl w-full max-w-5xl mx-auto h-16 px-10'
    >
      <Navbar.Brand>
        {/* <Image
          alt="Flowbite React Logo"
          className="mr-3 h-6 sm:h-9"
              src="/favicon.svg"
              width={9}
              height={9}
        /> */}
            <Link href={'/'}>
              <span className=" self-center whitespace-nowrap text-xl font-semibold">
          MO<span className='text-blue-400 font-extrabold font-sans'>X</span>OK
              </span>
            </Link>
      </Navbar.Brand>
      <div className="flex md:order-2 gap-4 md:gap-0">
            <Button className='drop-shadow-xl  font-bold ' variant={'ghost'}>
              Register
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
            <Link href={'/pricing'}>
            <p className=' bg-slate-900/70 md:bg-transparent  backdrop-blur-2xl md:backdrop-blur-none  p-4 rounded-md shadow-2xl shadow-blue-500/20  hover:border-b md:hover:border-b-2 transition-all duration-150 ease-in-out border-blue-500'>Pricing</p>
            </Link>
            <Link href={'/about'}>
            <p className=' bg-slate-900/70 md:bg-transparent  backdrop-blur-2xl md:backdrop-blur-none  p-4 rounded-md shadow-2xl shadow-blue-500/20  hover:border-b md:hover:border-b-2 transition-all duration-150 ease-in-out border-blue-500'>About us </p>
            </Link>
        
      </Navbar.Collapse>
    </Navbar>
        </div>
        
    </MaxWidthWrapper>
    
    </>
  )
}

export default NavbarComp