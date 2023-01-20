import React, { useEffect, useState } from 'react'
import men from '../../assets/men.jpg'
import woman from '../../assets/woman.jpg'
import { useNavigate } from 'react-router-dom'


const Header = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className='mt-10'>
        <div className='flex flex-row-reverse justify-evenly items-center flex-wrap'>
          <img src={men} alt="" className='w-1/4' />
          <div>
            <p className='w-[500px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam similique voluptate vero eaque cum reprehenderit.
              Fugiat aliquid tempore, quis laborum sapiente beatae quasi maxime aspernatur rerum deserunt architecto porro quam.</p>
            <button onClick={e => navigate('product-man')} className='border bg-slate-500 p-2 mt-3 text-white rounded'>Men</button>
          </div>
        </div>
        <div className='flex items-center justify-evenly flex-wrap'>
          <img src={woman} alt="" className='w-1/4' />
          <div>
            <p className='w-[500px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam similique voluptate vero eaque cum reprehenderit.
              Fugiat aliquid tempore, quis laborum sapiente beatae quasi maxime aspernatur rerum deserunt architecto porro quam.</p>
            <button onClick={e => navigate('product-woman')} className='border bg-slate-500 p-2 mt-3 text-white rounded'>Woman</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header