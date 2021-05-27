import React from 'react'
import { Link } from 'react-router-dom'

const TopNav: React.FC = () => {
   const Styles = {
      nav: '',
      ul: ''
   }
   return (
      <nav className={`${Styles.nav} flex text-normal w-screen justify-between`}>
         <div className='text-3xl p-2 pl-5 text-yellow-400'>Quran Tracker</div>
         <ul className={`${Styles.ul} flex gap-4 items-baseline text-lg p-2 text-yellow-400`}>
            <li>How it works</li>
            <li className='pl-2'>Contact us</li>
            <Link to='/signup'>
               <button className='px-5 py-2 rounded-xl border-black border-2 hover:bg-normal hover:text-normal-inverse'>Get Started</button>
            </Link>
            <Link to='/login'>
               <button className='mr-10 px-5 py-2 rounded-xl border-black border-2 hover:bg-normal hover:text-normal-inverse'>Login</button>
            </Link>
         </ul>
      </nav>
   )
}

export default TopNav
