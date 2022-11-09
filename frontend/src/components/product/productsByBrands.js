import React,{useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



const ProductsByBrands = () => {

  const navigate = useNavigate()
  const location=useLocation() 
  const [products, setProducts] = useState(location.state.products)
  const [brands, setBrands] = useState(location.state.brands)
  const [categories, setCategories] = useState(location.state.categories)
  console.log(products)

  const callProductDetails=(product)=>{
    console.log("aa gaya mc")
    navigate("/product/details", {state:{product:product}} )

  }

  function ProductCard(props) {
    return(
      <div className="col-md-3" onClick={(e)=>{e.preventDefault();callProductDetails(props)}} style={{padding : 8, cursor:'pointer'}}>
        <div className="card" style={{height:750}}>
          <img className="card-img-top img-fluid" src={props.imageUrl} onClick={(e)=>{e.preventDefault();callProductDetails(props)}} alt="Card image cap" />
          <div className="card-body">
            <p className="card-text"><Link  className="text-dark">{props.productName}</Link></p>
            <p className="card-text"><a  className="text-dark">{props.productDescription}</a></p>
            <p className="card-text"><Link  className="text-dark">ratings: {props.ratings}</Link></p>
            
            <p className="card-cost">RS {props.price}</p>
          </div>
        </div>
      </div>
    )
  }

 


  

  return(
      <div>
        
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>ShopNow</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
        <link rel="stylesheet" href="css/style.css" />
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
      <hr />        <br /> <br />
        <div className="container cardItem" id="products">
        <h2>{location.state.brandName}</h2>
        <br />
        <div className="row gx-2 gy-2">
          {
            products.map((product, index) =>( 
              product.brandName===location.state.brandName?<ProductCard key={index} {...product}/>:<></>  ))
          }
        </div>
      </div>        
        {/* <div className="container cardItem" id="products">
          <h2>{location.state.name}</h2>
          <br />
          <div className="row gx-2 gy-2" style={{disply:'flex'}}>
          {
            
            prod.map((product,key)=>(
              product.brandName===location.state.name?
              <div className="row">
                <div onClick={(e)=>{e.preventDefault();callProductDetails()}} className="col-md-3" style={{padding : 8}}>
                  <div className="card">
                    <img className="card-img-top img-fluid" src={product.imageUrl} alt="Card image capo" />
                    <div className="card-body">
                      <p className="card-text"><Link  className="text-dark">{product.productDescription}</Link></p>
                      <div className="ratings">
                      <p className="card-text"><Link  className="text-dark">ratings: {product.ratings}</Link></p>
                      </div>
                      <p className="card-cost">RS {product.price}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              :<></>
            ))
            
          }
          </div>
        </div> */}
      <br />
      <br />
      <div className="container cardItem" id="brands">
      <div id="heading"><h2>Our Brands</h2>
        <button type="button" className="btn btn-outline-primary" id="float" onClick={(e)=>{e.preventDefault(); navigate("/products", {state:{products:products,brands:brands,categories:categories}})}} style={{width:315}}>See all</button> </div>        
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

        <br />
      </div>
      </div>
    );
}

export default ProductsByBrands