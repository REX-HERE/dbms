import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { deleteUserById, getUserById, postUser } from '../../api/api';
import { LogLog } from '../../constants/constant_vals';
import "../ui/css/profile.css"

const CustomerProfile = () => {
  const navigate= useNavigate()
  const [userId, setUserId]=useState("")
  const [firstName, setFirstName]=useState("")
  const [lastName, setLastName]=useState("")
  const [type, setType]=useState("")
  const [address, setAddress]=useState("")
  const [password, setPassword]=useState("")

  const clearStorage=()=>{
    localStorage.removeItem(userId)
    localStorage.clear();
    navigate("/login")
  }

  const callDelete=()=>{
    deleteUserById(userId).then((res)=>{
      if(LogLog){
        console.log(res.data)
      }
    })
    localStorage.removeItem(userId)
    localStorage.clear();
    navigate("/signUp")

  }

  const postChanges=()=>{
    postUser({
      userId: userId,
      firstName: firstName,
      lastName: lastName,
      type: type,
      address: address,
      password: password
    }).then((res) => {
      if(LogLog){
        console.log(res.data)
      }

    })
  }

  const getData =()=>{
    if(LogLog){
      console.log(localStorage.getItem("userId"))
    }
    getUserById(localStorage.getItem("userId")).then((res)=>{
      setUserId(res.data.userId)
      setFirstName(res.data.firstName)
      setLastName(res.data.lastName)
      setType(res.data.type)
      setAddress(res.data.address)
      setPassword(res.data.password)
      if(LogLog){
        console.log(res.data.userId)
        console.log(res.data.address)
  
      }
    })
  }
  useEffect(() => {
    getData()
    if(LogLog){
      console.log(userId)
      console.log(address)
  
    }
  }, [])
  
  

  return (
    <div>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>ShopNow</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
      {/* {% comment %} <link rel="stylesheet" href="css/style.css"> {% endcomment %} */}
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossOrigin="anonymous" />
      {/* fontawesom cdn link */}
      <link href="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/favicon.ico" rel="shortcut icon" type="image/x-icon" />
      {/* font */}
      <br />
      <div className="container">
        <h2>My Account</h2>
        <br /><br />
        <div className="row rounded">
          <div className="col-3 mb-4 mt-3 pt-4 pb-3 bg-light w-auto h-fit-content">
            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              {/* <Link className="nav-link active" id="v-pills-profile-tab" selected data-toggle="pill" to="/orders" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">&nbsp; My
                Orders</Link> */}
              <br />
              <Link onClick={(e)=>{e.preventDefault();clearStorage(); window.location.reload()}} className="nav-link active" id="v-pills-profile-tab" selected data-toggle="pill"  href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false"><i className="fas fa-user" />  Log
                Out</Link>
              {/* <a class="nav-link active" id="v-pills-profile-tab" selected data-toggle="pill"
                      href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false"><i
                          class="fas fa-user"></i> &nbsp; Your Profile</a> */}
              {/* <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false"><i class="fas fa-info"></i> &nbsp; Basic Details</a> */}
            </div>
          </div>
          <div className="col-9 mt-3">
            <div className="tab-content bg-light pb-5" id="v-pills-tabContent">
              <div className="tab-pane fade show active p-3" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                <img id="profilePic" src="https://icon-library.com/images/default-user-icon/default-user-icon-8.jpg" className="rounded-circle img-fluid" />
                &nbsp; &nbsp; <h5 className="d-inline-block">{userId} &nbsp;&nbsp;&nbsp;&nbsp;</h5>
                <br />
                <br />
                <hr />
                <br />
                <form>
                  <div className="row pb-5">
                    <div className="col">
                      <p className="font-weight-bold d-inline-block">First Name</p>
                      <input type="text" placeholder={firstName} onChange={(e)=>setFirstName(e.target.value)} className="form-control" />
                    </div>
                    <div className="col">
                      <p className="font-weight-bold d-inline-block">Last Name</p>
                      <input type="text" placeholder={lastName} onChange={(e)=>setLastName(e.target.value)} className="form-control" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <p className="font-weight-bold d-inline-block">Type</p>
                      <div>
                    <select className="form-control form-control_debug"  onChange={(e)=>{setType(e.target.value);console.log(e.target.value)}}>
                      <option><em>{type}</em></option>
                      <option value="customer">Customer</option>
                      <option value="seller">Seller</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>
                      {/* <input type="text" class="form-control" placeholder="Type" /> */}
                    </div>
                    <div className="col">
                      <p className="font-weight-bold d-inline-block">Address</p>
                      <div className="input-group mb-3">
                        <input type="text" placeholder={address} onChange={(e)=>setAddress(e.target.value)} className="form-control" />
                      </div>
                    </div>
                  </div>
                  <div >
                    <div className="col">
                      <p className="font-weight-bold d-inline-block" >Enter Password</p>
                      <input type="text" placeholder="Enter new password to change it " onChange={(e)=>setPassword(e.target.value)} className="form-control" />
                    </div>
                    {/* <div className="col">
                      <p className="font-weight-bold d-inline-block">Last Name</p>
                      <input type="text" placeholder={lastName} className="form-control" />
                    </div> */}
                  </div>
                </form>
                <hr />
                <div className="delAccount pt-3">
                  <h5 className="text-dark">Delete Account</h5>
                  <Link onClick={(e)=>{e.preventDefault();callDelete()}} className="text-muted float-right font-weight-bold">Delete Your Account</Link>
                  <p className="text-muted">By deleting your account, you will lose all your data.</p>
                </div>
                <hr className="mt-4" /><br /><br />
                <button type="button" onClick={(e)=>{e.preventDefault();postChanges(); }} className="btn btn-outline-primary float-right mt-3 mb-5" data-toggle="modal" data-target=".bd-example-modal-md">Save Changes</button>
                <br />
              </div>
              {/* <div class="tab-pane fade p-3" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
          
        </div> */}

            </div>
          </div>
        </div>
      </div>
      <br />
      <div style={{display: 'flex'}}>
        <div style={{paddingLeft: '40%'}} className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          {/* <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false"><i class="fas fa-info"></i> &nbsp; Basic Details</a> */}
        </div>
        <div style={{paddingLeft: '25%'}} className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          {/* <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false"><i class="fas fa-info"></i> &nbsp; Basic Details</a> */}
        </div>
      </div>
      <br /><br />

      {/* <div className="modal fade bd-example-modal-md" tabIndex={-1} role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edited Successfully</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Details were edited successfully.</p>
            </div>
          </div>
        </div>
      </div> */}
    



    </div>
  );
}

export default CustomerProfile