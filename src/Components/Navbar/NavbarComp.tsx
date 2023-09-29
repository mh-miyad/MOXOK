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
        <Navbar
      fluid
          rounded
          className='bg-neutral-950/30 sticky text-white backdrop-blur-xl'
    >
      <Navbar.Brand href="/">
        {/* <Image
          alt="Flowbite React Logo"
          className="mr-3 h-6 sm:h-9"
              src="/favicon.svg"
              width={9}
              height={9}
        /> */}
        <span className=" self-center whitespace-nowrap text-xl font-semibold">
          MO<span className='text-blue-400 font-extrabold font-sans'>X</span>OK
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2 gap-4 md:gap-0">
        <Button className=' font-extrabold drop-shadow-xl'>
          Log In 
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
            <Link href={'/'}>
            <p> Home</p>
            </Link>
            <Link href={'/contact'}>
            <p>Contact</p>
            </Link>
      </Navbar.Collapse>
    </Navbar>
    </MaxWidthWrapper>
    
    </>
  )
}

export default NavbarComp