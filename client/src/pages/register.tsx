import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Axios from '../api/api'


interface dataregister {
     username: string
     email: string
     password: string
}

const Register: React.FC = () => {
     const navigate = useNavigate()
     const [user, setUser] = useState<dataregister>({
          username: '',
          email: '',
          password: ''
     })
     const register = async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault()
          try {
               const response = await Axios.post('/auth/register', user)
               navigate('/login')
               return console.log(response);
          } catch (err) {
               console.log(err);
          }
     }
     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          e.preventDefault()
          const { name, value } = e.target
          setUser({ ...user, [name]: value })
     }
     return (
          <div>
               <div className='flex justify-center flex-wrap items-center gap-20 mt-[15%]'>
                    <div>
                         <h1 className='text-5xl font-bold'>Sign Up to <br /> Start Shopping</h1>
                         <p className='text-sm mt-5'>have account ? <span onClick={() => navigate('/login')} className='cursor-pointer' >Sign In</span></p>

                    </div>
                    <form onSubmit={register} className='flex flex-col'>
                         <input
                              type="text"
                              name='username'
                              required placeholder="Name"
                              value={user.username}
                              onChange={handleChange}
                              className='border w-96 h-10 border-gray-500 mt-5 py-1 rounded px-3 '
                         />
                         <input
                              type="email"
                              name='email'
                              required
                              placeholder="Email"
                              value={user.email}
                              onChange={handleChange}
                              className='border w-96 h-10 border-gray-500 mt-5 py-1 rounded px-3 '
                         />
                         <input
                              type="password" name='password'
                              required
                              placeholder="Password"
                              value={user.password}
                              onChange={handleChange}
                              className='border w-96 h-10 border-gray-500 mt-5 py-1 rounded px-3 '
                         />
                         <div className='flex mt-5 justify-between items-center'>
                              <button type='submit' className='text-white bg-slate-600 w-full p-1.5 rounded'>Sign Up</button>
                         </div>
                    </form>
               </div>
          </div >
     )
}

export default Register

