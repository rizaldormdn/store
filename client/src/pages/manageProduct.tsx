import React, { useEffect, useState } from 'react'

const ManageProduct = () => {
     const [product, setProduct] = useState({
          title: '',
          description: '',
          price: 0,
          stock: 0,
          image: ''
     })
     const [admin, setAdmin] = useState(false)

     useEffect(() => {
          const token = sessionStorage.getItem('access_token')
     })
     return (
          <>
               <input type="text"
                    className=''
               />
               <input type="text"
                    className=''
               />
               <input type="number"
                    className=''
               />
               <input type="number"
                    className=''
               />
               <input type="image" alt=''
                    className=''
               />
          </>
     )
}

export default ManageProduct