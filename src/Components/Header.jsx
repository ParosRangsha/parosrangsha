import React, { useState } from 'react'
import Container from './Container'
import { NavLink } from 'react-router-dom'
import { TiThMenu } from "react-icons/ti";
import { MdOutlineRestaurantMenu } from "react-icons/md";


const Header = () => {
  let [menuShow, setMenuShow] = useState(false)
  let handleMenuShow = ()=>{
    setMenuShow(!menuShow)
  }
  return (
    <div className="header bg-bkColor fixed w-full top-0 z-[999]">
      <Container>
        <div className="contain flex justify-between items-center">
          <div className="logo w-[60%]">
            <NavLink to='/' className='text-[18px] font-bold py-[15px] block'>PARS</NavLink>
          </div>
          <div className="Menu lg:w-[40%] lg:flex justify-end lg:py-[5px]">
            <ul className='flex gap-1'>
              <li><NavLink to='/' className={({ isActive }) =>isActive? 'w-full block px-[10px] lg:px-[30px] lg:py-[10px] py-[5px] bg-activeBg' : 'hover:bg-hvColor w-full block px-[10px] lg:px-[30px] lg:py-[10px] py-[5px]'}>Home</NavLink></li>
              <li><NavLink to='/moment' className={({ isActive }) =>isActive? 'w-full block px-[10px] lg:px-[30px] lg:py-[10px] py-[5px] bg-activeBg' : 'hover:bg-hvColor w-full block px-[10px] lg:px-[30px] lg:py-[10px] py-[5px]'}>Moment</NavLink></li>
              <li><NavLink to='/about' className={({ isActive }) =>isActive? 'w-full block px-[10px] lg:px-[30px] lg:py-[10px] py-[5px] bg-activeBg' : 'hover:bg-hvColor w-full block px-[10px] lg:px-[30px] lg:py-[10px] py-[5px]'}>About</NavLink></li>
              <li><NavLink to='/contact' className={({ isActive }) =>isActive? 'w-full block px-[10px] lg:px-[30px] lg:py-[10px] py-[5px] bg-activeBg' : 'hover:bg-hvColor w-full block px-[10px] lg:px-[30px] lg:py-[10px] py-[5px]'}>Contact</NavLink></li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Header