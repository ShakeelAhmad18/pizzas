import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const useGetTime = () => {
    const [isLoading,setIsLoading]=useState(false)
    const [time,setTime]=useState([]);

    const getTime=async({tableId,date})=>{
        try {

           setIsLoading(true);

            const res = await axios.post('http://localhost:8000/api/tablereservation/gettime',{tableId,date});
            const data = res.data;
            setTime(data);

         
        } catch (error) {

            toast.error(error.message);

        }finally{

            setIsLoading(false);

        }
    }

  return {getTime,time,isLoading}
}

export default useGetTime
