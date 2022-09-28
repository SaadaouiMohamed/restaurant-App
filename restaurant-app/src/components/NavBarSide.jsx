import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { MdInfo, MdRestaurantMenu, MdShoppingCart } from 'react-icons/md'

export default function NavBarSide() {
  return (
    <div className='fixed top-[20%] left-0 bg-[#d7d7b1] w-[40%] p-5 z-20'>

<nav className="grid grid-cols-1 gap-1 w-1/2 mx-auto mt-5 py-4">
          <a href="/">
            <AiFillHome className="inline" /> Home
          </a>
          <a href="/menu">
            <MdRestaurantMenu className="inline" /> Menu
          </a>
          <a href="#">
            <MdShoppingCart className="inline" /> Reservation
          </a>
          <a href="#">
            <MdInfo className="inline" /> About
          </a>
        </nav>
    </div>
  )
}
