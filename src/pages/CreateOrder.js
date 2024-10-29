import {useState,useContext,useEffect} from 'react'
import Navbar from '../components/Navbar'
import {useSelector} from 'react-redux'
import { getCart, getTotalPrice } from '../redux/cartSlice'
import useCreateOrder from '../customHook/useCreateOrder'
import Spinner from '../components/Spinner'
import { UserContext } from '../context/UserContext'
import {BookingConfirmationEmail} from '../services/sendConfirmationEmail'
import Footer from '../components/Footer'
import {Link} from 'react-router-dom'
import toast from 'react-hot-toast'

const CreateOrder = () => {

   const {newOrder:NewOrder,isLoading}=useCreateOrder()
    const [input,setInput]=useState({
        Fname:'',
        Lname:'',
        address:'',
        phone:'',
    })
     const {authUser}=useContext(UserContext)


     useEffect(()=>{
      window.scrollTo(0,0);
     },[])

    const cart=useSelector(getCart)
    const totalPrice=useSelector(getTotalPrice);

    const timestampPart = Date.now().toString().slice(-4); // Last 6 digits of the timestamp
    const randomPart = Math.random().toString(36).substring(2,4).toUpperCase();
    const orderNo= `ORD-${timestampPart}-${randomPart}`

    
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

      if(cart.length === 0){
        return toast.error('Your Cart is Empty')
      }

        e.preventDefault()
        const newOrder={
          items:cart.map((item)=>({
            itemId:item.pizzaId,
            quantity:item.quantity,
            itemtotalprice:item.price * item.quantity,
            size:item.size,
            flavour:item.flavour
          })),
          orderNo,
          phone:input.phone,
          address:input.address,
          totalPrice
        }

       console.log(newOrder)
       NewOrder(newOrder)
      BookingConfirmationEmail(formData)
      setInput({});

    }

  return (
    <div>
      <Navbar/>
  <section className="page_breadcrumb" style={{background: 'url(images/counter_bg.jpg)'}}>
    <div className="breadcrumb_overlay">
      <div className="container">
        <div className="breadcrumb_text">
          <h1>checkout</h1>
          <ul>
            <li><a href="index.html">home</a></li>
            <li><a href="#">checkout</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  {/*=============================
  BREADCRUMB END
    ==============================*/}
  {/*============================
  CHECK OUT PAGE START
    ==============================*/}
  <section className="cart_view mt_100 xs_mt_70 mb_100 xs_mb_70">
    <div className="container">
      <div className="row">
        <div className="col-xl-8 col-lg-7 wow fadeInUp" data-wow-duration="1s">
          <div className="checkout_form">
            <div className="check_form">
              <div className="address_modal">
                <div className="modal fade" id="address_modal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="address_modalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="address_modalLabel">add new address
                        </h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                      </div>
                      <div className="modal-body">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
              </div>
              <form onSubmit={handlePlaceOrder}>
                <div className="row mt_30">
                  <div className="col-12">
                    <h5>billing address</h5>
                  </div>
                  <div className="col-md-6 col-lg-12 col-xl-6">
                    <div className="check_single_form">
                      <input type="text" placeholder="First Name" value={input.Fname} onChange={(e)=>setInput({...input,Fname:e.target.value})} className='w-full h-10 p-2' />
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-12 col-xl-6">
                    <div className="check_single_form">
                      <input type="text" placeholder="Last Name"  className='w-full h-10 p-2' value={input.Lname} onChange={(e)=>setInput({...input,Lname:e.target.value})}/>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-12 col-xl-6">
                    <div className="check_single_form">
                      <input type="text" placeholder="Street Address *" required className='w-full h-10 p-2' value={input.address} onChange={(e)=>setInput({...input,address:e.target.value})}/>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-12 col-xl-6">
                    <div className="check_single_form">
                      <input type="text" placeholder="Phone *" value={input.phone} onChange={(e)=>setInput({...input,phone:e.target.value})} required className='w-full h-10 p-2'/>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-12 col-xl-6">
                    <div className="check_single_form">
                      <input type="email" placeholder="Email *" value={input.email} onChange={(e)=>setInput({...input,email:e.target.value})} required className='w-full h-10 p-2'/>
                    </div>
                  </div>
               
                  <div className="col-12 mt-4">
                    <button className="common_btn">Place Order</button>
                  </div> 
              
                </div>
  
              </form>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-5 wow fadeInUp" data-wow-duration="1s">
          <div id="sticky_sidebar" className="cart_list_footer_button">
            <div className="cart_list_footer_button_text">
              <h6>total cart ({cart.length})</h6>
              <p>subtotal: <span>${totalPrice}.00</span></p>
              <p>delivery: <span>$00.00</span></p>
              <p className="total"><span>total:</span> <span>${totalPrice}.00</span></p>
              <form>
                <input type="text" placeholder="Coupon Code" disabled />
                <button type="submit" disabled>apply</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer/>
</div>

  )
}

export default CreateOrder
