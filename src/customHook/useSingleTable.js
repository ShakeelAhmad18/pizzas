import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const useSingleTable = () => {

     const [singleTable,setSingleTable]=useState([])
     const [loading,setLoading]=useState(false)

    const getSingleTable = async (id) => {

        try {

            setLoading(true);
            const res = await axios.get(`http://localhost:8000/api/table/getTable/${id}`);
            const data = res.data;
            setSingleTable(data);

        } catch (error) {
            toast.error(error.message);
        }finally{
            setLoading(false);
        }
    }

  return {getSingleTable,singleTable,loading}
}

export default useSingleTable
