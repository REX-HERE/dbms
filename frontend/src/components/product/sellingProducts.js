import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { LogLog } from '../../constants/constant_vals'
import { Link } from 'react-router-dom'
import { deleteProductById, getSellingProducts } from '../../api/api'

const SellingProducts = () => {

  const navigate= useNavigate()
  const [productDatas, setProductDatas]=useState([]);
  const [isTrue, setIsTrue]=useState(true);

  function Card(props) {
    return(
    <div className="card p-4" id="cards">
        <h5 className="text-dark">Product Id: {props.productData.productId}</h5>
      <div className="row mt-4">
        <div className="col-md-3">
            <div className="overlay">
            <img src={props.productData.imageUrl} className="zoom-in figure-img img-fluid" />
            </div>
        </div>
        <div className="col-md-7">
            <h5 className="text-muted pt-2" id="to_insert">{props.productData.productName}</h5>
            <p className="text-uppercase font-weight-light">{props.productData.categoryName}</p>
            <div className="linespace mb-4">
            <p className="text-muted mt-4">{props.productData.brandName}</p>
            <p className="text-muted mt-4">RS {props.productData.price}</p>                
            </div>
            <button onClick={(e)=>{e.preventDefault();callDelete(props)}} className="btn btn-sm text-muted text-uppercase"><i className="fas fa-trash-alt pr-2" />REMOVE ITEM</button>
            &nbsp;
        </div>
        {/* <div className="col-md-2">
            <div className="input-group input-group-sm">
            <div className="input-group-prepend"  onClick={(e)=>{e.preventDefault(); setQuantity(prev=>{
                  console.log({quantity})
                  return prev+1
                })}}>
                  <span className="input-group-text"><i className="fas fa-plus" /></span>
                </div>
                <input type="text" className="numberbox1 form-control" value={props.product.quantity} />
                <div className="input-group-append" onClick={(e)=>{e.preventDefault(); setQuantity(prev=>{
                  console.log({quantity})
                  return Math.max(0,prev-1)
                })}}>
                  <span className="input-group-text"><i className="fas fa-minus" /></span>
                </div>
            </div>
        </div> */}
        
        {/* </div> */}
          <hr />
        {/* <div className="row"> */}
      </div>
    </div>

    )
  }    


  const callDelete=(props)=>{
    console.log(props.productData.productId)
    deleteProductById(props.productData.productId).then((res)=>{
      console.log(res.data)
        
    })
    window.location.reload(false);
    // deleteProductById(props.productData.productId).then((res)=>{
    //     if(LogLog){
    //         console.log(res.data)
    //     }
    // })
    // window.location.reload(false);
  }  

  window.onload=()=>{setIsTrue(true)}  
  
  useEffect(()=>{
    console.log("called useEffect")
    getSellingProducts(localStorage.getItem("userId")).then((res)=>{
      if(LogLog){
        console.log(res.data)
      }
      if(isTrue){
        setProductDatas(res.data);
        console.log(productDatas);
      // getAllProduct().then((res)=>{
      //     setProducts(res.data)
      // });
      }      
    })
    return()=>{setIsTrue(false)}    


  },[isTrue])




  return (
      <div>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>E-Commerce Website</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
        <link rel="stylesheet" href="css/style.css" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossOrigin="anonymous" />
        {/* fontawesom cdn link */}
        <link href="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/favicon.ico" rel="shortcut icon" type="image/x-icon" />
        {/* font */}
        <div className="cart">
          <div className="container">
            <h3 className="text-left">Currently Selling These Items</h3>
          </div>
        </div>
        <br />
        <br />
        <div><button style={{marginLeft: '24%'}} onClick={(e)=>{e.preventDefault(); navigate("/addProducts"); }} type="button" className="btn btn-primary btn-lg ">Add New Product</button>
          <button style={{marginLeft: '5%'}} onClick={(e)=>{e.preventDefault(); navigate("/sellerProfile"); }} type="button" className="btn btn-primary btn-lg ">Go To Profile</button>
        </div>
        <br />
        <br />
        
        <div className="container" id="card">
          <div className="row">
            <div className="col-md-8">
            {

              productDatas.map((productData, index) =>(
                <Card key={index} productData={productData}/>  
              )) 
            }    
            </div>          
              {/* <div className="card p-4" id="cards">
                <h5 className="text-dark">Cart</h5>
                <div className="row mt-4">
                  <div className="col-md-3">
                    <div className="overlay">
                      <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg" className="zoom-in figure-img img-fluid" />
                    </div>
                  </div>
                  <div className="col-md-7">
                    <h5 className="text-muted pt-2" id="to_insert">Adidas Cool T-Shirt
                      <button className="btn btn-sm text-muted text-uppercase" style={{display: 'inline', marginLeft: '15%'}}>
                        <i className="fas fa-trash-alt pr-2" />REMOVE
                        ITEM
                      </button>
                    </h5>
                    <p className="text-uppercase font-weight-light">SHIRT - BLUE</p>
                    <div className="linespace mb-4">
                      <p className="text-muted mt-4">Color : BLUE</p>
                      <p className="text-muted">Size : M</p>
                    </div>
                    &nbsp;
                  </div>
                </div>
                <hr />
                <div className="row">
                </div>
              </div> */}
            
            
          </div>
        </div>


      </div>
    );
}

export default SellingProducts