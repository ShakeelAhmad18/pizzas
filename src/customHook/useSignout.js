import {useState,useContext} from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { UserContext } from '../context/UserContext'


const useSignout=()=>{

    const [isLoading,setIsLoading]=useState(false)
    const {setAuthUser}=useContext(UserContext)

    const signout=async ()=>{

        setIsLoading(true)
        try{
            
            const response=await axios.get('http://localhost:8000/api/user/logout')
            localStorage.removeItem('auth-user')
            const message= response.data.message
            toast.success(message)
            setAuthUser(null)

        }catch(error){

          toast.error(error.message)

        }finally{
           setIsLoading(false)
        }
    }

   return {signout,isLoading}
}


export default useSignout;