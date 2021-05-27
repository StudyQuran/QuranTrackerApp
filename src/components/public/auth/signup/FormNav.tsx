import React from 'react'
interface props {
   formIndex: number
   setformIndex: React.Dispatch<React.SetStateAction<number>>
}
const FormNav: React.FC<props> = ({ formIndex, setformIndex }) => {
   const navIems = [
      { name: 'Personal Information', number: 0 },
      { name: 'School Information', number: 1 },
      { name: 'Plan Selection', number: 2 },
      { name: 'Confirm & Submit', number: 3 }
   ]
   return (
      <div className='flex justify-between items-baseline text-center leading-10 pt-5 pb-5'>
         {navIems.map((val, index) => (
            <React.Fragment key={index}>
               <div className='flex flex-col items-center cursor-pointer' onClick={() => setformIndex(val.number)}>
                  <div
                     className={`rounded-full transition duration-500 ease-in-out ${
                        formIndex === val.number ? 'bg-green-600' : 'bg-normal'
                     } text-normal-inverse w-10 h-10`}
                  >
                     {val.number + 1}
                  </div>
                  <p className='text-lg font-semibold'>{val.name}</p>
               </div>
               {val.number !== 3 && (
                  <div
                     className={`border-t-4 w-20 transition duration-500 ease-in-out ${
                        formIndex === val.number ? 'border-green-600' : 'border-gray-600'
                     }`}
                  ></div>
               )}
            </React.Fragment>
         ))}
      </div>
   )
}

export default FormNav
