import React, { useState } from 'react'

interface props {
   formIndex: number
   setformIndex: React.Dispatch<React.SetStateAction<number>>
}
const PIForm: React.FC<props> = ({ formIndex, setformIndex }) => {
   const [showPassword, setshowPassword] = useState(false)
   return (
      <form className='flex flex-col' autoComplete='on'>
         <label className='p-2 text-xl'>First Name</label>
         <input className='w-full h-full border-2 rounded-lg p-3' type='text' name='firstname' placeholder='First Name' />

         <label className='p-2 text-xl'>Last Name</label>
         <input className='w-full h-full border-2 rounded-lg p-3' type='text' name='lastname' placeholder='Last Name' />

         <label className='p-2 text-xl'>Email</label>
         <input className='w-full h-full border-2 rounded-lg p-3' type='email' name='email' placeholder='Email' />

         <label className={`p-2 text-xl select-none ${showPassword && 'line-through'}`} onClick={() => setshowPassword(!showPassword)}>
            Password
         </label>
         <input
            className='w-full h-full border-2 rounded-lg p-3'
            type={`${showPassword ? 'text' : 'password'}`}
            name='password'
            placeholder='password'
         />

         <button
            className='self-end mt-4 py-2 px-20 rounded-xl text-normal bg-normal-inverse border-2 border-normal hover:bg-normal hover:text-normal-inverse'
            onClick={() => setformIndex(formIndex + 1)}
         >
            Next
         </button>
      </form>
   )
}

export default PIForm
