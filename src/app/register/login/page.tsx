'use client'
import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import {
  Checkbox,
  Label,

} from 'flowbite-react';
import { Input } from '@/Components/ui/input';
import { Button } from '@/Components/ui/button';
import Link from 'next/link';
import { signIn, useSession } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';
import { useRouter } from 'next/navigation';

type Inputs = {
  email: string,
  password: string
}
const LogIn = () => {
  
  const [isRemembar,setRemembar] = useState(false)
   const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { email } = data
    alert(email)

  }

  const router =  useRouter()
  const session = useSession()
 const [toastShown, setToastShown] = useState(false)

  const { data, status } = session
 useEffect(() => {
   if (session && !toastShown) {
    if (status === "authenticated") {
      router.push('/dashboard')
      setToastShown(true)
    } else if (status==="unauthenticated") {
      
      router.push('/register/login')
      setToastShown(true)
    }
  }
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [status,toastShown])
  

  return (
    <div className='mt-20 text-center'>
      
      <div className='max-w-md mx-auto text-white '>
          <form onSubmit={handleSubmit(onSubmit)} className='border border-gray-600/70 shadow-2xl  shadow-slate-800/20 rounded-xl ring-2 transition-all ease-linear duration-150 p-5 my-32  text-start  space-y-5 '>
         <h2 className='text-xl md:text-4xl font-extrabold drop-shadow-xl  text-blue-600 text-center  p-3 '> Please Login  Here </h2>
     
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="email"
                value="Your email"
                className='text-blue-600 text-xl drop-shadow-lg  font-medium'
          />
            </div>
            <Input className='bg-transparent placeholder:text-white border-black ring-2 peer-active:border-none  ' placeholder='Write Your Email '   {...register("email")}  type='email' required/>

      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="password"
                value="Your password"
                className='text-blue-600 text-xl drop-shadow-lg  font-medium'
          />
            </div>
            <Input className='bg-transparent placeholder:text-white border-black ring-2 peer-active:border-none  ' placeholder='Password'   {...register("password")}  type='password' required/>

      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" onClick={()=>setRemembar(!isRemembar)} />
            <div className='flex justify-between w-full '>
               <Label htmlFor="remember" className='text-white '>
          Remember me
        </Label>
        <Label htmlFor="remember" className='text-white font-bold'>
           {`Don't`}  have <Link href={'/register'} className='text-blue-500'>Any Account ? </Link>
        </Label>
       </div>
      </div>
      <Button className='hover:ring-2 w-full  hover:bg-blue-700 active:p-1 bg-blue-600' size={'lg'} type="submit" >
        Log In 
          </Button>
             <button className='hover:ring-2 hover:bg-white transition-all ease-linear duration-150 rounded-md active:p-1 w-full  bg-white/90 text-center p-2'  onClick={()=> signIn('google')} >
        <FcGoogle  className='w-6 h-6 mx-auto'/>
      </button>
    </form>
    </div>
      </div>
  )
}

export default LogIn