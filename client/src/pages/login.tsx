import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../component/organisms/navbar'
import Axios from './fetch'


interface dataLogin {
     email: string
     password: string
}
const Login: React.FC = () => {
     const navigate = useNavigate()
     const [user, setUser] = useState<dataLogin>({
          email: '',
          password: ''
     })
     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault()
          try {
               const response = await Axios.post('/auth/login', user)
               console.log(response);
               navigate('/')
          } catch (error) {
               console.log(error);
          }
     }
     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          e.preventDefault()
          const { name, value } = e.target
          setUser({ ...user, [name]: value })
     }
     return (
          <div>
               <Navbar />
               <h1 className='text-center text-3xl mt-10'>Create Account</h1>
               <form onSubmit={handleSubmit} className='flex flex-col max-w-lg mx-auto mt-10 p-10'>
                    <input
                         className='border border-gray-500 mt-5 py-1 rounded px-3 '
                         name='email'
                         type="email"
                         placeholder="Email"
                         value={user.email}
                         onChange={handleChange}
                    />

                    <input
                         className='border border-gray-500 mt-5 py-1 rounded px-3 '
                         name='password'
                         type="password"
                         placeholder="Password"
                         value={user.password}
                         onChange={handleChange}
                    />

                    <div className='flex mt-5 justify-between items-center'>
                         <p className='text-sm'>don't have account ? <span onClick={() => navigate('/register')} className='cursor-pointer' >Sign Up</span></p>
                         <button className='text-white bg-slate-600 p-1.5 rounded'>Sign In</button>
                    </div>
               </form>
          </div >
     )
}

export default Login