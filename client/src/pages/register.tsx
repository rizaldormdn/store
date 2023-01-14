import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../component/organisms/navbar'
import Axios from './fetch'


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
               navigate('/')
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
               <Navbar />
               <h1 className='text-center text-3xl mt-10'>Create Account</h1>
               <form onSubmit={register} className='flex flex-col max-w-lg mx-auto mt-10 p-10'>
                    <input
                         type="text"
                         name='username'
                         required placeholder="Name"
                         value={user.username}
                         onChange={handleChange}
                         className='border border-gray-500 mt-5 py-1 rounded px-3 '
                    />
                    <input
                         type="email"
                         name='email'
                         required
                         placeholder="Email"
                         value={user.email}
                         onChange={handleChange}
                         className='border border-gray-500 mt-5 py-1 rounded px-3 '
                    />
                    <input
                         type="password" name='password'
                         required
                         placeholder="Password"
                         value={user.password}
                         onChange={handleChange}
                         className='border border-gray-500 mt-5 py-1 rounded px-3 '
                    />
                    <div className='flex mt-5 justify-between items-center'>
                         <p className='text-sm'>don't have account ? <span onClick={() => navigate('/login')} className='cursor-pointer'>Sign In</span></p>
                         <button type='submit' className='text-white bg-slate-600 p-1.5 rounded'>Sign Up</button>
                    </div>
               </form>
          </div >
     )
}

export default Register

