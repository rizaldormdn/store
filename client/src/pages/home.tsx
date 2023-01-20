import React, { useState, useEffect } from "react"
import Footer from "../component/organisms/footer"
import Navbar from "../component/organisms/navbar"
import Axios from '../api/api'
import { useNavigate } from 'react-router-dom'
import { FaRegHeart } from 'react-icons/fa'
import sepatu1 from '../assets/sepatu1.jpg'

interface product {
  id: number
  title: string
  description: string
  price: number
}

const Home = () => {
  const navigate = useNavigate()
  const [products, setProducts] = useState<product[]>([])

  const getProduct = async () => {
    try {
      const res = await Axios.get('/products')
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
    <div className="">
      <Navbar />
      <div className='grid grid-cols-4 place-content-center gap-4 w-[70%] m-auto mt-10 p-2 '>
        {products.map((product) => (
          <div key={product.id} className='p-2 shadow-lg rounded border w-[300px] ml-4'>
            <img src={sepatu1} alt="" className='w-[280px] h-[250px] rounded ' />
            <div className='flex justify-between mt-2'>
              <h1 className='font-bold'>{product.title}</h1>
              <button className='text-xl'><FaRegHeart /></button>
            </div>
            <p className='font-bold mt-2'>{'Rp' + product.price}</p>
            {/* <p>{product.description}</p> */}
            {/* <button onClick={() => navigate('/product-detail')} className='bg-slate-500 w-full rounded text-white'>Detail</button> */}
          </div>
        ))
        }
      </div>
      <Footer />
    </div>
  )
}

export default Home