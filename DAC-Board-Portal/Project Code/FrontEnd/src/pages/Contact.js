import react from 'react';
import './Contact.css';

import rohini from '../photo/rohini.jpg';
import komal from '../photo/komal.jpg';


const Contact = props => {
  return (
    <>
      <div >
      <br></br>
        <h1 style={{fontWeight:"bold"}}>Contact Us</h1><br />
        
     
        <div className="container-fluid d-flex justify-content-center">
          <div className="row" >
		  

            <div className="card text-center mb-2 mr-2 class="border-dark >
              <div className="overflow">
                <img src={rohini} alt="" className="card-img-top" />
              </div>
              <div className="card-body text-dark">
                <h4 className="card-title">Rohini Nikam</h4>
                <p className="card-text text-secondary">
                  <dd>nikamrohini22@gmail.com</dd>
                  <dd></dd>
                </p>
              </div>
            </div>
			

            <div className="card text-center mb-2 mr-2">
              <div className="overflow">
                <img src={komal} alt="" className="card-img-top" />
              </div>
              <div className="card-body text-dark">
                <h4 className="card-title">Komal Mali</h4>
                <p className="card-text text-secondary">
                  <dd>malikomal71@gmail.com</dd>
                  <dd></dd>
                </p>
              </div>
            </div>
			

           
			

          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </>
  );
}

export default Contact;