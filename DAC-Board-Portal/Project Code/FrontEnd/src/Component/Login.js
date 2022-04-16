import './LFR.css';
import './Board.css';
import React, { Component } from 'react'
import UserService from '../Services/UserService';
import "bootstrap/dist/css/bootstrap.css";
import swal from 'sweetalert';

 class Login extends Component {
   constructor(props) {
       super(props)
   
       this.state = {
            
            username: "",
            password: "",
        }
        this.changeuserpasswordHandler = this.changepasswordHandler.bind(this);
        this.changeusernameHandler = this.changeusernameHandler.bind(this);
        this.adduser = this.adduser.bind(this);
   }
   adduser = (e) => {
     e.preventDefault();
     let user = {username: this.state.username, password: this.state.password};
     if(user.username==="" || 
     user.password===""  )
     {
       swal("Error","Empty Field","error");

     }
     console.log('user => '+ JSON.stringify(user));
     
    
    UserService.loginUser(user).then(res =>{
      if(res.data)
      {
        sessionStorage.setItem("userdata",JSON.stringify(res.data))
        let variable = sessionStorage.getItem('userdata');
        variable= JSON.parse(variable);//string to object
        console.log(variable);
        console.log(variable.username);

        swal("Success","Login successful","success");
        this.props.history.push('/Homepage1');
      
      }
      else{
        swal("Error","wrong credintials","error");
        this.props.history.push('/Login');
        
        
      }
    });
  
   }
  
   
   changeusernameHandler= (event) => {
    this.setState({username: event.target.value});
  }
  changepasswordHandler= (event) => {
    this.setState({password: event.target.value});
  }
  
 
 register (){
       this.props.history.push('/Signup');
       sessionStorage.setItem("App-user",JSON.stringify())
   }

    gotoRegister1=()=>{
   this.props.history.push("/");
}
    render() {
        return (
            <div>
                <div className="common">
                <div className="container-fluid">
    <div className="Login">
      
    <form>
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

    <h1 className="mb-2"><u>LogIn</u></h1>
   
    <div class="form-group ">
    <label for="colFormLabel" class="col-sm-2 col-form-label">Username</label>
    <div class="col-lg">
      <input type="username" class="form-control" id="colFormLabel" placeholder="Enter Username" value={this.state.username} onChange={this.changeusernameHandler}></input>
    </div>
    </div>

    <div class="form-group">
    <label for="colFormLabel" class="col-sm-2 col-form-label">Password</label>
    <div class="col-lg">
      <input type="password" class="form-control" id="colFormLabel" placeholder="Enter Password" value={this.state.password} onChange={this.changepasswordHandler}></input>
    </div>
    </div>



    
   <button class="btn btn-outline-info btn-lg btn-block mt-2" type="submit" onClick={this.adduser}>LogIn</button>
   <button class="btn btn-outline-info btn-lg btn-block mt-2" onClick={this.register.bind(this)}>Register</button>
   <div><br></br><br></br>
   <br></br><button class="btn btn-sm btn-outline-info" onClick={this.gotoRegister1}>Back to Home</button></div>
   
   <div><h5>Register here..! If you are a new user.😎</h5></div>
   <div>
   <br></br>
   
   {/* <button class="btn btn-sm btn-outline-info" onClick={this.gotoRegister1}>Back to Home</button> */}
   </div>
    </form>
    </div>
    </div>
    </div>
</div>
        )
    }
}
export default Login;