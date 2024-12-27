import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const useGetTable = () => {
    const [table, setTable] = useState([]);
    const [loading, setLoading] = useState(false);
    //const [error, setError] = useState(null);
    const getTable=async ()=>{

          try {

            setLoading(true);
            const res= await axios.get("http://localhost:8000/api/table/getTables");
            const data = res.data;
            setTable(data);


          } catch (error) {

            toast.error(error.message);

          }finally{

            setLoading(false);

          }
    }

    return{getTable,table,loading}
}

export default useGetTable;