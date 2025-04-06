import React, { useEffect, useState } from 'react';
import { Circle } from 'rc-progress';
export const Result = ({percent, path, pathAlt}) => {
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false)
    }, 8000);
  }, [])
  return (
    <div className='p-[2rem] bg-black my-[2rem] rounded-md flex flex-col gap-[2rem] text-white items-center'>
      <img src={path} alt={pathAlt} />
      {showLoader ? (
      <>
      <h2>Calculating Score...</h2>
      <span className="loader"></span>
      </>
      ) : (
       <div className='flex flex-col gap-[2rem] items-center'>
        <h2 className='text-[1.5rem]'>Score: {percent}%</h2>
        <Circle percent={percent} strokeWidth={4} strokeColor="#DD88CF" trailWidth={4} /> 
        {/* <div className='h-3.5 bg-gray-300 rounded-2xl'>
          <div className='bg-fuchsia-400 h-3.5 rounded-2xl' style={{width: `${percent}%`}}></div>
        </div> */}
        </div>

     )}
    </div>
  )
}
