import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [mobileActive,setMobileActive] = useState(false);
  return (
    <div className='header-maindiv'>
          <div className='leftside'>
                  <h3 className='header-title'>Keeper</h3>
          </div>
          <div className={`rightside ${mobileActive ? 'active':''}`}>
                 <div className='navigator'>
                      <Link href=''>Home</Link>
                      <Link href=''>Features</Link>
                      <Link href=''>Contact</Link>
                 </div>
          </div>
          <div className='mobile-menus' onClick={()=> setMobileActive(!mobileActive)}>{mobileActive ? <AiOutlineClose/>:<AiOutlineMenu/>}</div>
    </div>
  )
}
