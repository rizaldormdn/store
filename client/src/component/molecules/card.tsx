import React from 'react'
import { NavLink } from 'react-router-dom'


const Card = (props: any) => {
     return (
          <div>
               <div className='flex gap-10 flex-wrap mt-10 justify-center'>
                    <NavLink to='/product-detail'>
                         <div className='w-[350px]'>
                              <img src={props.image} alt="" className='w-[350px]' />
                              <h1>{props.title}</h1>
                              <p>{props.price}</p>
                         </div>
                    </NavLink>
               </div>
          </div >
     )
}

export default Card