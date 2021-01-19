import React, { useState, useEffect } from 'react'   
import axios from 'axios';  
import login_img from '../Components/Images/loginBg.jpg'
import '../App.css'
function Login(props) {  
    const [employee, setemployee] = useState({Id:'', Email: '', Password: ''});  
    const apiUrl = "https://5dfb299538678a00145faa47.mockapi.io/login ";    
    const Login = (e) => {    
            e.preventDefault();    
            // debugger;   
            const data = {Id:employee.Id, Email:employee.Email, Password: employee.Password };    
            axios.post(apiUrl, data)    
            .then((result) => {    
                // debugger;  
                console.log(result.data);   
                const serializedState = JSON.stringify(result.data.UserDetails);  
               var a= localStorage.setItem('myData', serializedState);   
                console.log("A:",a)  
                const user =result.data.UserDetails;  
                console.log(result.data.message);  
                if (result.data.status == '200')    
                    props.history.push('/Dashboard')    
                else    
                alert('Invalid User');    
            })        
          };    
          
          const onChange = (e) => {    
                e.persist();    
                // debugger;    
                setemployee({...employee, [e.target.name]: e.target.value});    
              }    
    return (  
      <React.Fragment>
    
        <div class="container">  
        
        <div class="row justify-content-center">  
          <div class="col-xl-10 col-lg-12 col-md-9">  
            <div class="card o-hidden border-0 shadow-lg my-5">  
              <div class="card-body p-0">  
                <div class="row">  
                  <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>  
                  <div class="col-lg-6">  
                  <img src={login_img}  style={{ position: "absolute",backgroundRepeat:'no-repeat',width:'100%',height:'50%' }}/>
                    <div style={{textAlign:'center',position:'relative'}}> 
                      <div>  
                        <h1 style={{color:'yellow'}} class="h4 mb-4">Welcome Back!</h1>  
                      </div>  
                      <form onSubmit={Login} class="user">  
                        <div class="form-group">  
                          <input type="email" class="form-control" value={employee.Email} onChange={ onChange }  name="Email" id="Email" aria-describedby="emailHelp" placeholder="Enter Email"/>  
                        </div>  
                        <div class="form-group">  
                          <input type="password" class="form-control" value={employee.Password} onChange={ onChange }  name="Password" id="DepPasswordartment" placeholder="Password"/>  
                        </div>  
                        {/* <div class="form-group">  
                          <div class="custom-control custom-checkbox small">  
                            <input type="checkbox" class="custom-control-input" id="customCheck"/>  
                            <label class="custom-control-label" for="customCheck">Remember Me</label>  
                          </div>  
                        </div> */}  
                        <button type="submit" className="btn btn-info mb-1" block><span>Login</span></button>    
                        <hr/>  
                      </form>  
                      {/* <hr/>   */}
                    </div>  
                  </div>  
                </div>  
              </div>  
            </div>  
           </div>  
          </div>  
        </div>  
        </React.Fragment>
    )  
}  
  
export default Login  