import 'bootstrap/dist/css/bootstrap.min.css';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';


function Home() {
  

  let variable = sessionStorage.getItem('userdata');
    
  variable= JSON.parse(variable);
  return (
    <div style={{backgroundColor:"honeydew"}}>
    < div class="container-fluid justify-content-center" >
       
      
     
    <br></br>
    <h1 style={{color:"black",fontWeight:"bold"}}>Welcome  {variable.username} in C-DAC Acts DAC-BOARD PORTAL  ..!!😎 </h1>
    <br></br>
    <div class='text-center'>
    <h2  style={{color:"black",fontWeight:"bold"}}>
      Never stop learning because, Life never stops teaching.
    </h2>
    </div>
    <br></br>
    < div class="d-flex justify-content-center" >
    <div class="form-wrapper bg-light" style={{width:"75%", height:"60vh"}}>
   
        <h2 className=" d-flex justify-content-center" style={{alignItems:"center",color:"black",height:"20px",fontWeight:"bold"}}>Announcements</h2>
        <br></br>

        <marquee class="alert alert-primary" role="alert" width="100%" direction="left" height="50px">CCEE Prepration <a href="https://www.indiabix.com/placement-papers/cdac/3216" class="alert-link">Click here for more details</a>. Check out.</marquee>
      <marquee class="alert alert-danger" role="alert" width="100%" direction="left" height="50px">Interview Prepration  <a href="https://gdpi.hitbullseye.com/CDAC-Interview-Questions.php" class="alert-link">Click here for more details</a>. Check out.</marquee>
      <marquee class="alert alert-primary" role="alert" width="100%" direction="left" height="50px">Trending Technology "Cyber Security"  <a href="https://www.cisco.com/c/en_in/products/security/what-is-cybersecurity.html" class="alert-link">Click here for more details</a>. Check out.</marquee>
      <marquee class="alert alert-danger" role="alert" width="100%" direction="left" height="50px">Trending BigData Analysis  <a href="https://www.guru99.com/what-is-big-data.html#:~:text=Bigdata%20is%20a%20term%20used,sites%2C%20jet%20engines%2C%20etc.
                                                                                     " class="alert-link">Click here for more details</a>. Check out.</marquee>
      <marquee class="alert alert-primary" role="alert" width="100%" direction="left" height="50px">Upcoming interest in virtual reality and Augumention"  <a href="https://arvr.google.com/
" class="alert-link">Click here for more details</a>. Check out.</marquee>



   </div>
    </div>

      
    </div>
     </div>
  );
}

export default Home;