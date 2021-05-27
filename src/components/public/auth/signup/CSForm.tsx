import React from 'react'

interface props {
   formIndex: number
   setformIndex: React.Dispatch<React.SetStateAction<number>>
}
const CSForm: React.FC<props> = ({ formIndex, setformIndex }) => {
   return (
      <div>
         Confirm and Submit form
         <div className='flex justify-between px-2'>
            <button
               className='py-2 px-20 rounded-xl text-normal bg-normal-inverse border-2 border-normal hover:bg-normal hover:text-normal-inverse'
               onClick={() => setformIndex(formIndex - 1)}
            >
               Previous
            </button>
            <button className='py-2 px-20 rounded-xl text-normal bg-normal-inverse border-2 border-normal hover:bg-normal hover:text-normal-inverse'>
               Create Account
            </button>
         </div>
      </div>
   )
}

export default CSForm
