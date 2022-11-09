import React, { useEffect, useState } from 'react'

import "../ui/css/orderInfo.css";
import { LogLog } from '../../constants/constant_vals';
import { getOrdersById } from '../../api/api';


const Orders = () => {

  const [orderData, setOrderData]=useState([])  
  const [orderId, setOrderId]=useState("")
  const [orderTime, setOrderTime]=useState(null)
  const [orderAddress, setOrderAddress]=useState("")
  const [productDataList, setProductDataList]=useState([])
  const [productId, setProductId]=useState("")
  const [productName, setProductName]=useState("")
  const [price, setPrice]=useState(0)
  const [description, setDescription]=useState("")
  const [brandName, setBrandName]=useState("")
  const [categoryName, setCategoryName]=useState("")
  const [ratings, setRatings]=useState(0);
  const [imageUrl, setImageUrl]=useState(""); 

  useEffect(() =>{
    if(LogLog){
      console.log(localStorage.getItem("userId"))   
    }
    getOrdersById(localStorage.getItem("userId")).then((res)=>{
      if(LogLog){
        console.log(res.data)
      }
      setOrderData(res.data)
      setOrderId(res.data.orderId)
      setOrderTime(res.data.orderTime)
      setOrderAddress(res.data.orderAddress)
      setProductDataList(res.data.productDataList)
      
    })
  })

  return (
    <div>
      <link rel="stylesheet" href="orderInfo.css" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossOrigin="anonymous" />{/* fontawesom cdn link */}
      <link href="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/favicon.ico" rel="shortcut icon" type="image/x-icon" />
      <br /> 
      <br />
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <h1>Order Information</h1>
        </div>
      </div>
      <br />   
      <div className="container" style={{height: '30px'}}>
        <table className="table">
          <tbody>
            <tr>
              <td />
              <td> Order ID: 
                CH30564 </td>
              {/* </tr>
    <tr> */}
              <td> Order Time: hh:mm:ss May 5, 2020 </td>
              {/* </tr>
    
    <tr> */}
              <td> Delivery Address: IIT BHU </td>
            </tr>
          </tbody>
        </table>
        <div style={{textAlign: 'left'}}>
        </div><table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Product ID</th>
              <th scope="col">Image</th>
              <th scope="col">Product Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <th scope="row"><img src="https://www.thefashionisto.com/wp-content/uploads/2019/09/Off-White-Black-Quote-Yen-Wallet.jpg" alt="Black Wallet" width={150} height={150} /></th>
              <td>Off-White Black Quote Wallet</td>
              <td> 1 </td>
              <td>123</td>       
            </tr>
            <tr>
              <th scope="row">1</th>
              <th scope="row"><img src="https://www.thefashionisto.com/wp-content/uploads/2019/09/Off-White-Black-Quote-Yen-Wallet.jpg" alt="Black Wallet" width={150} height={150} /></th>
              <td>Off-White Black Quote Wallet</td>
              <td> 1 </td>
              <td>123</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <th scope="row"><img src="https://www.thefashionisto.com/wp-content/uploads/2019/09/Off-White-Black-Quote-Yen-Wallet.jpg" alt="Black Wallet" width={150} height={150} /></th>
              <td>Off-White Black Quote Wallet</td>
              <td> 1 </td>
              <td>123</td>
            </tr>
            <tr>
              <td> Total </td>
              <td> US$20,105.86 </td>
            </tr>
          </tbody>
        </table><br /><table className="footer">
          <tbody>
          </tbody></table>
      </div>   
    </div>
    </div>
  );
}

export default Orders;