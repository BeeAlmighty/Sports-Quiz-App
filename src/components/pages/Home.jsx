import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className='md:p-[5rem] py-[2rem] gap-[2rem] flex flex-col'>
      {/* <div data-preset="fan" className="ldBar label-center" data-value="78"></div> */}
      <div className='text-white text-center flex flex-col items-center text-shadow-lg text-shadow-fuchsia-400'>
        <h1 className=' md:text-[4rem] md:w-[70%] text-center' >THINK YOU KNOW YOUR SPORT WELL?</h1>
        <span className='text-[1.5rem] text-fuchsia-400 md:text-[2.5rem] mt-[1rem]'>SPORTS QUIZ!</span>
      </div>
      <div className='flex flex-col items-center text-white gap-[2rem] md:gap-[4rem]'>
        <h2 className='text-[1.8rem]'>CHOOSE A CATEGORY</h2>
        <div className='grid gap-[1rem] md:grid-cols-3 bg-[#FFF2DB] md:p-[4rem] p-[2rem]'>
          <Link to={'/boxing'}>
            <div className='flex flex-col gap-[0.5rem] bg-white p-[0.5rem] rounded-lg md:hover:translate-y-[-1rem] duration-500 ease-in'>
              <img className='w-[10rem] h-[10rem] bg-cover bg-center cursor-pointer' src="https://img.cdn-pictorem.com/uploads/collection/H/HF2KPM3FPR/900_Goldfishwallart_VINTAGE_MUHAMMAD_ALI_BOXING_CHAMPION_WALL_ART_Gol.jpg" />
              <p className='bg-fuchsia-500 text-center rounded-md' >boxing</p>
            </div>
          </Link>
          <Link to={'/football'}>
            <div className='flex flex-col gap-[0.5rem] bg-white p-[0.5rem] rounded-lg md:hover:translate-y-[-1rem] duration-500 ease-in'>
              <img className='w-[10rem] h-[10rem] bg-cover bg-center cursor-pointer' src="https://storage.googleapis.com/pod_public/1300/159319.jpg" />
              <p className='bg-fuchsia-500 text-center rounded-md' >football</p>
            </div>
          </Link>
          <Link to={'mma'}>
            <div className='flex flex-col gap-[0.5rem] bg-white p-[0.5rem] rounded-lg md:hover:translate-y-[-1rem] duration-500 ease-in'>
              <img className='w-[10rem] h-[10rem] bg-cover bg-center cursor-pointer' src="https://i.pinimg.com/originals/d8/78/23/d87823ec1fbc5ad3ba26b01e696327d9.jpg" />
              <p className='bg-fuchsia-500 text-center rounded-md' >UFC</p>
            </div>
          </Link>
        </div>
          
      </div>
      {/* <div className="ldBar"class="ldBar" data-value="35" data-preset="bubble">
      </div> */}
       
    </div>
  )
}
