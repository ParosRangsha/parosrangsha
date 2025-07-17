import React from 'react'
import Container from '../Components/Container'
import myphoto from '../assets/2.jpg'
import { NavLink } from 'react-router-dom'
import { MdFamilyRestroom, MdWork, MdContactMail  } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";


const Home = () => {
  return (
    <div className="home py-[130px]">
      <Container>
        <div className="contain">
          <div className="banner mx-auto flex">
            <div className="txt w-[60%] pr-[10px] lg:px-[150px] lg:w-2/3 lg:flex flex-col items-center justify-center">
              <h1 className='text-[18px] lg:text-[44px] font-extrabold'> <span className='text-[14px] lg:text-[24px] opacity-60 italic'>Hi I'm </span>PAROS RANGSHA</h1>
              <p className='text-[10px] lg:text-[16px] text-justify opacity-60 italic'>I come from a loving family. My father's name is Atindra Mankhin, and my mother's name is Anoti Rangsha. I am the elder of two siblings, and I have a younger brother named Abhijeet Rangsha.</p>
              <NavLink to='/about' className='inline-block text-[10px] lg:text-[16px] rounded-[5px] lg:rounded-[10px] py-[5px] px-[15px] lg:py-[20px] lg:px-[64px] my-[#3F8E00] bg-[#3F8E00] hover:bg-bkColor'>Show more details</NavLink>            </div>
            <div className="thumb w-[40%] lg:w-1/3 h-full flex flex-col justify-center items-center">
              <img src={myphoto} alt="" className='h-[120px] lg:h-[250px]' />
              <div className="w-1/2 mx-auto h-[10px] bg-[#ddd] rounded-[50%] blur-md mt-[20px] opacity-40"></div>
            </div>
          </div>
          <div className="quicklink flex justify-center py-[25px] gap-4">
            <NavLink to='/family' className='flex text-[10px] lg:text-[16px] items-center gap-2 py-[5px] px-[10px] lg:py-[10px] lg:px-[30px] bg-[#111] border-[5px] border-[#222] font-bold hover:bg-hvColor'><MdFamilyRestroom/>Family</NavLink>
            <NavLink to='/job' className='flex text-[10px] lg:text-[16px] items-center gap-2 py-[5px] px-[10px] lg:py-[10px] lg:px-[30px] bg-[#111] border-[5px] border-[#222] font-bold hover:bg-hvColor'><MdWork/>Job</NavLink>
            <NavLink to='/study' className='flex text-[10px] lg:text-[16px] items-center gap-2 py-[5px] px-[10px] lg:py-[10px] lg:px-[30px] bg-[#111] border-[5px] border-[#222] font-bold hover:bg-hvColor'><PiStudentBold/>Study</NavLink>
            <NavLink to='/contact' className='flex text-[10px] lg:text-[16px] items-center gap-2 py-[5px] px-[10px] lg:py-[10px] lg:px-[30px] bg-[#111] border-[5px] border-[#222] font-bold hover:bg-hvColor'><MdContactMail/>Contact</NavLink>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Home