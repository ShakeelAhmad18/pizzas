import axios from 'axios'
import toast from 'react-hot-toast'

export const BookingConfirmationEmail=async (formData)=>{

    try{
       const res=await axios.post('http://localhost:8000/api/order/sendEmail',formData)
       return res.data;
       
    }catch(error){
       const message=(error.response && error.response.data && 
           error.response.data.message) || error.message || error.toString();
           toast.error(message)
           throw new Error(message);
    }
}
