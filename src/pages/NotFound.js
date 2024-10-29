
const NotFound=()=>{
    <section className="error">
  <div className="container">
    <div className="row">
      <div className="col-xl-5 col-md-7 m-auto">
        <div className="error_text wow fadeInUp" data-wow-duration="1s">
          <img src="images/404_img.png" alt={404} className="img-fluid w-100" />
          <h2>That Page Doesn't Exist!</h2>
          <p>Sorry, the page you were looking for could not be found.</p>
          <a className="common_btn" href="index.html">home</a>
        </div>
      </div>
    </div>
  </div>
</section>

}

export default NotFound;