import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getLogin } from '../../api/api'
import { Link } from 'react-router-dom'

const Login = () => {
  const navigate= useNavigate()
  const [username, setUsername]=useState("")
  const [type, setType]=useState("")
  const [password, setPassword]=useState("")

  const login=()=>{
    
    getLogin({
      userId: username,
      type: type,
      password: password
    }).then((res)=>{
      console.log("yha bhi aa gaya")
      console.log(type)
      console.log(res)
      console.log(res.data)
      // res.type==="customer"?navigate("/"):res.data.type==="seller"?navigate("/sellerProfile"):res.data.type==="admin"?navigate("/adminProfile"):console.log("qq")
      // else alert message
    })
  }

  return (
      // <>
      // <form>
      //   <input type="text" onChange={(e)=>setUsername(e.target.value)}></input>
      //   <select onChange={(e)=>setType(e.target.value)}>
      //     <option value={"customer"}>Customer</option>
      //     <option value={"admin"}>Admin</option>
      //     <option value={"seller"}>Seller</option>
      //   </select>
      //   <input type="password" onChange={(e)=>setPassword(e.target.value)}></input>
      //   <button onClick={(e)=>{e.preventDefault();login()}}>Login</button>
      // </form>
      // </>

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
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="col-md-4 d-block mx-auto mt-2 mb-3" id="join">
                <h4 className="pb-4">Login</h4>
                <form>
                  <div className="form-group">
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="username" onChange={(e)=>setUsername(e.target.value)} />
                  </div>
                  <div>
                    <select className="form-control form-control" onChange={(e)=>setType(e.target.value)}>
                      <option disabled>Select Role:</option>
                      <option value={'customer'}>Customer</option>
                      <option value={'seller'}>Seller</option>
                      <option value={'admin'}>Admin</option>
                    </select>
                  </div>
                  <br />
                  <div className="form-group">
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                  </div>
                  <br />
                  <button  className="btn btn-primary btn-sm text-light" onClick={(e)=>{e.preventDefault();login()}}>Login</button>
                  <Link className="float-right text-primary" to="/signUp">Not a Member? Sign Up</Link>
                  {/* <a href="register.html" className="float-right text-primary">Not a Member? Register</a> */}
                </form>
              </div>
            </div>
          </div>
        </div>
        <br /><br />

        
      </div>
    );
}

export default Login