import React from 'react'

interface props {
   formIndex: number
   setformIndex: React.Dispatch<React.SetStateAction<number>>
}
const PSSelect: React.FC<props> = ({ formIndex, setformIndex }) => {
   const Plans = [
      { name: 'Basic', price: 3, features: ['Up to 500 students', 'Personalized accounts for everyone'] },
      { name: 'Plus', price: 5, features: ['Up to 500 students', 'Personalized accounts for everyone', 'Instant chat'] },
      {
         name: 'Pro',
         price: 7,
         features: [
            'Up to 1000 students',
            'Personalized accounts for everyone',
            'Instant chat',
            'Comprehenssive statistics',
            'Prioritzed suggestions for new features'
         ]
      }
   ]
   return (
      <div>
         <div className='flex justify-evenly gap-1 p-5 text-normal-inverse'>
            {Plans.map((plan) => (
               <div className='flex flex-col items-center p-2 h-72 w-1/3 rounded bg-green-600'>
                  <div className='text-2xl'>{plan.name}</div>
                  <div className='flex items-center gap-2'>
                     <div className='text-2xl'>$</div>
                     <div className='text-4xl'>{plan.price}</div>
                     <div className='flex flex-col items-start'>
                        <div className=''>/month</div>
                        <div className='text-xs'>per student</div>
                     </div>
                  </div>
                  <div className='my-5 border border-green-900 w-full'></div>
                  <ul className='list-disc px-5 text-sm'>
                     {plan.features.map((feature) => (
                        <li>{feature}</li>
                     ))}
                  </ul>
               </div>
            ))}
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
      </div>
   )
}

export default PSSelect
