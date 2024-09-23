import {useEffect} from "react";
import OrderCard from "../components/OrderCard";
//import axios from "axios"

import {useDispatch,useSelector} from 'react-redux'
import {getAllOrders,getALLOrder} from '../redux/orderSlice'

/*const order = [{
  _id: "66e73a668c6d45682d41fcc2",
  userId: "66e70f84ef783c048e111848",
  items: [
    {
      _id: "66e73a668c6d45682d41fcc3",
      itemId: {
        _id: "66d9a8230209f6c83f616730",
        image: {
          fileName: "Margherita Pizza.png",
          filePath:
            "https://res.cloudinary.com/dqf992hcs/image/upload/v1725540386/Menu%20Pizza/pczf5lsp63tu6pkulqku.png",
          fileSize: "3.13 MB",
        },
        name: "Meat Pizza",
        price: "89",
      },
      quantity: 3,
      itemtotalprice: 267,
    },
    {
      _id: "66e73a668c6d45682d41fcc4",
      itemId: {
        _id: "66c83850b8df0a42cd9670f5",
        image: {
          fileName: "Hawaiian Pizza.png",
          filePath:
            "https://res.cloudinary.com/dqf992hcs/image/upload/v1724397648/Menu%20Pizza/ms0ossco6nprnuy1oqta.png",
          fileSize: "3.2 MB",
        },
        name: "Hawaiian Pizza",
        price: "50",
      },
      quantity: 3,
      itemtotalprice: 150,
    },
    {
      _id: "66e73a668c6d45682d41fcc4",
      itemId: {
        _id: "66c83850b8df0a42cd9670f5",
        image: {
          fileName: "Hawaiian Pizza.png",
          filePath:
            "https://res.cloudinary.com/dqf992hcs/image/upload/v1724397648/Menu%20Pizza/ms0ossco6nprnuy1oqta.png",
          fileSize: "3.2 MB",
        },
        name: "Hawaiian Pizza",
        price: "50",
      },
      quantity: 3,
      itemtotalprice: 150,
    },
  ],
}]*/
 
const Orders = () => {
   //const [ordersData,setOrdersData]=useState([])

    const dispatch=useDispatch()
    const order=useSelector(getALLOrder)

   useEffect(()=>{
  
      dispatch(getAllOrders())

   },[dispatch])
  
  return (
    <div className="h-screen flex flex-col">
      <h2 className="text-white py-7">Your Orders</h2>
      <div className="flex-1 overflow-y-auto"> 
        <OrderCard orders={order} />
      </div>
    </div>
  );
};

export default Orders;



