import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
import { getHomeData } from "../../api/api";
import { LogLog } from "../../constants/constant_vals";



const Home = () => {
  
  const navigate = useNavigate(); 
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  function ProductCard(props) {
    return(
      <div className="col-md-3" onClick={(e)=>{e.preventDefault();callProductDetails(props)}} style={{padding : 8}}>
        <div className="card" style={{height:750}}>
          <img className="card-img-top img-fluid" src={props.imageUrl} alt="Card image cap" />
          <div className="card-body" >
            <p className="card-text"><Link  className="text-dark">{props.productName}</Link></p>
            <p className="card-text"><a  className="text-dark">{props.productDescription}</a></p>
            <p className="card-text"><Link  className="text-dark">ratings: {props.ratings}</Link></p>
            
            <p className="card-cost">RS {props.price}</p>
          </div>
        </div>
      </div>
    )
  }



  useEffect(() => {
    getHomeData().then((res) => {
      console.log(res.data.categories)
      console.log(res.data.brands)

      setCategories(res.data.categories)
      setBrands(res.data.brands)
      setProducts(res.data.products)
      localStorage.setItem("products", products)
      console.log(products)
      localStorage.setItem("brands", brands)
      localStorage.setItem("categories", categories)
    });

    if(LogLog){
      console.log("done")
    }
  }, [])



  const callProductDetails=(product)=>{
    console.log("details called")
    navigate("/product/details", {state:{product:product}} )

  }
  

  return (
    <div>
      {/* <button onClick={goCart}>cart</button> */}
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>ShopNow</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
      <link rel="stylesheet" href="../ui/css/style.css" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossOrigin="anonymous" />{/* fontawesom cdn link */}
      <link href="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/favicon.ico" rel="shortcut icon" type="image/x-icon" />
      {/* font */}
      <hr />
      <div className="container" style={{ height: '30px' }}>
        <nav className="navbar navbar-expand-lg navbar-light" style={{ height: '30px' }}>
          <button style={{ height: '30px' }} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse pl-4" id="navbarNav">
            <ul className="navbar-nav">
            {
              categories.map((catagoryName, index)=>(
                <li className="nav-item active" key={index} style={{overflow : 'hidden'}}>
                <a className="nav-link" href="#">{catagoryName}</a>
              </li>
              ))
            }
              
            </ul>
          </div>
        </nav>
      </div>
      <hr />
      <div className="container">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="https://res.cloudinary.com/dxo3abzy2/image/upload/v1667947281/Banners_DBMS/maxresdefault_uy8eqg.jpg" alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="https://res.cloudinary.com/dxo3abzy2/image/upload/v1667945244/Banners_DBMS/F_banner_wa11fu.jpg" alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="https://res.cloudinary.com/dxo3abzy2/image/upload/v1667947139/Banners_DBMS/dd_xscwe5.jpg" alt="Third slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      <br /> <br />
      <div className="container cardItem" id="products">
        <h2>Popular Products</h2>
        <br />
        <div className="row gx-2 gy-2">
          {
            products.map((product, index) => <ProductCard key={index} {...product} />)
          }
        </div>
      </div>
      <br />
      <br />
      <div className="container cardItem" id="newarrive">
        {
          // brands.map((brand,index)=>(
            
          // ))
        }
        
        
      </div>
      <br /><br />

      {/* <div className="container cardItem" id="recommend">
        <div id="heading"> <h2>Recommended</h2>
          <button type="button" className="btn btn-outline-primary" id="float">See all</button> </div>
        <br />
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <img className="card-img-top img-fluid" src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/1.jpg" alt="Card image cap" />
              <div className="card-body">
                <p className="card-text"><a href="inner-productpage.html" className="text-dark">Just another item name</a></p>
                <p className="card-cost">$179.00</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img className="card-img-top img-fluid" src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/2.jpg" alt="Card image cap" />
              <div className="card-body">
                <p className="card-text"><a href="inner-productpage.html" className="text-dark">Some item name here</a></p>
                <p className="card-cost">$280.00</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img className="card-img-top img-fluid" src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/3.jpg" alt="Card image cap" />
              <div className="card-body">
                <p className="card-text"><a href="inner-productpage.html" className="text-dark">Great item name here</a></p>
                <p className="card-cost">$56.00</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img className="card-img-top img-fluid" src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/4.jpg" alt="Card image cap" />
              <div className="card-body">
                <p className="card-text"><a href="inner-productpage.html" className="text-dark">Just another item name</a></p>
                <p className="card-cost">$179.00</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <br />
      <br />
      <div className="container cardItem" id="brands">
      <div id="heading"><h2>Our Brands</h2>
        <button type="button" className="btn btn-outline-primary" onClick={(e)=>{e.preventDefault(); navigate("/products", {state:{products:products,brands:brands,categories:categories}})}} id="float" style={{width:315}}>See all</button> </div>        
        {/* <br /> */}
        {/* <br /> */}
        <hr />
        <br />
        <div className="container" style={{ height: '30px' }}>
          <nav className="navbar navbar-expand-lg navbar-light" style={{ height: '30px' }}>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse pl-4" id="navbarNav">
              <ul className="navbar-nav">
              {
                brands.map((brandName, index)=>(
                  <li className="nav-item active" key={index} style={{overflow : 'hidden'}}>
                  <a className="nav-link" onClick={(e)=>{e.preventDefault(); navigate("/products/brand", {state:{brandName:brandName,products:products,brands:brands,categories:categories}})}}>{brandName}</a>
                </li>
                ))
              }
                
              </ul>
            </div>
          </nav>
        </div>
        <br/>
      <hr />
        {/* <div className="row"> */}
          {/* <div className="card">
            <img className="card-img-top img-fluid" src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/logos/logo1.png" width="20%" style={{ padding: '0 35px' }} />
            <hr />
            <div className="card-body">
            </div>
          </div>
          <div className="card">
            <img className="card-img-top img-fluid" src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/logos/logo2.png" width="20%" style={{ padding: '0 35px' }} />
            <hr />
            <div className="card-body">
            </div>
          </div>
          <div className="card">
            <img className="card-img-top img-fluid" src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/logos/logo3.png" width="20%" style={{ padding: '0 35px' }} />
            <hr />
            <div className="card-body">
            </div>
          </div>
          <div className="card">
            <img className="card-img-top img-fluid" src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/logos/logo4.png" width="20%" style={{ padding: '0 35px' }} />
            <hr />
            <div className="card-body">
            </div>
          </div>
          <div className="card">
            <img className="card-img-top img-fluid" src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/logos/logo5.png" width="20%" style={{ padding: '0 35px' }} />
            <hr />
            <div className="card-body">
            </div>
          </div> */}
        {/* </div> */}
      </div>
      <br />
    </div>
  );
};

export default Home;