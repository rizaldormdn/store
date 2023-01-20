import React from 'react'
import Navbar from '../component/organisms/navbar'
import sepatu1 from '../assets/sepatu1.jpg'
import { FaTrashAlt } from 'react-icons/fa'



function Cart() {
  return (
    <>
      <Navbar />
      <h1 className='mt-10 mb-10 font-bold text-xl'>Keranjang</h1>
      <div className='flex justify-center flex-wrap gap-5'>
        <div className='flex p-2 justify-evenly items-center border shadow-lg w-[50%]'>
          <input className='' type="checkbox" name="" id="" />
          <img src={sepatu1} alt="" className='w-[80px] h-[80px]' />
          <div>
            <h1 className='font-bold'>Title</h1>
            <h2>Converse high 70s</h2>
          </div>
          <div className=''>
            <p className='font-bold'>Size</p>
            <p>39</p>
          </div>
          <div>
            <p className='font-bold'>Price</p>
            <p>Rp899.000</p>
          </div>
          <div className='flex flex-col items-center '>
            <div>
              <p className='font-bold'>quantity</p>
            </div>
            <div className='flex gap-5 text-xl'>
              <button>-</button>
              <span>0</span>
              <button>+</button>
            </div>
          </div>
          <div>
            <p className='font-bold'>Total</p>
            <p>Rp1.999.000</p>
          </div>
          <button><FaTrashAlt /></button>
        </div>

        <div>
          <div className='border p-5 w-[350px]'>
            <h2>Ringkasan belanja</h2>
            <div className='flex justify-between mt-10 mb-6'>
              <p>Total harga</p>
              <p>Rp0</p>
            </div>
            <button className='bg-black w-full text-white'>Checkout</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart