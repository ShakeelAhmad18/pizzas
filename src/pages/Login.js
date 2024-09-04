import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useSign from '../customHook/useSign'
import Spinner from '../components/Spinner'
import toast from 'react-hot-toast'

const Login = () => {
   const {isLoading,login}=useSign()

  const [input,setInput]=useState({
    email:'',
    password:''
  })

  const loginWithGoogle=(e)=>{
    e.preventDefault()
    window.open('http://localhost:8000/api/auth/callback/google','_self')
  }


  const handleSubmit=async (e)=>{
     e.preventDefault()
     login(input)
     setInput({})
     toast.success('Login Successfully')
  }
  
  
  return (
    <div className="p-4 w-full h-screen flex flex-col items-center justify-center mx-auto">
      <div className="w-full max-w-md p-6 rounded-lg shadow-md bg-green-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-center text-xl text-black font-semibold mb-4">Login</h1>
        {isLoading && <Spinner/>}
        <div className='flex items-center justify-center mb-4'>
          <img src='/logo.png' className='w-16 h-16 rounded-full' alt='logo'/>
        </div>
        
        <form onSubmit={handleSubmit}>
          <label className="label p-2">
            <span className="label-text text-base">Email</span>
          </label>
          <input type="text" placeholder="Enter Email..." className="w-full input input-bordered" value={input.email} onChange={(e)=>setInput({...input,email:e.target.value})}/>
          
          <label className="label p-2">
            <span className="label-text text-base">Password</span>
          </label>
          <input type="password" placeholder="Enter Password..." className="w-full input input-bordered" value={input.password} onChange={(e)=>setInput({...input,password:e.target.value})}/>
          
          <div>
            <button className="btn btn-sm btn-block mt-4">Login</button>
          </div>
         
          <Link to="/signup" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">Don&apos;t have an account?</Link>
          
          <div className="my-4 flex items-center">
            <div className="flex-grow h-px bg-gray-400"></div>
            <span className="mx-2 text-gray-500">or</span>
            <div className="flex-grow h-px bg-gray-400"></div>
          </div>

          <button className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-100" onClick={loginWithGoogle}>
            <img src="/google.png" alt="Google logo" className="w-5 h-5 mr-2"/>
            Login with Google
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
