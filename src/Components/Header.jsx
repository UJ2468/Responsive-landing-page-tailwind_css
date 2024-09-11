import React from 'react'
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className='flex items-center justify-center gap-3 '>
        <img src="./assets/Logo.svg" alt="logo" />
        <button className='bg-gradient-to-r from-orange-400 to-red-400 text-xs text-white px-2.5 py-1.5 rounded-2xl'>Hosterr is hiring
        </button>
      </div>
      <ul className='hidden lg:flex justify-between items-center font-lato text-gray-400 gap-4'>
        <li><a herf='#' />Plans</li>
        <li><a herf='#' />Find domain</li>
        <li><a herf='#' />Why Hoster</li>
      </ul>
      <div className='hidden lg:flex justify-center items-center font-lato gap-4'>
        <a herf='#'>Sign in</a>
        <button className='rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white'>Join Waitlist</button>
      </div>
      <div className='lg:hidden'>
        <FaBars />

      </div>
    </div>
  )
}

export default Header