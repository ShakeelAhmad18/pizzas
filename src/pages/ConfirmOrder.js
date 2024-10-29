import {useSelector} from 'react-redux'
import {getorder} from '../redux/orderSlice'
import {format} from 'date-fns'
import {useEffect,useState} from 'react'

const ConfirmOrder=()=>{
    const [orders,setOrder]=useState([])
    const order=useSelector(getorder)
    console.log(orders)

    useEffect(()=>{
        if(order.length > 0){
            setOrder(order)
        }
    },[])

    const {totalPrice,updatedAt,orderNo,phone,address,items}=orders[0];
    

    return (
       <section className="dashboard mt_100 xs_mt_70 mb_100 xs_mb_70">
  <div className="container">
    <div className="dashboard_area">
      <div className="row">
        <div className="col-xl-3 col-lg-4 wow fadeInUp" data-wow-duration="1s">
          <div className="dashboard_menu">
            <div className="dasboard_header">
              <div className="dasboard_header_img">
                <img src="images/testimonial_img_3.jpg" alt="user" className="img-fluid w-100" />
                <label htmlFor="upload"><i className="far fa-camera" /></label>
                <input type="file" id="upload" hidden />
              </div>
              <h2>hasib ahmed</h2>
            </div>
            <ul>
              <li><a href="dashboard.html"><span><i className="fas fa-user" /></span> Parsonal Info</a>
              </li>
              <li><a href="dashboard_address.html"><span><i className="fas fa-user" /></span>address</a>
              </li>
              <li><a className="active" href="dashboard_order.html"><span><i className="fas fa-bags-shopping" /></span> Order</a></li>
              <li><a href="dashboard_wishlist.html"><span><i className="far fa-heart" /></span>
                  wishlist</a></li>
              <li><a href="dashboard_review.html"><span><i className="fas fa-star" /></span> Reviews</a>
              </li>
              <li><a href="dashboard_change_password.html"><span><i className="fas fa-user-lock" /></span> Change Password</a></li>
              <li><a href="#"><span> <i className="fas fa-sign-out-alt" /></span> Logout</a></li>
            </ul>
          </div>
        </div>
        <div className="col-xl-9 col-lg-8 wow fadeInUp" data-wow-duration="1s">
          <div className="dashboard_content">
            <div className="dashboard_body">
              <h3>invoice</h3>
              <div className="invoice">
                <a className="go_back" href="dashboard_order.html"><i className="fas fa-long-arrow-alt-left" /> go back</a>
                <div className="track_order">
                  <ul>
                    <li className="active">order pending</li>
                    <li className='active'>order accept</li>
                    <li>order process</li>
                    <li>on the way</li>
                    <li>Completed</li>
                  </ul>
                </div>
                <div className="invoice_header">
                  <div className="header_address">
                    <h4>invoice to</h4>
                    <p>{address}</p>
                    <p>{phone}</p>
                  </div>
                  <div className="header_address">
                    <p><b>Order ID:</b> <span>{orderNo}</span></p>
                    <p><b>date:</b> <span>{format(new Date(updatedAt),'MM-dd-yyyy')}</span></p>
                  </div>
                </div>
                <div className="invoice_body">
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <tbody>
                        <tr className="border_none">
                          <th className="sl_no">SL</th>
                          <th className="package">item description</th>
                          <th className="price">Price</th>
                          <th className="qnty">Quantity</th>
                          <th className="total">Total</th>
                        </tr>
                        {items.map((item,index)=>( <tr key={item.itemId._id}>
                          <td className="sl_no">0{index + 1}</td>
                          <td className="package">
                            <p>{item.itemId.name}</p>
                            <span className="size">{item.size}</span>
                            <span className="coca_cola">{item.flavour}</span>
                          </td>
                          <td className="price">
                            <b>${}</b>
                          </td>
                          <td className="qnty">
                            <b>{item.quantity}</b>
                          </td>
                          <td className="total">
                            <b>${item.itemtotalprice}</b>
                          </td>
                        </tr> ))}
                      </tbody>
                      <tfoot>
                        <tr>
                          <td className="package" colSpan={3}>
                            <b>sub total</b>
                          </td>
                          <td className="qnty">
                            <b>-</b>
                          </td>
                          <td className="total">
                            <b>${totalPrice}</b>
                          </td>
                        </tr>
                        <tr>
                          <td className="package coast" colSpan={3}>
                            <b>(+) Shipping Cost</b>
                          </td>
                          <td className="qnty">
                            <b />
                          </td>
                          <td className="total coast">
                            <b>$00.00</b>
                          </td>
                        </tr>
                        <tr>
                          <td className="package" colSpan={3}>
                            <b>Total Paid</b>
                          </td>
                          <td className="qnty">
                            <b />
                          </td>
                          <td className="total">
                            <b>${totalPrice}</b>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
                <a className="print_btn common_btn" href="#"><i className="far fa-print" /> print
                  PDF</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}

export default ConfirmOrder;