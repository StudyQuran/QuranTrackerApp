import React from 'react'
import { Link } from 'react-router-dom'

const Parent: React.FC = () => {
   return (
      <div className='flex text-normal rounded-lg'>
         <div className='hidden laptop:block'>
            <img src='https://www.whyislam.org/wp-content/uploads/2017/08/Quran-Word-of-God.jpg' alt='login' className='h-screen w-screen' />
         </div>
         <div className='flex flex-col w-screen p-10'>
            <div className='text-5xl'>
               <Link to='/'>Quran Tracker</Link>
            </div>
            <div className='text-2xl pt-10 pb-2'>Login</div>
            <hr />
            <div className='pt-10'>
               <label className='p-2 text-xl'>Username</label>
               <input className='w-full h-full border-2 rounded-lg p-5' type='text' name='useranme' placeholder='Username' autoComplete='email' />
            </div>
            <div className='pt-10'>
               <label className='p-2 text-xl'>Password</label>
               <input className='w-full h-full border-2 rounded-lg p-5' type='text' name='password' placeholder='Password' autoComplete='password' />
            </div>
            <div className='flex justify-between pt-10 px-2'>
               <div>
                  <input className='' type='checkbox' name='rememberme' />
                  <label className='p-2'>Remember Me</label>
               </div>
               <div className='text-blue-700 hover:text-blue-400'>
                  <Link to='/forgotpassword'>Forgot Password?</Link>
               </div>
            </div>
            <div className='pt-10'>
               <button className='rounded-lg p-2 w-full h-full bg-blue-700 text-normal-inverse hover:bg-blue-400'>Login</button>
            </div>
            <div className='pt-10 text-center'>
               Dont have an account yet?{' '}
               <Link className='text-blue-700 hover:text-blue-400' to='/signup'>
                  Sign up
               </Link>
            </div>
         </div>
      </div>
   )
}

export default Parent
