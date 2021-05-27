import React from 'react'

interface props {
   formIndex: number
   setformIndex: React.Dispatch<React.SetStateAction<number>>
}
const SIForm: React.FC<props> = ({ formIndex, setformIndex }) => {
   return (
      <form className='flex flex-col gap-5' autoComplete='on'>
         <div>
            <label className='p-2 text-xl'>School Name</label>
            <input className='w-full h-full border-2 rounded-lg p-3' type='text' name='schoolname' placeholder='School Name' />
         </div>
         <div>
            <label className='p-2 text-xl'>School Type</label>
            {/* <input className='w-full h-full border-2 rounded-lg p-3' type='text' name='schooltype' placeholder='School Type' /> */}
            <select className='w-full h-full border-2 rounded-lg p-3' name='schooltype'>
               <option value='' selected disabled>
                  --- Select Type ---
               </option>
               <option value='volvo'>Islamic</option>
               <option value='saab'>Masjid</option>
               <option value='opel'>Privite</option>
            </select>
         </div>
         <div>
            <label className='p-2 text-xl'>City</label>
            <input className='w-full h-full border-2 rounded-lg p-3' type='text' name='city' placeholder='City' />
         </div>
         <div>
            <label className='p-2 text-xl'>State</label>
            <input className='w-full h-full border-2 rounded-lg p-3' type='text' name='state' placeholder='State' />
         </div>
         <div className='flex justify-between px-2'>
            <button
               className='py-2 px-20 rounded-xl text-normal bg-normal-inverse border-2 border-normal hover:bg-normal hover:text-normal-inverse'
               onClick={() => setformIndex(formIndex - 1)}
            >
               Previous
            </button>
            <button
               className='py-2 px-20 rounded-xl text-normal bg-normal-inverse border-2 border-normal hover:bg-normal hover:text-normal-inverse'
               onClick={() => setformIndex(formIndex + 1)}
            >
               Next
            </button>
         </div>
      </form>
   )
}

export default SIForm
