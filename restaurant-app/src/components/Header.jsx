import React from 'react'
import logo from '../assets/images/logo.png'



export default function Header() {
  return (
    <div className='bg-[#d7d7b1] text-center '>
<div className='w-[50%] mx-auto py-4'>
<img src={logo} alt='restaurant logo' className='mx-auto'/>
</div>
<nav className='grid grid-cols-4 gap-1 w-1/2 mx-auto mt-5 py-4'>
<a href='/'>Home</a>
<a href='/menu'>Menu</a>
<a href='#'>About</a>
<a href='#'>Reservation</a>
</nav>

    </div>
  )
}
