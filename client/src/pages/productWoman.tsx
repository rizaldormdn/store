import React from 'react'
import Card from '../component/molecules/card'
import Navbar from '../component/organisms/navbar'
import sepatu2 from '../assets/sepatu2.jpg'
import Footer from '../component/organisms/footer'

function ProductWoman() {
     return (
          <div>
               <Navbar />
               <div className='flex gap-10 flex-wrap mt-10 justify-center'>
                    <Card title='vans' price='549.900' image={sepatu2}/>
                    <Card title='vans' price='549.900' image={sepatu2}/>
                    <Card title='vans' price='549.900' image={sepatu2}/>
                    <Card title='vans' price='549.900' image={sepatu2}/>
                    <Card title='vans' price='549.900' image={sepatu2}/>
                    <Card title='vans' price='549.900' image={sepatu2}/>
                    <Card title='vans' price='549.900' image={sepatu2}/>
                    <Card title='vans' price='549.900' image={sepatu2}/>
               </div>
               <Footer />
          </div>
     )
}
export default ProductWoman