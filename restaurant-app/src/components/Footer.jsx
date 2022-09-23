import React from 'react'
import logo from '../assets/images/logo.png'


export default function Footer() {
  return (
    <div className='bg-[#d7d7b1] text-center p-4 '>
<div className='w-[50%] mx-auto py-4 border-b-[1px] border-black text-center'>
<img src={logo} alt='restaurant logo' className='mx-auto'/>
</div>
<div className='socialMediaIcons'>
<i className="fa-brands fa-facebook "></i>
<i className="fa-brands fa-twitter"></i>
<i className="fa-brands fa-youtube"></i>
</div>

    </div>
  )
}
