import React from 'react'
import { BsChatFill, BsFillBarChartFill, BsFillPeopleFill } from 'react-icons/bs'

const Parent: React.FC = () => {
   const Styles = {
      container: 'text-normal flex justify-evenly text-center p-5',
      cardContainer: 'flex flex-col items-center',
      featureCard: 'bg-yellow-400 rounded-md h-96 w-80 text-2xl pt-2',
      icon: 'rounded-xl text-6xl m-1 p-3 bg-black text-white'
   }
   return (
      <div className={`${Styles.container} flex-wrap`}>
         <div className={`${Styles.cardContainer}`}>
            <BsFillBarChartFill className={Styles.icon} />
            <div className={`${Styles.featureCard}`}>Flexible Quran Tracking</div>
         </div>
         <div className={`${Styles.cardContainer}`}>
            <BsFillPeopleFill className={Styles.icon} />
            <div className={`${Styles.featureCard}`}>Interactive Software</div>
         </div>
         <div className={`${Styles.cardContainer}`}>
            <BsChatFill className={Styles.icon} />
            <div className={`${Styles.featureCard}`}>Communcation and Support</div>
         </div>
      </div>
   )
}

export default Parent
