import Navbar from '../components/Navbar';
import Loader from '../components/Spinner';
import { getMenu } from '../services/menuServices';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams,useNavigate,useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import {Link} from 'react-router-dom'
import {useState} from 'react'

export default function Menu() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [id,setId]=useState('')
  let location = useLocation();
  const filter = searchParams.get('category');
  const handleFilter = (filter) => {
    const params = new URLSearchParams(searchParams);
    params.set('category', filter);
    navigate(`${location.pathname}?${params.toString()}`, { replace: true });
  };



  document.title = 'Menu';

   
  const { isPending, data: menu } = useQuery({
    queryKey: ['menu'],
    queryFn: getMenu,
  });
  
  if (isPending) return <Loader />;

  let displayItems = menu;
  if (filter) displayItems = menu.filter((menu) => menu.category === filter);
  

  

  if (displayItems.length === 0) {
    return <div className="text-center text-white mt-20">No menu items available in this category!</div>;
  }


  return (
   <div>
    <Navbar/>
  <section className="page_breadcrumb" style={{background: 'url(images/counter_bg.jpg)'}}>
    <div className="breadcrumb_overlay">
      <div className="container">
        <div className="breadcrumb_text">
          <h1>Popular Foods menu</h1>
          <ul>
            <li><Link to="/">home</Link></li>
            <li><a href="#">menu</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  {/*=============================
  BREADCRUMB END
    ==============================*/}
  {/*=============================
  MENU PAGE START
    ==============================*/}
 <section className="menu_page mt_100 xs_mt_70 mb_100 xs_mb_70">
  <div className="container">
    <div className="row">
      <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-duration="1s">
        <div className="section_heading mb_25">
          <h4>Food Menu</h4>
          <h2>Popular Delicious Foods</h2>
        </div>
      </div>
      <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-duration="1s">
        <div className="menu_filter d-flex flex-wrap">
          <button className={`${filter === 'pizza' ? 'active' : ''}`} onClick={() => handleFilter('pizza')}>Pizza</button>
          <button className={`${filter === 'burger' ? 'active' : ''}`} onClick={() => handleFilter('burger')}>Burger</button>
          <button className={`${filter === 'rice' ? 'active' : ''}`} onClick={() => handleFilter('rice')}>Rice</button>
          <button className={`${filter === 'coffee' ? 'active' : ''}`} onClick={() => handleFilter('coffee')}>Coffee</button>
          <button className={`${filter === 'deals' ? 'active' : ''}`} onClick={() => handleFilter('deals')}>Daily Deals</button>
          <button className={`${filter === 'SandWhichs' ? 'active' : ''}`} onClick={() => handleFilter('SandWhichs')}>Sandwiches</button>
          <button className={`${filter === 'drink' ? 'active' : ''}`} onClick={() => handleFilter('drink')}>Drinks</button>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {displayItems.map((data) => (
        <div className="menu_item" key={data._id}>
          <div className="menu_item_img">
            <img src={data.image.filePath} alt={data.image.fileName} className="img-fluid w-100" />
          </div>
          <div className="menu_item_text">
            <Link className="category" to={`/menu_detail/${data._id}`}>{data.category}</Link>
            <Link className="title" to={`/menu_detail/${data._id}`}>{data.name}</Link>
            <p className="rating">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
              <i className="far fa-star" />
              <span>24</span>
            </p>
            <h5 className="price">${data.price}.00  <del>$90.00</del></h5>
            <Link className="add_to_cart" to={`/menu_detail/${data._id}`}>Add to Cart</Link>
            <ul className="d-flex flex-wrap justify-content-end">
              <li><Link to={`/menu_detail/${data._id}`}><i className="far fa-eye" /></Link></li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  <Footer/>
</div>

  );
}
