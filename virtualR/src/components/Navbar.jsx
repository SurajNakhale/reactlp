 import React from 'react'
 import { useState } from 'react';
 import { Menu, X } from 'lucide-react';
import logo from "../assets/logo.png";
import {navItems} from "../constants/index.jsx"
const Navbar = () => {

    const [menuopen, setmenuopen] = useState(false);

    const toggleNavbar = ()=>{
         setmenuopen(!menuopen);
    }
    
  return (
    <nav className='fixed w-full top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80'>
        <div className='container px-4 mx-auto relative lg:text:sm'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center flex-shrink-0'>
                    <img className='h-10 w-10 mr-2' src={logo} alt='logo'></img>
                    <span className='text-xl tracking-tight'>virtualR</span>
                </div>
                <ul className='hidden lg:flex ml-14 space-x-12'>
                        <li><a href='#'>Feature</a></li>
                        <li><a href='#'>Workflow</a></li>
                        <li><a href='#'>Pricing</a></li>
                        <li><a href='#'>Testimonials</a></li>
                </ul>
                <div className='hidden lg:flex justify-center space-x-12 items-center'>
                    <a href='#' className='py-2 px-3 border rounded-md '>Sign in</a>
                    <a href='#' className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'>Create an account</a>
                </div>
                <div className='lg:hidden md:flex flex-col justify-end'>
                    <button onClick={toggleNavbar}>
                        {menuopen ? <X />: <Menu />}
                    </button>
                </div>
            </div>
            {menuopen && (
            <div className='fixed right-0 z-20 bg-neutral-800 w-full flex flex-col justify-center items-center lg:hidden'>
                <ul className='w-full text-center'>
                  <li className='py-2'><a href='#'>Freature</a></li>
                  <li className='py-2'><a href='#'>Workflow</a></li>
                  <li className='py-2'><a href='#'>Pricing</a></li>
                  <li className='py-2'><a href='#'>Testimonials</a></li>
                    
                </ul>
                <div className='flex space-x-4'>
                  <a href='#' className='py-1 px-3 border rounded-md hover:bg-neutral-900'>Sign in</a>
                  <a href='#' className='py-1 px-3 border rounded-md bg-gradient-to-r from-orange-500 to-orange-900'>Create an account</a>
                </div>
            </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar


