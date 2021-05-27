import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CSForm from './CSForm'
import FormNav from './FormNav'
import PIForm from './PIForm'
import PSSelect from './PSSelect'
import SIForm from './SIForm'

const Parent: React.FC = () => {
   const [formIndex, setformIndex] = useState(0)
   return (
      <div className='flex text-normal rounded-lg'>
         <div className='hidden laptop:block'>
            <img src='https://www.whyislam.org/wp-content/uploads/2017/08/Quran-Word-of-God.jpg' alt='login' className='h-screen w-screen' />
         </div>
         <div className='flex bg-normal-inverse flex-col w-screen p-10'>
            <div className='text-5xl'>
               <Link to='/'>Quran Tracker</Link>
            </div>
            <div className='text-2xl pt-10 pb-2'>Sign up</div>
            <hr />
            <FormNav formIndex={formIndex} setformIndex={setformIndex} />
            <div>
               {formIndex === 0 ? (
                  <PIForm formIndex={formIndex} setformIndex={setformIndex} />
               ) : formIndex === 1 ? (
                  <SIForm formIndex={formIndex} setformIndex={setformIndex} />
               ) : formIndex === 2 ? (
                  <PSSelect formIndex={formIndex} setformIndex={setformIndex} />
               ) : formIndex === 3 ? (
                  <CSForm formIndex={formIndex} setformIndex={setformIndex} />
               ) : null}
            </div>
         </div>
      </div>
   )
}

export default Parent
