import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Axios from '../api/api'


const Login: React.FC = () => {
     const navigate = useNavigate()
     const [email, setemail] = useState('')
     const [password, setPassword] = useState('')

     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault()
          try {
               const res = await Axios.post('/auth/login', { email, password })
               sessionStorage.setItem('access_token', res.data.access_token)
               navigate('/')
               return res;
          } catch (error) {
               console.log(error);
          }
     }
     return (
          <div>
               <div className='flex justify-center flex-wrap items-center gap-20 mt-[15%]'>
                    <div>
                         <h1 className='text-5xl font-bold'>Sign In to <br /> Start Shopping</h1>
                         <p className='text-sm mt-5'>don't have account ? <span onClick={() => navigate('/register')} className='cursor-pointer' >Sign Up</span></p>

                    </div>
                    <form onSubmit={handleSubmit} className='flex flex-col'>
                         <input
                              className='border w-96 h-10 border-gray-500 mt-5 py-1 rounded px-3 '
                              name='email'
                              type="email"
                              placeholder="Email"
                              value={email}
                              onChange={(e) => setemail(e.target.value)}
                         />

                         <input
                              className='border w-96 h-10 border-gray-500 mt-5 py-1 rounded px-3 '
                              name='password'
                              type="password"
                              placeholder="Password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                         />

                         <div className='flex mt-5 justify-between items-center'>
                              <button className='text-white bg-slate-600 p-1.5 rounded w-full'>Sign In</button>
                         </div>
                    </form>
               </div>
          </div >
     )
}

export default Login