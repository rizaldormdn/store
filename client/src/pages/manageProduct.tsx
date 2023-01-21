import React, { useEffect, useState } from 'react'
import Axios from '../api/api'

interface product {
     title: string
     description: string
     price: number
     stock: number
     image: File
}

const ManageProduct = () => {
     const [title, setTitle] = useState('')
     const [description, setDescription] = useState('')
     const [price, setPrice] = useState('')
     const [stock, setStock] = useState('')
     const [image, setImage] = useState(null)

     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault()
          try {
               const res = await Axios.post('/products', { title, description, price, stock, image })
               console.log(res.data);

          } catch (error) {
               console.log(error);

          }
     }

     useEffect(() => {
     })
     return (
          <>
               <form onSubmit={handleSubmit} className='flex flex-col w-[350px] m-auto mt-[10%]'>
                    <label htmlFor="" className='font-bold mt-2 mb-2'>Title</label>
                    <input type="text"
                         value={title}
                         onChange={e => setTitle(e.target.value)}
                         className='border border-slate-500'
                    />
                    <label htmlFor="" className='font-bold mt-2 mb-2'>Description</label>

                    <input type="text"
                         value={description}
                         onChange={e => setDescription(e.target.value)}
                         className='border border-slate-500'
                    />
                    <label htmlFor="" className='font-bold mt-2 mb-2'>Price</label>

                    <input type="number"
                         value={price}
                         onChange={e => setPrice(e.target.value)}
                         className='border border-slate-500'
                    />
                    <label htmlFor="" className='font-bold mt-2 mb-2'>Stock</label>

                    <input type="number"
                         value={stock}
                         onChange={e => setStock(e.target.value)}
                         className='border border-slate-500'
                    />
                    <label htmlFor="" className='font-bold mt-2 mb-2'>Image</label>

                    <input type="file" alt=''
                         className='border border-slate-500'
                    />
                    <button className='w-full bg-black text-white mt-3 p-1'>Create</button>
               </form>
          </>
     )
}

export default ManageProduct