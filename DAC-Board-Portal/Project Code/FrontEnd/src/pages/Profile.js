import React from 'react';
import "./as.css";
import "../Register.css"
import Img from "./images.png";


function Profile() {

  let variable = sessionStorage.getItem('userdata');
  variable= JSON.parse(variable);
  return (
    
    <div className="container d-flex justify-content-center mt-6 " >
    <div className="form-wrapper"style={{width:"75%", height:"60vh"}}>
        <h1 className="mb-6"style={{fontWeight:"bold"}}>Profile</h1>
        <div className="d-flex justify-content-center">
           <img src={Img} />
        </div>
        <table className="table table-striped table-bordered ml-3 mr-6 mt-2">

       <div class="mb-3 row">
       <label for="staticEmail" class="col-sm-2 col-form-label">USER ID :</label>
    <div >
      <h1 className="mt-2">{variable.userid}</h1>
    </div>
  </div>
  <div class="mb-3 row">
    <label for="staticEmail" class="col-sm-2 col-form-label">USERNAME :</label>
    <div>
    <h1 className="mt-2">{variable.username}</h1>
    </div>
  </div>
  <div class="mb-3 row">
    <label for="staticEmail" class="col-sm-2 col-form-label">EMAIL :</label>
    <div >
    <h1 className="mt-2">{variable.email}</h1>
    </div>
  </div>
       </table>
  
  
    </div>
</div>
  );
}

export default Profile;
