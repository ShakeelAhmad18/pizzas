import React ,{useState,useEffect} from 'react';
import Navbar from '../components/Navbar';
import { useSelector,useDispatch } from 'react-redux';
import { getCart, getTotalPrice } from '../redux/cartSlice';
import EmptyCart from '../components/EmptyCart';
import { Link } from 'react-router-dom';
import  Footer from '../components/Footer'
import UpdateItemQuantity from '../components/UpdateItemQuantity'
import RemoveItem from '../components/RemoveItem'

const Cart = () => {
  const dispatch= useDispatch();
  const cart = useSelector(getCart);

  const totalPrice=useSelector(getTotalPrice);
  if (cart.length === 0) return <EmptyCart />;

  
  return (
    <div>
      <Navbar/>
  <section className="page_breadcrumb" style={{background: 'url(images/counter_bg.jpg)'}}>
    <div className="breadcrumb_overlay">
      <div className="container">
        <div className="breadcrumb_text">
          <h1>cart view</h1>
          <ul>
            <li><a href="index.html">home</a></li>
            <li><a href="#">cart view</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  {/*=============================
  BREADCRUMB END
    ==============================*/}
  {/*============================
  CART VIEW START
    ==============================*/}
  <section className="cart_view mt_100 xs_mt_70 mb_100 xs_mb_70">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 wow fadeInUp" data-wow-duration="1s">
          <div className="cart_list">
            <div className="table-responsive">
              <table>
                <tbody>
                  <tr>
                    <th className="pro_img">
                      Image
                    </th>
                    <th className="pro_name">
                      details
                    </th>
                    <th className="pro_status">
                      price
                    </th>
                    <th className="pro_select">
                      quantity
                    </th>
                    <th className="pro_tk">
                      total
                    </th>
                    <th className="pro_icon">
                      <a className="clear_all" href="#">clear all</a>
                    </th>
                  </tr>
                  {cart.map((item)=>( <tr key={item.pizzaId} >
                    <td className="pro_img">
                      <img src={item.image.filePath} alt={item.image.fileName} className="img-fluid w-100" />
                    </td>
                    <td className="pro_name">
                      <a href="#">{item.name}</a>
                      <p>{item.ingredients}</p>
                      <span>{item.size}</span>
                    {item.flavour === '-' ? null :  <p>{item.flavour}</p> }
                    </td>
                    <td className="pro_status">
                      <h6>${item.price}.00</h6>
                    </td>
                    <td className="pro_select">
                     <UpdateItemQuantity item={item}/>
                    </td>
                    <td className="pro_tk">
                      <h6>${item.totalPrice}.00</h6>
                    </td>
                    <RemoveItem item={item}/>
                  </tr> ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-lg-12 wow fadeInUp" data-wow-duration="1s">
          <div className="cart_list_footer_button mt_50">
            <div className="row">
              <div className="col-xl-7 col-md-6">
                <div className="cart_list_footer_button_img">
                  <img src="images/cart_offer_img.jpg" alt="cart offer" className="img-fluid w-100" />
                </div>
              </div>
              <div className="col-xl-5 col-md-6">
                <div className="cart_list_footer_button_text">
                  <h6>total cart ({cart.length})</h6>
                  <p>subtotal: <span>${totalPrice}.00</span></p>
                  <p>delivery: <span>$00.00</span></p>
                  <p className="total"><span>total:</span> <span>${totalPrice}.00</span></p>
                  <form >
                    <input type="text" placeholder="Coupon Code" />
                    <button type="submit" disabled>apply</button>
                  </form>
                  <Link className="common_btn" to="/createorder">checkout</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*============================
  CART VIEW END
    ==============================*/}
    <Footer/>
</div>

  );
};

export default Cart;
