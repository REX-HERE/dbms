import React, { useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { addToCart } from '../../api/api'

const ProductDeatils = () => {
  const navigate=useNavigate()
  const location=useLocation()  
  console.log(location.state)
  console.log(location.state.product)
  
  const [productId, setProductId]=useState("")
  const [productName, setProductName]=useState("")
  const [price, setPrice]=useState(0)
  const [description, setDescription]=useState("")
  const [brandName, setBrandName]=useState("")
  const [categoryName, setCategoryName]=useState("")
  const [ratings, setRatings]=useState(0);
  const [imageUrl, setImageUrl]=useState("");
  
  const [product, setProduct]=useState(location.state.product)
  const [quantity, setQuantity]= useState(0);


  const postToCart=()=>{
    addToCart({
      userId: localStorage.getItem("userId"),
      productId: product.productId,
      productQuantity: quantity

    }).then((res)=>{
      console.log(res.data)
    })
    navigate("/cart")
  }


  return (
      <div>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Product Details</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
        <link rel="stylesheet" href="css/style.css" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossOrigin="anonymous" />{/* fontawesom cdn link */}
        <link href="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/favicon.ico" rel="shortcut icon" type="image/x-icon" />
        {/* font */} 
        <hr/>
        <div className="container mt-5 mb-5" id="productPage">
          <div className="row">
            <div className="col-md-5">
              <div className="card">
                <img src={product.imageUrl} className="figure-img img-fluid rounded" />
              </div>
            </div>
            <div className="col-md-7">
              <h5>{product.productName}</h5>
              <p className="text-muted">{product.categoryName}</p>
              <h5 className="pt-4">RS {product.price}</h5>
              <h5 className="pt-4">Description: </h5>
              <p className="description text-muted">{product.productDescription}</p>
              <hr />
              <table className="table mt-2">
                <tbody>
                  {/* <tr>
                    <th scope="row">Product name</th>
                    <td>T-SHIRT IE-106</td>
                  </tr> */}
                  <tr>
                    <th scope="row">Brand: </th>
                    <td>{product.brandName}</td>
                  </tr>
                  <tr>
                    <th scope="row">Rating: </th>
                    <td>{product.ratings}</td>
                  </tr>
                </tbody>
              </table>
              <hr />
              <div className="row">
                <div className="col-md-7">
                  <div className="input-group">
                    <div className="input-group-prepend"  onClick={(e)=>{e.preventDefault(); setQuantity(prev=>{
                      console.log({quantity})
                      return prev+1
                    })}}>
                      <span className="input-group-text"><i className="fas fa-plus" /></span>
                    </div>
                    <input type="text" className="numberbox1 form-control" value={quantity} />
                    <div className="input-group-append" onClick={(e)=>{e.preventDefault(); setQuantity(prev=>{
                      console.log({quantity})
                      return Math.max(0,prev-1)
                    })}}>
                      <span className="input-group-text"><i className="fas fa-minus" /></span>
                    </div>
                  </div>
                </div>
              </div>
              <div id="purchase-btn">
                <button type="button" onClick={(e)=>{e.preventDefault();postToCart()}} className="btn btn-sm btn-light"><a className="text-black" href> <i className="fas fa-shopping-cart pr-2" />  Add to Cart </a> </button>
              </div>
            </div>  
          </div>
        </div>
        <br /><br />
        <hr />
        <br />
        <h4 className="text-center text-muted">Browse products</h4>
        <br /><br />
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
        <br />
        <br />
        <br />
        <footer>
        </footer></div>
    );
}

export default ProductDeatils