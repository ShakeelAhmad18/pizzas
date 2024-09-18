import {useState,useContext} from 'react'
import Navbar from '../components/Navbar'
import {useSelector} from 'react-redux'
import { getCart, getTotalPrice } from '../redux/cartSlice'
import useCreateOrder from '../customHook/useCreateOrder'
import Spinner from '../components/Spinner'
import { UserContext } from '../context/UserContext'
import {BookingConfirmationEmail} from '../services/sendConfirmationEmail'

const CreateOrder = () => {

   const {newOrder:NewOrder,isLoading}=useCreateOrder()
    const [input,setInput]=useState({
        name:'',
        address:'',
        phone:'',
    })
     const {authUser}=useContext(UserContext)

    const cart=useSelector(getCart)
    const totalPrice=useSelector(getTotalPrice);

    const timestampPart = Date.now().toString().slice(-4); // Last 6 digits of the timestamp
    const randomPart = Math.random().toString(36).substring(2,4).toUpperCase();
    const orderNo= `ORD-${timestampPart}-${randomPart}`

    console.log(cart)

    const formData={
      items:cart,
      user_name:authUser.name,
      user_email:authUser.email,
      orderNo,
      totalPrice
    }

    

    if(isLoading) return <Spinner/>

    const handlePlaceOrder=async (e)=>{
        e.preventDefault()
       

        const newOrder={
          items:cart.map((item)=>({
            itemId:item.pizzaId,
            quantity:item.quantity,
            itemtotalprice:item.price * item.quantity
          })),
          orderNo,
          phone:input.phone,
          address:input.address,
          totalPrice
        }

       NewOrder(newOrder)
       BookingConfirmationEmail(formData)
       setInput({});

    }

  return (
    <div className='bg-gray-200 h-screen py-9'>
        <Navbar/>
        <h2 className='flex py-3 px-6 text-xl font-semibold items-start mt-6'>Ready to order? Let's go</h2>
        <form className='mt-16' onSubmit={handlePlaceOrder}>
     <div className='mb-5 flex flex-col gap-2 sm:flex-row sm:items-center'>
                 <label className='sm:basis-40'>First Name</label>
                 <input className='input grow mr-6 ml-6' value={input.name} onChange={(e)=>setInput({...input,name:e.target.value})}  type="text" name="customer" required />
                </div>
                 <div className='mb-5 flex flex-col gap-2 sm:flex-row sm:items-center'>
                   <label className='sm:basis-40 '>Phone Number</label>
                 <div className='grow mr-6 ml-6'>
                    <input className='input w-full' value={input.phone} onChange={(e)=>setInput({...input,phone:e.target.value})} type="tel" name="phone" required/>
                    {<p className='mt-2 rounded-md bg-red-100 text-xs text-red-700'>{''}</p>}
                 </div>
                </div>
           
                <div className='relative mb-5 flex flex-col gap-2 sm:flex-row sm:items-center'>
                  <label className='sm:basis-40'>Address</label>
                  <div className='grow mr-6 ml-6'>
                    <input className='input w-full' value={input.address} onChange={(e)=>setInput({...input,address:e.target.value})} type="text" name="address" required />
                  </div>
                </div>
                <div>
                <input type="hidden" name='cart' value={JSON.stringify(cart)} />
                <button className="btn btn-primary">Place Order ${totalPrice}</button>
                </div>
           </form>
    </div>
  )
}

export default CreateOrder
