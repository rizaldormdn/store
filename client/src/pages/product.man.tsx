import React, { useEffect, useState } from 'react'
import Card from '../component/molecules/card'
import Navbar from '../component/organisms/navbar'
import sepatu1 from '../assets/sepatu1.jpg'
import Footer from '../component/organisms/footer'
import Axios from './fetch'

interface dataProduct {
  id: number
  title: string
  price: number
}

const ProductMan: React.FC = () => {
  const [products, setProducts] = useState<dataProduct[]>([])

  const getProduct = async () => {
    try {
      const result = await Axios.get('/products')
      setProducts(result.data)
      // console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getProduct()
  }, [])
  return (
    <>
      <Navbar />
      <div className='flex gap-10 flex-wrap mt-10 justify-center'>
        {/* <Card title={product.title} price={product.price} image={sepatu1} /> */}
        <Card title='Nike' price='Rp. 799.000' image={sepatu1} />
        <Card title='Nike' price='Rp. 799.000' image={sepatu1} />
        <Card title='Nike' price='Rp. 799.000' image={sepatu1} />
        <Card title='Nike' price='Rp. 799.000' image={sepatu1} />
        <Card title='Nike' price='Rp. 799.000' image={sepatu1} />
        <Card title='Nike' price='Rp. 799.000' image={sepatu1} />
        <Card title='Nike' price='Rp. 799.000' image={sepatu1} />
      </div>
      <Footer />
    </>
  )
}


export default ProductMan