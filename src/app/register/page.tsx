'use client'
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import {
  Button,
  Checkbox,
  FileInput,
  Label,
  Radio,
  RangeSlider,
  Select,
  Textarea,
  TextInput,
  ToggleSwitch,
} from 'flowbite-react';

type Inputs = {
  email: string,
  name: string,
  password: string
}

const Register = () => {
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

  
  return (
      <div className='mt-20 text-center'>
      
      <div className='max-w-xl mx-auto text-white '>
          <form onSubmit={handleSubmit(onSubmit)} className='bg-slate-600/30 p-5 my-32  text-start  '>
     
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="email"
                value="Your email"
                className='text-blue-600 text-xl drop-shadow-lg  font-medium'
          />
        </div>
        <TextInput
          id="email1"
          placeholder="name@flowbite.com"
          required
              type="email"
              {...register("email")}
              className='bg-slate-500 text-white'
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="email"
                value="Your email"
                className='text-blue-600 text-xl drop-shadow-lg  font-medium'
          />
        </div>
        <TextInput
          id="email1"
          placeholder="name@flowbite.com"
          required
              type="email"
              {...register("email")}
              className='bg-slate-500 text-white'
        />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember" className='text-white '>
          Remember me
        </Label>
      </div>
      <Button type="submit">
        Submit
      </Button>
    </form>
    </div>
      </div>
  )
}

export default Register 