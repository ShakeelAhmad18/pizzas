import {useState} from 'react'
import {useDispatch} from 'react-redux'
import axios from 'axios';
import { getAllOrders as getOrders } from '../redux/orderSlice';
import toast from 'react-hot-toast'

const useGetAllOrders=()=>{
    const [isLoading,setIsLoading]=useState(false)
    const dispatch=useDispatch()
    
    const getAllOrders=async ()=>{

        try{

            setIsLoading(true)

            const res=await axios.get('http://localhost:8000/api/order/getOrders',{withCredentials:true})
            const data=res.data;
            console.log(data);
            dispatch(getOrders(data))

        }catch(error){
            toast.error(error.messaage)
        }finally{
           setIsLoading(false)
        }
    }

    return {isLoading,getAllOrders}
}

export default useGetAllOrders