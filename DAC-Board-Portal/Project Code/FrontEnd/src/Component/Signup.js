import React, { Component } from 'react'
import UserService from '../Services/UserService';
import './LFR.css';
import swal from 'sweetalert';

    const regex =/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;//input validation-email
    const regex1=/^([a-zA-Z])+$/;//char
    const regex2=/^([0-9])/;//number
   
export default class Signup extends Component {
  

   constructor(props) {
       super(props)
   
       this.state = {
            userid: '',
            username: '',
            password: '',
            email: ''
      
      }
        this.changeuseridHandler = this.changeuseridHandler.bind(this);
        this.changeusernameHandler = this.changeusernameHandler.bind(this);
        this.adduser = this.adduser.bind(this);
   }
   
   adduser = (e) => {
     e.preventDefault();
     let user = {userid: this.state.userid, username: this.state.username, password: this.state.password, email: this.state.email};
     if(user.userid==="" || 
     user.username==="" || 
     user.password==="" || 
     user.email==="" )
     {
       swal("Error","Please fill every detail","error");

     }
     else if(!regex1.test(user.username)){

       swal("Error!","Please Enter Valid name","error");
     
   }
   else if (!regex.test(user.email))
   {
     swal("Error!","Please Enter Valid Email Address","error");
   
   } 
   else if(user.password.length<5)
   {
     swal("Error!","Please Enter password with minimum 5 characters","error");
     
   }else if(!regex2.test(user.userid) || user.userid.length < 3 ||  user.userid.length > 3){
       swal("Error!!","Please Enter userid with minimum 3 characters","error");
       
   }else{
     console.log(user);
     UserService.registerUser(user).then(res =>{
      swal("Success","Signup sucessful","success");
      this.setState({
             userid:"",
             username:"",
             password:"",
             email:""
      })
      this.props.history.push('/Signup');

});
     
   }

      
    
    
   
  

  }
  
   changeuseridHandler= (event) => {
     this.setState({userid: event.target.value});
   }
   changeusernameHandler= (event) => {
    this.setState({username: event.target.value});
  }
  changepasswordHandler= (event) => {
    this.setState({password: event.target.value});
  }
  changeemailHandler= (event) => {
    this.setState({email: event.target.value});
  }
 
  login(){
       this.props.history.push('/Login');//navigate the page
   }
   
    render() {
        return (
            <div>
                 <div className="common">
                <div className="container-fluid">
               
    <div className="Signup">
    <form >
    <div class="board">
        <span className="dac">D</span>
        <span className="dac">A</span>
        <span className="dac">C</span>
        <span className="dac">-</span>
        <span className="dac">B</span>
        <span className="dac">O</span>
        <span className="dac">A</span>
        <span className="dac">R</span>
        <span className="dac">D</span>
        </div>

        
    <h1 className="mb-2"><u>Registration</u></h1>
   
    <div class="form-group ">
    <label for="colFormLabel" class="col-sm-2 col-form-label">UserId</label>
    <div class="col-lg">
      <input type="text" class="form-control" id="colFormLabel" placeholder="Enter ID" value={this.state.userid} onChange={this.changeuseridHandler}></input>
    </div>
    </div>

    <div class="form-group">
    <label for="colFormLabel" class="col-sm-2 col-form-label">Username</label>
    <div class="col-lg">
      <input type="username" class="form-control" id="colFormLabel" placeholder="Enter Username" value={this.state.username} onChange={this.changeusernameHandler}></input>
    </div>
    </div>

    <div class="form-group ">
    <label for="colFormLabel" class="col-sm-2 col-form-label">Password</label>
    <div class="col-lg">
      <input type="password" class="form-control" id="colFormLabel" placeholder="Enter Password" value={this.state.password} onChange={this.changepasswordHandler}></input>
    </div>
    </div>
    
  
    <div class="form-group ">
    <label for="colFormLabel" class="col-sm-2 col-form-label">Email</label>
    <div class="col-lg">
      <input type="email" class="form-control" id="colFormLabel" placeholder="Enter Email" value={this.state.email} onChange={this.changeemailHandler}></input>
    </div>
    </div>
  
   <button class="btn btn-outline-info btn-lg btn-block mt-2" type="submit" onClick={this.adduser}>Register</button>
   <button class="btn btn-outline-info btn-lg btn-block mt-2" onClick={this.login.bind(this)}>Login</button>
    </form>
    </div>
    </div>
    </div>
</div>
        )
    }
}
