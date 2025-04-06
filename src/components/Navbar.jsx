import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconBase } from 'react-icons';
import { FaBrain } from "react-icons/fa";
export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleOpenNav = () => {
    setNav(true)
  }
  const handleCloseNav = () => {
    setNav(false)
  }
  const navItems = [
    {id: 1, name: 'home', to: '/'},
    {id: 2, name: 'football', to: '/football'},
    {id: 3, name: 'boxing', to: '/boxing'},
    {id: 4, name: 'mma', to: '/mma'},
  ]
   return (
    <nav className='flex h-[5rem] bg-[#FFF2DB] px-[2rem] w-full items-center justify-between relative md:px-[7%] lg:px-[12%]'>
      <Link to={'/'}>
        {/* <img src="src/assets/quiz_24dp_5985E1_FILL0_wght400_GRAD0_opsz24.svg" alt="quiz logo" className='w-[2rem] cursor-pointer'/> */}
        <FaBrain style={{fontSize: '2rem', color: 'purple'}}/>
      </Link>
      <img src="src/assets/menu_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24 (1).svg" alt="hamburger-menu" className='w-[2rem] cursor-pointer md:hidden bg-fuchsia-400 rounded-md p-[0.15rem]' onClick={handleOpenNav}/>
      {/* Desktop Navigation */}
      <ul className='md:flex items-center gap-[1rem] hidden lg:gap-[3rem]'>
        <Link to={'/'}>
          <li className='border-b-4 pt-[1.8rem] pb-[1.5rem] border-transparent hover:border-b-fuchsia-500 duration-150 ease-in-out'>Home</li>
        </Link>
        <Link to={'football'}>
          <li className='border-b-4 pt-[1.8rem] pb-[1.5rem] border-transparent hover:border-b-fuchsia-500 duration-150 ease-in-out'>Football</li>
        </Link>
        <Link to={'boxing'}>
          <li className='border-b-4 pt-[1.8rem] pb-[1.5rem] border-transparent hover:border-b-fuchsia-500 duration-150 ease-in-out'>Boxing</li>
        </Link>
        <Link to={'mma'}>
          <li className='border-b-4 pt-[1.8rem] pb-[1.5rem] border-transparent hover:border-b-fuchsia-500 duration-150 ease-in-out'>MMA</li>
        </Link>
      </ul>
      {/* Mobile Navigation */}
      <ul className={nav ? 'flex items-start flex-col fixed top-0 w-[90%] left-[0] h-full p-[4rem] gap-[1.5rem] backdrop-blur-md duration-500 ease-in-out' : 'flex items-start flex-col fixed top-0 left-[-100%] h-full p-[4rem] gap-[1.5rem] backdrop-blur-md duration-500 ease-in-out'}>
        <img src="src/assets/close_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24 (1).svg" alt="close button" id='close-btn' onClick={handleCloseNav} className='cursor-pointer'/>
        {navItems.map(navItem => (
          <Link to={navItem.to} key={navItem.id} className='w-full text-fuchsia-300'>
            <li className='hover:bg-fuchsia-800 w-full p-[0.5rem] hover:rounded-md duration-500 border-b-1 hover:text-white active:bg-amber-700' onClick={handleCloseNav}>{navItem.name}</li>
          </Link>
        ))}
      </ul>
    </nav>
  ) 
}










// import React, { useState } from 'react';
// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

// export const Navbar = () => {
//   // State to manage the navbar's visibility
//   const [nav, setNav] = useState(false);

//   // Toggle function to handle the navbar's display
//   const handleNav = () => {
//     setNav(!nav);
//   };

//   // Array containing navigation items
//   const navItems = [
//     { id: 1, text: 'Home' },
//     { id: 2, text: 'Company' },
//     { id: 3, text: 'Resources' },
//     { id: 4, text: 'About' },
//     { id: 5, text: 'Contact' },
//   ];
//   return (
//     <div className='bg-black flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
//       {/* Logo */}
//       <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>

//       {/* Desktop Navigation */}
//       <ul className='hidden md:flex'>
//         {navItems.map(item => (
//           <li
//             key={item.id}
//             className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
//           >
//             {item.text}
//           </li>
//         ))}
//       </ul>

//       {/* Mobile Navigation Icon */}
//       <div onClick={handleNav} className='block md:hidden'>
//         {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
//       </div>

//       {/* Mobile Navigation Menu */}
//       <ul
//         className={
//           nav
//             ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
//             : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
//         }
//       >
//         {/* Mobile Logo */}
//         <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>

//         {/* Mobile Navigation Items */}
//         {navItems.map(item => (
//           <li
//             key={item.id}
//             className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
//           >
//             {item.text}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
