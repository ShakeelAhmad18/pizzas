import axios from "axios"


export const getMenu=async ()=>{
    
   try {

     const res=await axios.get('http://localhost:8000/api/pizza/menu')
     return res.data;

   } catch (error) {
    console.log(error.message)
   }
}