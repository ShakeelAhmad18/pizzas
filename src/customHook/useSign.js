import axios from "axios"
import { useContext, useState } from "react"
import toast from "react-hot-toast"
import { UserContext } from "../context/UserContext"

const useSign = () => {
     const [isLoading,setIsLoading]=useState(false)
     const {setAuthUser}=useContext(UserContext)
    
     const login=async ({email,password})=>{
      
        console.log(password)
        
        if(password.length < 6){
            return toast.error('Password must be 6 character')
        }

        setIsLoading(true)
         try {

            const res=await axios.post('http://localhost:8000/api/user/loginUser',{email,password},{withCredentials:true})
            const data=res.data;
            localStorage.setItem('auth-user',JSON.stringify(data))
            setAuthUser(data)
            if(data){
            toast.success('Login Successfully')
            }
            

         } catch (error) {

            toast.error(error.message)

         }finally{
            setIsLoading(false)
         }
     }

     return {login,isLoading}

}

export default useSign
