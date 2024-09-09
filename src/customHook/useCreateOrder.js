import {useState} from 'react'
import toast from 'react-hot-toast'
import useGetOrder from '../customHook/useGetOrder'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {clearCart} from '../redux/cartSlice'

const useCreateOrder=()=>{

    const [isLoading,setIsLoading]=useState(false)
    const {getOrder}=useGetOrder()
    const dispatch=useDispatch()
    const navigate = useNavigate()

    const newOrder=async ({pizzaIds,address,phone,totalPrice})=>{
        
        console.log({pizzaIds,address,phone,totalPrice})

        if(!Array.isArray(pizzaIds)){
          return  toast.error('pizza Ids are not array')
        }

        if(!address || !phone || !totalPrice){
          return  toast.error('Fill All fields')
        }

        setIsLoading(true)

       try{
          
          const res=await axios.post('http://localhost:8000/api/order/createOrder',{pizzaIds,address,phone,totalPrice},{withCredentials:true})
          const data=res.data;
          getOrder(data._id)
          dispatch(clearCart())
          navigate(`/order/${data._id}`)
          
       }catch(error){
          toast.error(error.message)
       }finally{
          setIsLoading(false)
       }



    }

   return {newOrder,isLoading}
}


export default useCreateOrder