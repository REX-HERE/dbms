import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { deleteProductFromCart, getCart, postOrder } from '../../api/api'
import { LogLog } from '../../constants/constant_vals'

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
    const [quantity, setQuantity]= useState(0);
    const [totalAmount, setTotalAmount]=useState(0);

    // const location=useLocation()   
    // console.log(location.state.isTrue)

    const callDelete=()=>{
        deleteProductFromCart({
            userId: localStorage.getItem("userId"),
            productId: productId,
            productQuantity: quantity

        }).then((res)=>{
            if(LogLog){
                console.log(res.data)
            }
        })
    }

    const checkOut=()=>{
        postOrder({
            cartData: carts

        }).then((res)=>{
            if(LogLog){
                console.log(res.data)
            }
        })
        navigate("/")
        alert("Your Order Have Been Placed Successfully!")
    }

    useEffect(()=>{
        getCart(localStorage.getItem("userId")).then((res)=>{
            if(LogLog){
                console.log(res.data)
            }

            setCarts(res.data);


        })

        if(LogLog){
            console.log("done")
        }

    },[])

        
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
                <div className="card p-4" id="cards">
                    <h5 className="text-dark">Cart</h5>
                    <div className="row mt-4">
                    <div className="col-md-3">
                        <div className="overlay">
                        <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg" className="zoom-in figure-img img-fluid" />
                        </div>
                    </div>
                    <div className="col-md-7">
                        <h5 className="text-muted pt-2" id="to_insert">Adidas Cool T-Shirt</h5>
                        <p className="text-uppercase font-weight-light">SHIRT - BLUE</p>
                        <div className="linespace mb-4">
                        <p className="text-muted mt-4">Color : BLUE</p>
                        </div>
                        <button onclick={(e)=>{e.preventDefault();callDelete()}} className="btn btn-sm text-muted text-uppercase"><i className="fas fa-trash-alt pr-2" />REMOVE ITEM</button>
                        &nbsp;
                    </div>
                    <div className="col-md-2">
                        <div className="input-group input-group-sm">
                        <div className="input-group-prepend" onclick="add2()">
                            <span className="input-group-text"><i className="fas fa-plus" /></span>
                        </div>
                        <input type="text" className="numberbox2 form-control" defaultValue={1} />
                        <div className="input-group-append" onclick="subtract2()">
                            <span className="input-group-text"><i className="fas fa-minus" /></span>
                        </div>
                        </div>
                    </div>
                    </div>
                    <hr />
                    <div className="row">
                    </div>
                </div>
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
                    <button onclick={(e)=>{e.preventDefault();checkOut()}} className="btn btn-primary mt-2"><a  className="text-white"><i className="fas fa-shopping-bag pr-2" />Proceed to Checkout</a></button>
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
            <div className="modal fade" id="loginModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header bg-dark">
                    <h5 className="modal-title text-light" id="exampleModalCenterTitle">Login</h5>
                    <button type="button" className="close text-light" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                    </button>
                </div>
                

                </div>
            </div>
            </div>
        </div>
        );

}

export default Cart