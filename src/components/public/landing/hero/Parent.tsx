import React from 'react'

const Parent: React.FC = () => {
   return (
      <div className='flex flex-wrap text-center justify-between'>
         <div className='flex flex-col text-7xl text-left pl-5 pt-5'>
            <div>Tracking</div>
            <div>Quran</div> <div>Progression</div>
            <div className='text-lg pt-5'>An easy way to track, manage, and record your Quran class.</div>
         </div>
         <div>
            <img src='https://i.pinimg.com/originals/22/f9/5b/22f95b7118e0252dbcc9ffae5e95c866.png' alt='quran' />
         </div>
      </div>
   )
}

export default Parent
