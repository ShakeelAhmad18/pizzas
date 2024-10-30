import {useState} from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'

const useBookedTable=()=>{
    const [isLoading,setIsLoading]=useState(false)
    const bookedTable=async ({name,email,phone,Time,date,persons})=>{

        try{

        if(!name || !email || !phone || !Time || !date || !persons){
            return toast.error('Please Fill All Fileds')
        }
         setIsLoading(true)
        const res=await axios.post('http://localhost:8000/api/table/createTableBooking',{name,email,phone,Time,date,persons},{withCredentials:true})
        const data=res.data;

        if(data){
            toast.success('Table Booked Successfully')
        }

        
    }catch(err){
        toast.error(err.message)
    }finally{
        setIsLoading(true)
    }
         
    }


    return {bookedTable,isLoading}
}

export default useBookedTable;