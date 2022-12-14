import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { LogLog } from '../../constants/constant_vals'
import { Link } from 'react-router-dom'
import { deleteUserById, getAllUsers } from '../../api/api'


const AdminAllUsers = () => {

  const navigate= useNavigate()
  const [users, setUsers]=useState([]);
  const [isTrue, setIsTrue]=useState(true);

  function Card(props) {
    return(
    <div className="card p-4" id="cards">
        <h5 className="text-dark">User Id: {props.user.userId}</h5>
      <div className="row mt-4">
        <div className="col-md-3">
            <div className="overlay">
            <img src="https://res.cloudinary.com/dxo3abzy2/image/upload/v1668345419/DBMS/abstract-user-flat-3_xdnxho.png" className="zoom-in figure-img img-fluid" />
            </div>
        </div>
        <div className="col-md-7">
            <h5 className="text-muted pt-2" id="to_insert">{props.user.firstName}</h5>
            <p className="text-uppercase font-weight-light">{props.user.lastName}</p>
            <div className="linespace mb-4">
            <p className="text-muted mt-4">{props.user.type}</p>
            <p className="text-muted mt-4">From: {props.user.address}</p>                
            </div>
            <button onClick={(e)=>{e.preventDefault();callDelete(props)}} className="btn btn-sm text-muted text-uppercase"><i className="fas fa-trash-alt pr-2" />REMOVE ITEM</button>
            &nbsp;
        </div>

        
        {/* </div> */}
          <hr />
        {/* <div className="row"> */}
      </div>
    </div>

    )
  }    


  const callDelete=(props)=>{
    console.log(props.user.userId)
    deleteUserById(props.user.userId).then((res)=>{
      console.log(res.data)
        
    })
    window.location.reload(false);

  } 

  window.onload=()=>{setIsTrue(true)}  
  
  useEffect(()=>{
    console.log("called useEffect")
    getAllUsers().then((res)=>{
      if(LogLog){
        console.log(res.data)
      }
      if(isTrue){
        setUsers(res.data);
        console.log(users);

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
            <h3 className="text-left">All Available Users</h3>
          </div>
        </div>
        <br />
        <br />
        <div>
          {/* <button style="margin-left: 21%;" type="button" class="btn btn-primary btn-lg ">Add New user</button> */}
          <button style={{marginLeft: '27.5%'}} onClick={(e)=>{e.preventDefault(); navigate("/adminProfile"); }} type="button" className="btn btn-primary btn-lg ">Go To Profile</button>
        </div>
        <br />
        <br />
        <div className="container" id="card">
          <div className="row">
            <div className="col-md-8">
              {

                users.map((user, index) =>(
                  <Card key={index} user={user}/>  
                )) 
              }               

              {/* <div className="card p-4" id="cards">
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

        {/* <div className="modal fade" id="loginModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header bg-dark">
                <h5 className="modal-title text-light" id="exampleModalCenterTitle">Login</h5>
                <button type="button" className="close text-light" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">??</span>
                </button>
              </div>
              <div className="modal-body bg-light">
                <form>
                  <div className="form-group">
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Email" />
                    <small id="emailHelp" className="form-text text-danger">We'll never share your email with anyone
                      else!</small>
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                  </div>
                  <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Keep me Logined</label>
                  </div>
                  <button type="submit" className="btn btn-secondary btn-sm text-light"><a href="profile.html" className="text-light">Login</a></button>
                  <a href="register.html" className="float-right text-muted">Not a Member? Register</a>
                </form>
              </div>
            </div>
          </div>
        </div> */}


      </div>
    );
}

export default AdminAllUsers