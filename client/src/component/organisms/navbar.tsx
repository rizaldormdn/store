import React, { } from 'react'
import { FaCartArrowDown } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Navbar: React.FC = () => {
     return (
          <div className='flex justify-around items-center shadow-lg p-5'>
               <ul className=''>
                    <li className=''>
                         <NavLink
                              className='px-5 text-slate-500'
                              to='/'>STORE
                         </NavLink>
                         <NavLink className='px-2'
                              to="/">Home
                         </NavLink>
                         <NavLink
                              className='px-2'
                              to="/product-man">Men
                         </NavLink>
                         <NavLink className='px-2'
                              to="/product-woman">Woman
                         </NavLink>
                         <input type="text"
                              placeholder='search product by name'
                              className='w-66 h-6 border border-gray-400 rounded-lg px-3'
                         />
                    </li>
               </ul>
               <ul>
                    <li className='flex items-center gap-5'>
                         <NavLink className='text-2xl' to='/cart'><FaCartArrowDown /></NavLink>
                         <NavLink className='px-3 rounded bg-slate-500 text-white p-1' to='/Login'>Logout</NavLink>
                    </li>
               </ul>
          </div >
     )
}

export default Navbar