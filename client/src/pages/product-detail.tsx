import React, { } from 'react'
import men from '../assets/men.jpg'
import Footer from '../component/organisms/footer'
import Navbar from '../component/organisms/navbar'

function ProductDetail() {
     return (
          <div>
               <Navbar />
               <div className='flex gap-20 justify-center mt-28 flex-wrap'>
                    <div>
                         <img src={men} alt="" className='w-[450px]' />
                    </div>
                    <div>
                         <div>
                              <h1 className='font-xl'>Vans old skool</h1>
                              <p className='mt-5'>Rp. 799.000</p>
                         </div>
                         <div className='mt-10'>
                              <h2>Size</h2>
                              <div className='flex gap-7 mt-2'>
                                   <p className='border p-3 cursor-pointer hover:bg-slate-600 hover:text-white'>S</p>
                                   <p className='border p-3 cursor-pointer hover:bg-slate-600 hover:text-white'>M</p>
                                   <p className='border p-3 cursor-pointer hover:bg-slate-600 hover:text-white'>L</p>
                                   <p className='border p-3 cursor-pointer hover:bg-slate-600 hover:text-white'>XL</p>
                              </div>
                         </div>
                         <div className='mt-10'>
                              <h2>Quantity</h2>
                              <div className='flex gap-7'>
                                   <button className='border p-3 cursor-pointer hover:bg-slate-600 hover:text-white'>-</button>
                                   <p className='border p-3'>1</p>
                                   <button className='border p-3 cursor-pointer hover:bg-slate-600 hover:text-white'>+</button>
                              </div>
                              <div className='mt-10'>
                                   <button className='border p-2 w-96 bg-slate-600 text-white'>ADD TO CART</button>
                              </div>
                              <div className='w-[450px] mt-10'>
                                   <h2>Description</h2>
                                   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda harum officia,
                                        doloremque culpa ex nobis a pariatur unde aliquam architecto nostrum, quae laborum nulla quibusdam aperiam mollitia, iusto possimus adipisci.</p>
                              </div>
                         </div>
                    </div>
               </div>
               <Footer />
          </div>
     )
}

export default ProductDetail