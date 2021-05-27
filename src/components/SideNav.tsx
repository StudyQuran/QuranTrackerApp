import React, { ReactElement, useState } from 'react'
import { BsChatFill, BsFillGrid1X2Fill, BsFillPeopleFill, BsFillPersonFill } from 'react-icons/bs'
import { Link, useLocation } from 'react-router-dom'
import { ThemeType } from '../util/hooks/models/theme'
import { useThemeContext } from '../util/hooks/use-theme'

interface NavItems {
   text: string
   link: string
   icon: ReactElement
}

const SideNav: React.FC = () => {
   const [isCollapsed, setisCollapsed] = useState(false)
   const { pathname: activeItem } = useLocation()
   const { themeData, setThemeData } = useThemeContext()
   const isDarkMode = themeData.type === ThemeType.Dark
   const Styles = {
      nav: `flex flex-col h-screen bg-normal w-${isCollapsed ? '14' : '48'} tablet:w-${isCollapsed ? '20' : '56'} laptop:w-${
         isCollapsed ? '24' : '64'
      } desktop:w-${isCollapsed ? '24' : '72'} desktopLg:w-${isCollapsed ? '28' : '80'}`,
      logoContainer: 'p-5',
      logo: 'rounded-lg w-48 h-20',
      ul: 'flex flex-col gap-3 h-screen',
      NavItem: 'flex gap-2 items-center p-3 rounded-lg',
      NavText: 'pl-2 text-base desktop:text-lg desktopLg:text-xl',
      CollapseBar: 'border-r-2 border-normal-inverse h-8 mr-2'
   }
   const NavItems: NavItems[] = [
      {
         text: 'Dashboard',
         link: '/dash',
         icon: <BsFillGrid1X2Fill className='navIcon' />
      },
      {
         text: 'Classes',
         link: '/classes',
         icon: <BsFillPeopleFill className='navIcon' />
      },
      {
         text: 'Students',
         link: '/students',
         icon: <BsFillPersonFill className='navIcon' />
      },
      {
         text: 'Chat',
         link: '/chat',
         icon: <BsChatFill className='navIcon' />
      }
   ]
   return (
      <nav className={Styles.nav}>
         <div className={Styles.logoContainer}>
            <img className={Styles.logo} src='https://t4.ftcdn.net/jpg/02/28/66/29/360_F_228662986_UwoKr4NUrJmF5UMQyFTuaOWpjd6r78AR.jpg' alt='logo' />
         </div>
         <ul className={`${Styles.ul}`}>
            <div className='p-3'>
               {NavItems.map((Item) => (
                  <Link
                     key={Item.text}
                     to={Item.link}
                     className={`${Styles.NavItem} ${isCollapsed && 'justify-center'} ${
                        Item.link === activeItem && 'bg-normal-inverse text-normal'
                     } ${!(Item.link === activeItem) && 'hover:bg-normal-soft'}`}
                  >
                     <div>{Item.icon}</div>
                     <div className={`${Styles.NavText} ${isCollapsed && 'hidden'}`}>{Item.text}</div>
                  </Link>
               ))}
            </div>
            <div onClick={() => setisCollapsed((prevState) => (prevState = !prevState))}>
               <div className={Styles.CollapseBar}></div>
            </div>
         </ul>

         <ul>
            <li className='p-5'>
               <button onClick={() => setThemeData({ type: isDarkMode ? ThemeType.Light : ThemeType.Dark })}>change theme</button>
            </li>
         </ul>
      </nav>
   )
}

export default SideNav
