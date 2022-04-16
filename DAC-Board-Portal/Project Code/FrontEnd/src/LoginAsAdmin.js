import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router,Route,Link, useLocation, useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import "./Register.css";




function LoginAsAdmin(){
    const history=useHistory();
    const[user,setUser]=useState({
      username:"",
      password:"",
      
    });
  
    const processLogin1=(e)=>{
      e.preventDefault();
      console.log(user);
     
      if(user.username==="" || 
      user.password===""  )
      {
        swal("Error","Empty Field","error");
       
      }else if(user.username!== "admin" || user.password!=="admin"){
        swal("Error","wrong crdentials","error");
      
      }
      else{
        swal("Success","Login sucessful","success");
      history.push("/Admin");
     
      }
        
    }
    const gotoRegister1=()=>{
      history.push("/");
  }
  
  const syncUsername1=(e)=>{setUser({...user,username:e.target.value})}
   
  const syncPassword1=(e)=>{ setUser({...user,password:e.target.value})}
  
    return(

    
        <div className="wrapper">
                 <div className="body3">
    <h1 className="bg-light">Admin Login</h1><br></br>
    <br></br>
    <br></br>
        <div className="form-wrapper">
          <h1>Log In</h1>
  
          <div className="username">
         Username<input type="text" name="username" onChange={syncUsername1}/>
        </div>
        <div className="password">
         Password<input type="password" name="username"onChange={syncPassword1}/>
        </div>
        <div className="createAccount">
         <button onClick={processLogin1}>Login</button>
        </div>
        <div className="createAccount">
        <button onClick={gotoRegister1}>Back to Home</button>
        </div>
        
        
      </div>
     </div>
     </div>
    
     
    );
  }
export default LoginAsAdmin;