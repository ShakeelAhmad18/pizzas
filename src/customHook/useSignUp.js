import toast from 'react-hot-toast'
import {useState,useContext} from 'react'
import axios from 'axios';
import { UserContext } from "../context/UserContext"


const useSignUp=()=>{
    const [isLoading,setIsLoading]=useState(false)
    const {setAuthUser}=useContext(UserContext)
    const signUp=async ({name,email,password})=>{

        if(password.length < 6){
            return toast.error('Password Must be 6 character')
        }

        setIsLoading(true)

        try{
           const res=await axios.post('http://localhost:8000/api/user/registerUser',{name,email,password},{withCredentials:true})
           const data=res.data;
            localStorage.setItem('auth-user',JSON.stringify(data))
            setAuthUser(data)

            if(data.error){
                toast.error(data.error)
            }

        }catch(error){
            toast.error(error.message)
        }finally{
         setIsLoading(false)
        }
    }

    return {isLoading,signUp}

}

export default useSignUp