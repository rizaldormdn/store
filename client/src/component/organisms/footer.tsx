import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
     return (
          <footer className='mt-20'>
               <hr className='border-gray-300 mb-5' />
               <div className='flex justify-around mb-5'>
                    <ul className=''>
                         <h1 className='mb-4 font-bold'>About Us</h1>
                         <li className='flex flex-col'>
                              <NavLink to={'#'}>Company Profile</NavLink>
                              <NavLink to={'#'}>Privacy Policy</NavLink>
                              <NavLink to={'#'}>Contact Us</NavLink>
                         </li>
                    </ul>
                    <ul className=''>
                         <h1 className='mb-4 font-bold'>Customer Care</h1>
                         <li className='flex flex-col'>
                              <NavLink to={'#'}>FAQ</NavLink>
                              <NavLink to={'#'}>Privacy Policy</NavLink>
                              <NavLink to={'#'}>Contact Us</NavLink>
                         </li>
                    </ul>
                    <ul className=''>
                         <h1 className='mb-4 font-bold'>Shopping Guide</h1>
                         <li className='flex flex-col'>
                              <NavLink to={'#'}>FAQ</NavLink>
                              <NavLink to={'#'}>Privacy Policy</NavLink>
                              <NavLink to={'#'}>Contact Us</NavLink>
                         </li>
                    </ul>
               </div>
               <hr className='border-gray-300' />
               <p className='text-xs font-semibold mb-3 ml-3'>&copy; 2023 Shoe Store. All right reserved</p>
          </footer >
     )
}

export default Footer