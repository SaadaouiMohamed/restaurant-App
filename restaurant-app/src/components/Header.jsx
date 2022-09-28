import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import { AiFillHome } from "react-icons/ai";
import { MdRestaurantMenu, MdInfo, MdShoppingCart } from "react-icons/md";
import { useMediaQuery } from "@mui/material";
import { HiOutlineMenu } from "react-icons/hi";
import NavBarSide from "./NavBarSide";


export default function Header() {
  const isMd = useMediaQuery("(min-width:1024px)");
  console.log(isMd);
  const [open , setOpen] = useState(false)

  const handleOpen = () => {
   if (!isMd){
    console.log({open})
     return setOpen((prev) => !prev)
    }
    return setOpen(false)
  }



  return (
    <div className="bg-[#d7d7b1] text-center ">
      <div className="w-[50%] mx-auto py-4">
        <img src={logo} alt="restaurant logo" className="mx-auto" />
      </div>
      {isMd && (
        <nav className="grid grid-cols-4 gap-1 w-1/2 mx-auto mt-5 py-4">
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
      )}
      {!isMd && (
        <button onClick={handleOpen}>
          <HiOutlineMenu className="text-[50px]" />
        </button>
      )}
      {
       !isMd && open && <NavBarSide />
      }
    </div>
  );
}
