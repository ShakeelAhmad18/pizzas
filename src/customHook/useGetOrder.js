
import {useState} from 'react'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import { addOrder } from '../redux/orderSlice';
import toast from 'react-hot-toast'


const useGetOrder=()=>{

    const [isLoading,setIsLoading]=useState(false);
    const dispatch=useDispatch();


    const getOrder=async (id)=>{

        setIsLoading(true)

        try{

            const res=await axios(`http://localhost:8000/api/order/getorder/${id}`,{withCredentials:true})
            const data=res.data;
            dispatch(addOrder(data))

        }catch(error){
            toast.error(error.message)
        }finally{
            setIsLoading(false)
        }
    }

    return {getOrder,isLoading}
   
}

export default useGetOrder;