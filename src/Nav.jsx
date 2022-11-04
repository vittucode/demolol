import React from 'react'
import { GrMenu } from 'react-icons/gr'
import { NavLink } from 'react-router-dom'
const Nav = () => {
    return (<>
        <div className='bg-white shadow-md'>
            <div className='container mx-auto flex justify-between items-center py-4 lg:px-14 md:px-8 px:6  '>
                <NavLink to="/" className='w-28'>
                    <img className='' src="https://usd-service.vercel.app/static/media/Logo.a7213fc7e29b020ad256.png" alt="" />
                </NavLink>
                <div className='flex gap-7 items-center md:flex hidden text-sm '>
                    <NavLink to="/" className='hover:text-red-500 cursor-pointer'>HOME</NavLink>
                    <NavLink to="/about" className='hover:text-red-500 cursor-pointer'>ABOUT</NavLink>
                    <NavLink to="/service" className='hover:text-red-500 cursor-pointer'>SERVICE</NavLink>
                    <h2 className='hover:text-red-500 cursor-pointer'>OUR CLIENT</h2>
                    <h2 className='hover:text-red-500 cursor-pointer'>BLOG</h2>
                    <h2 className='hover:text-red-500 cursor-pointer'>CAREER</h2>
                </div>
                <NavLink to="/Contact" className='md:flex hidden'>
                    <button className='bg-red-500 text-white  py-1 px-5 rounded-md hover:bg-gray-800'>CONTACT US</button>
                </NavLink>
                <div className='lg:hidden'>
                    <GrMenu />
                </div>
            </div>
        </div>
        </>
    )
}
export default Nav