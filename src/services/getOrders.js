import axios from 'axios'

export const getOrders=async ()=>{

    const res=await axios.get('http://localhost:8000/api/order/getOrders',{withCredentials:true})
    const data=res.data;
    return data;
    
}