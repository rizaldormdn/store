import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
     return (
               <div className='flex justify-between items-center shadow-lg p-5'>
                    <ul className=''>
                         <li className=''>
                              <NavLink className='px-5' to='/'>SHOE STORE</NavLink>
                         </li>
                    </ul>
                    <ul>
                         <li>
                              <NavLink className='px-2' to="/">New Arival</NavLink>
                              <NavLink className='px-2' to="/product-man">Men</NavLink>
                              <NavLink className='px-2' to="/product-woman">Woman</NavLink> 
                              <input type="text" className='w-96 h-6 border border-gray-400 rounded px-3' />

                         </li>
                    </ul>
                    <ul>
                         <li className=''>
                              <NavLink className='px-3 rounded hover:bg-slate-500 hover:text-white p-1' to='/Login'>Log In</NavLink>
                              <NavLink className='px-3 rounded hover:bg-slate-500 hover:text-white p-1' to='/Register'>Register</NavLink>
                         </li>
                    </ul>
               </div>
     )
}

export default Navbar