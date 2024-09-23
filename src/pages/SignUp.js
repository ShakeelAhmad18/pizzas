import React from 'react'
import { Link } from 'react-router-dom'
import {useState} from 'react'
import useSignUp from '../customHook/useSignUp'
import Spinner from '../components/Spinner'
import toast from 'react-hot-toast'
 
const SignUp = () => {
  const {isLoading,signUp}=useSignUp()
  const [input,setInput]=useState({
    name:'',
    email:'',
    password:''
  })

  

  if(isLoading) return <Spinner/>

  const handleSignUp=(e)=>{
    e.preventDefault()

    signUp(input)
    setInput({})
    toast.success("Sign Up Successfully")

  }


  return (
    <div className="p-4 h-screen w-32 flex flex-col items-center justify-center min-w-96 mx-auto overflow-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-green-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-center text-xl text-black font-semibold ">Sign Up</h1>
        <div className='flex items-center justify-center mb-4 mt-2'>
          <img src='/logo.png' className='w-16 h-16 rounded-full' alt='logo'/>
        </div>
        <form onSubmit={handleSignUp}>
            <label className="label p-2">
              <span className="label-text text-base">Full Name</span>
            </label>
            <input type="text" placeholder="Enter Fullname..."  value={input.name} onChange={(e)=>setInput({...input,name:e.target.value})} className="w-full input input-bordered"/>
            <label className="label p-2">
              <span className="label-text text-base">Email</span>
            </label>
            <input type="text" placeholder="Enter Email..."  value={input.email} onChange={(e)=>setInput({...input,email:e.target.value})} className="w-full input input-bordered"/>
            <label className="label p-2">
              <span className="label-text text-base">Password</span>
            </label>
            <input type="password" placeholder="Enter Password..."  value={input.password} onChange={(e)=>setInput({...input,password:e.target.value})}  className="w-full input input-bordered"/>
            <div>
                <button className="btn btn-sm btn-block mt-4">Sign Up</button>
            </div>
            <Link to="/login" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">Already have an account</Link>
        </form>
      </div>
    </div>
  )
}

export default SignUp
