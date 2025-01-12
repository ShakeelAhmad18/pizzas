import { createContext, useState } from "react";


export const SelectReservationContext=createContext();


export const SelectReservationContextProvider=({children})=>{

    const [selectData,setSelectData]=useState(JSON.parse(localStorage.getItem('Data')) || null)
   
    const clearData=()=>{
        localStorage.removeItem('Data')
        setSelectData(null)
    }
     
    return (
        <SelectReservationContext.Provider
         value={{
           selectData,
           selectData,
           clearData
         }}
        >
          {children}
        </SelectReservationContext.Provider>
    )
         
}