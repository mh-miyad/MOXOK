'use client';
import React, { useEffect, useState } from 'react'
import MaxWidthWrapper from '../maxWidthWrapper/MaxWidthWrapper'
import Link from 'next/link'
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { Button } from '../ui/button';
import { signOut, useSession } from 'next-auth/react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const NavbarComp = () => {
  const session = useSession()

 const [toastShown, setToastShown] = useState(false)

  const { data, status } = session
 useEffect(() => {
   if (session && !toastShown) {
    if (status === "authenticated") {
      toast.success("User Logged in successfully")
      setToastShown(true)
    } else if (status==="unauthenticated") {
      toast.warn("User Log Out successfully")
      setToastShown(true)
    }
  }

 }, [session,status,toastShown])
 


 
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
        <Link href={'/'}>
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
            </Link>
      </Navbar.Brand>
      <div className="flex md:order-2 gap-4 md:gap-0">
              {status === "authenticated" ? <>
               <Dropdown
          arrowIcon={false}
          inline
          label={<Avatar alt="User settings" img={`${data?.user?.image}`} rounded/>}
        >
          <Dropdown.Header>
            <span className="block text-sm">
           {data?.user?.name}
            </span>
            <span className="block truncate text-sm font-medium">
              
           {data?.user?.email}
            </span>
          </Dropdown.Header>
          <Link href={'/dashboard'}>
                    <Dropdown.Item>
                      Dashboard
            </Dropdown.Item>
                    <Dropdown.Item>
                      Dashboard
            </Dropdown.Item>
          </Link>
       
          <Dropdown.Divider />
                 
                  <Dropdown.Item>
                     <p className=''
                  onClick={()=>signOut()}>
            Sign out
          </p>
          </Dropdown.Item>
        </Dropdown>
              </> : <>
               <Link href={'/register'}>
            <Button className='drop-shadow-xl  font-bold ' variant={'ghost'}>
              Register
        </Button>
              </Link></>}
              
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
            <Link href={'/products'}>
            <p className=' bg-slate-900/70 md:bg-transparent  backdrop-blur-2xl md:backdrop-blur-none  p-4 rounded-md shadow-2xl shadow-blue-500/20  hover:border-b md:hover:border-b-2 transition-all duration-150 ease-in-out border-blue-500'>Products</p>
            </Link>
            <Link href={'/pricing'}>
            <p className=' bg-slate-900/70 md:bg-transparent  backdrop-blur-2xl md:backdrop-blur-none  p-4 rounded-md shadow-2xl shadow-blue-500/20  hover:border-b md:hover:border-b-2 transition-all duration-150 ease-in-out border-blue-500'>Pricing</p>
            </Link>
            <Link href={'/about'}>
            <p className=' bg-slate-900/70 md:bg-transparent  backdrop-blur-2xl md:backdrop-blur-none  p-4 rounded-md shadow-2xl shadow-blue-500/20  hover:border-b md:hover:border-b-2 transition-all duration-150 ease-in-out border-blue-500'>About us </p>
            </Link>
        
      </Navbar.Collapse>
    </Navbar>
        </div>
        <ToastContainer
        position="top-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"/>
    </MaxWidthWrapper>
    
    </>
  )
}

export default NavbarComp