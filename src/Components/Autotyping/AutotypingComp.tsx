import React from 'react'
import { TypeAnimation } from 'react-type-animation';
 
const AutotypingComp = () => {
  return (
    <div className='text-xl font-extrabold md:text-4xl bg-clip-text text-transparent bg-gradient-to-tr from-blue-600  to-blue-300 p-2'>
  <TypeAnimation
    preRenderFirstString={true}
    sequence={[
      500,
     "MOXOK PDF Chat Editor", // initially rendered starting point
      1000,
   "PDF Magic with Chat",
      1000,
 "PDF Chat Assistant on MOXOK" ,
      1000,
    "MOXOK PDF Collaborator" ,
      500,
    ]}
    speed={20}
    repeat={Infinity}
  />
</div>
  )
}

export default AutotypingComp