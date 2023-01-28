import React, { useState, useEffect } from 'react'
import Navbar from '../component/organisms/navbar'
import dress1 from '../assets/dress1.jpg'
import Footer from '../component/organisms/footer'
import { useNavigate } from 'react-router-dom'
import Axios from '../api/api'
import { FaRegHeart } from 'react-icons/fa'



interface product {
     id: number
     title: string
     description: string
     price: number
     image: string
}

function ProductWoman() {
     const navigate = useNavigate()
     const [products, setProducts] = useState<product[]>([])

     const getProduct = async () => {
          try {
               const res = await Axios.get('/products/category?category=wanita')
               if (Array.isArray(res.data)) {
                    return setProducts(res.data)
               } else {
                    setProducts(Object.values(res.data.data))
               }
          } catch (error) {
               console.log(error);
          }
     }
     useEffect(() => {
          getProduct()
     }, [])
     return (
          <div>
               <Navbar />
               <div className="min-h-[100vh]">
                    <div onClick={() => navigate('/product-detail')} className='flex mt-10 flex-wrap cursor-pointer'>
                         {products.map((product) => (
                              <div key={product.id} className='p-2 shadow-lg rounded-xl border w-[300px] ml-4'>
                                   <img src={dress1} alt="" className='w-[280px] h-[250px] rounded ' />
                                   <div className='flex justify-between mt-2'>
                                        <h1 className='font-bold'>{product.title}</h1>
                                        <button className='text-xl'><FaRegHeart /></button>
                                   </div>
                                   <p className='font-bold mt-2'>{'Rp' + product.price}</p>
                              </div>
                         ))
                         }
                    </div>
               </div>
               <Footer />
          </div>
     )
}
export default ProductWoman