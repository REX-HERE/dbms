import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { deleteProductFromCart, getAllProduct, getCart, getOrdersById, getProductById, postOrder } from '../../api/api'
import { LogLog } from '../../constants/constant_vals'
import { Link } from 'react-router-dom'




const Cart = () => {
        
    const navigate= useNavigate()

    const [productId, setProductId]=useState("")
    const [productName, setProductName]=useState("")
    const [price, setPrice]=useState(0)
    const [description, setDescription]=useState("")
    const [brandName, setBrandName]=useState("")
    const [categoryName, setCategoryName]=useState("")
    const [ratings, setRatings]=useState(0);
    const [imageUrl, setImageUrl]=useState(""); 

    const [carts, setCarts]=useState([])
    const [product, setProduct]=useState(null)
    const [quantity, setQuantity]= useState(0);
    const [totalAmount, setTotalAmount]=useState(0);
    const [isTrue, setIsTrue]=useState(true);
    const [products, setProducts]=useState([]);
    

    const callDelete=(props)=>{
        deleteProductFromCart({

            userId: localStorage.getItem("userId"),
            productId: props.cart.productId,
            productQuantity: props.cart.productQuantity

        }).then((res)=>{
            if(LogLog){
                console.log(res.data)
            }
        })
        window.location.reload(false);
    }



    const checkOut=()=>{
        const result = true;
        postOrder({
            carts

        }).then((res)=>{
            if(LogLog){
                console.log(res.data)
            }
        })
        carts.map((cart)=>{
            deleteProductFromCart({
                userId: cart.userId,
                productId: cart.productId,
                productQuantity: cart.productQuantity

            }).then((res)=>{
                console.log(res.data.data)
            })
        })


        navigate("/")
        window.location.reload(false);
        if(result){
            alert("Your Order Have Been Placed Successfully!")
        }else{
            alert("Some error occured please reload and try again!")            
        }
    }
    window.onload=()=>{setIsTrue(true)}

    useEffect(()=>{
        
        getCart(localStorage.getItem("userId")).then((res)=>{
            if(LogLog){
                console.log(res.data)
            }
            if(isTrue){
            setCarts(res.data);
            getAllProduct().then((res)=>{
                setProducts(res.data)
            });
            findTotal();
            } 
            console.log(totalAmount)
            }
        )
          

        if(LogLog){
            console.log("done")
            setIsTrue(false)
        }
        return()=>{setIsTrue(false)}

    },[isTrue])

    function findTotal() {
        console.log("find total called")
        carts.map((cart)=>{
            products.map((product)=>{
                if(product.productId === cart.productId){
                    setTotalAmount(prev=>{
                        return prev+(product.price*cart.productQuantity)
                    })
                }
            })
        })
        console.log(totalAmount)
    }


    function CartCard(props) {
        return(
            <div className="card p-4" id="cards">
            <h5 className="text-dark">Product Id: {props.product.productId}</h5>
            <div className="row mt-4">
            <div className="col-md-3">
                <div className="overlay">
                <img src={props.product.imageUrl} className="zoom-in figure-img img-fluid" />
                </div>
            </div>
            <div className="col-md-7">
                <h5 className="text-muted pt-2" id="to_insert">{props.product.productName}</h5>
                <p className="text-uppercase font-weight-light">{props.product.categoryName}</p>
                <div className="linespace mb-4">
                <p className="text-muted mt-4">{props.product.brandName}</p>
                <p className="text-muted mt-4">{props.cart.productQuantity}</p>                
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
            
            </div>
            <hr />
            <div className="row">
            </div>
        </div>
    
        )
      }    
        


    

        
    return (
        <div>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>ShopNow</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
            {/* <link rel="stylesheet" href="css/style.css" /> */}
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossOrigin="anonymous" />{/* fontawesom cdn link */}
            <link href="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/favicon.ico" rel="shortcut icon" type="image/x-icon" />
            {/* font */}
            <div className="cart">
            <div className="container">
                <h3 className="text-center">Shopping Cart Details</h3>
            </div>
            </div>
            <br /><br />
            <div className="container" id="card">
            <div className="row">
                <div className="col-md-8">
                {
                    carts.map((cart, index) =>( 
                        products.map((product)=>(
                            product.productId===cart.productId
                            ?
                            <CartCard key={index} {...cart} cart={cart} product={product}/>
                            :<></>
                        ))
                    
                    ))
                    
                }



                </div>
                <div className="col-md-4">
                    <div className="card p-3" id="card-cost">
                        <h5 className="text-primary pl-2">Total Amount</h5>
                        <table className="table table-borderless pt-2">
                        <tbody>
                            <tr>
                            <th scope="row" className="font-weight-light">total Amount</th>
                            <td>RS {totalAmount}</td>
                            </tr>
                            <tr>
                            <th scope="row" className="font-weight-light">Shipping</th>
                            <td>RS 0</td>
                            </tr>
                        </tbody>
                        </table>
                        <hr />
                        <h6 className="pl-2 pt-1">Total Price <span className="float-right">RS {totalAmount}</span></h6>
                        <hr />
                        <button onClick={(e)=>{e.preventDefault();checkOut()}} className="btn btn-primary mt-2" style={{width:315}}><a  className="text-white"><i className="fas fa-shopping-bag pr-2" />Proceed to Checkout</a></button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8">
                <div className="card p-3">
                    <h5 className="text-dark">We Accept</h5>
                    <div className="text-wrap mt-3">
                    <i className="fab fa-cc-visa fa-3x pr-2 text-dark" />
                    <i className="fab fa-cc-amex fa-3x pr-2 text-dark" />
                    <i className="fab fa-cc-mastercard fa-3x pr-2 text-dark" />
                    <i className="fab fa-cc-paypal fa-3x pr-2 text-dark" />
                    </div>
                </div>
                </div>
            </div>
            </div>

            {/* <div className="modal fade" id="loginModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header bg-dark">
                    <h5 className="modal-title text-light" id="exampleModalCenterTitle">Login</h5>
                    <button type="button" className="close text-light" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                    </button>
                </div>
                

                </div>
            </div> */}
            {/* </div> */}
        </div>
        );
        

}

export default Cart