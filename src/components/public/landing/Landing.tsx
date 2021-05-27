import React from 'react'
import TopNav from './topnav/Parent'
import Hero from './hero/Parent'
import Features from './features/Parent'
import Footer from './footer/Parent'

const Landing: React.FC = () => {
   return (
      <div>
         <div className='bg-green-800'>
            <TopNav />
            <Hero />
         </div>
         <Features />
         <Footer />
      </div>
   )
}

export default Landing
