import React, { Component } from 'react';
import UserService from '../Services/UserService';
import '../Component/LFR.css';
// import '../background.css';
import swal from 'sweetalert';



export default class Feedback extends Component  {
    constructor(props) {
        super(props)
    
        this.state = {
             
              comments:'',
              userid:null
              
        }

      
        this.changecommentsHandler = this.changecommentsHandler.bind(this);
        
        this.adduser = this.adduser.bind(this);

    }
    
    adduser = (e) => {
        e.preventDefault();

        let variable=sessionStorage.getItem("userdata");
        variable=JSON.parse(variable);
        let id=variable.userid;

        let feedback = {comments: this.state.comments, userid:id};
        
        // console.log('feedback => '+ JSON.stringify(feedback));
      
       
       UserService.feedbackUser(feedback).then(res =>{
        swal("Success","Feedback Submited Sucessfully","success");
        this.setState({
         
          comments:"",
          userid:""
   })

              this.props.history.push('/Homepage1');
       
       });
     
       
     }  

    
      changecommentsHandler= (event) => {
       this.setState({comments: event.target.value});
     }
     
     

    
    render() {
        return (
            <div>
                


 
                <div className="mt-6"> 
        <div className="container-fluid mt-10">
      
        
        <div className="feedback">
        
       <form action="" method="">
       <h1 className="mb-2"><u>Feedback</u></h1>
         <h6 className="mb-2">Please Provide Your Feedback Below:</h6> 
           <h5 className="mb-2"><b>1) How was your learning experience?? </b></h5> 

           <div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline1" name="customRadioInline" class="custom-control-input" value="Excellent"></input>
  <label class="custom-control-label" for="customRadioInline1">Excellent</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline2" name="customRadioInline" class="custom-control-input"></input>

  <label class="custom-control-label" for="customRadioInline2">Good</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline3" name="customRadioInline" class="custom-control-input"></input>

  <label class="custom-control-label" for="customRadioInline3">Average</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline4" name="customRadioInline" class="custom-control-input"></input>

  <label class="custom-control-label mb-2" for="customRadioInline4">Poor</label>
</div>



<h5 className="mb-2"><b>2) Is the portal useful to improve your studies? </b></h5> 

           <div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline5" name="customRadioInline1" class="custom-control-input"></input>
  <label class="custom-control-label" for="customRadioInline5">Excellent</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline6" name="customRadioInline1" class="custom-control-input"></input>

  <label class="custom-control-label" for="customRadioInline6">Good</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline7" name="customRadioInline1" class="custom-control-input"></input>

  <label class="custom-control-label" for="customRadioInline7">Average</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline8" name="customRadioInline1" class="custom-control-input"></input>

  <label class="custom-control-label className=mb-2" for="customRadioInline8">Poor</label>
</div>


<h5 className="mb-2"><b>3) was the schedule helped you in managing time? </b></h5> 

           <div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline9" name="customRadioInline2" class="custom-control-input"></input>
  <label class="custom-control-label" for="customRadioInline9">Excellent</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline10" name="customRadioInline2" class="custom-control-input"></input>

  <label class="custom-control-label" for="customRadioInline10">Good</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline11" name="customRadioInline2" class="custom-control-input"></input>

  <label class="custom-control-label" for="customRadioInline11">Average</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline12" name="customRadioInline2" class="custom-control-input"></input>

  <label class="custom-control-label className=mb-2" for="customRadioInline12">Poor</label>
</div>


<h5 className="mb-2"><b>4) Is the pace of learning useful? </b></h5> 

           <div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline13" name="customRadioInline3" class="custom-control-input"></input>
  <label class="custom-control-label" for="customRadioInline13">Excellent</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline14" name="customRadioInline3" class="custom-control-input"></input>

  <label class="custom-control-label" for="customRadioInline14">Good</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline15" name="customRadioInline3" class="custom-control-input"></input>

  <label class="custom-control-label" for="customRadioInline15">Average</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline16" name="customRadioInline3" class="custom-control-input"></input>

  <label class="custom-control-label className=mb-2" for="customRadioInline16">Poor</label>
</div>

<h5 className="mb-2"><b>5) Are you able to clear your doubts? </b></h5> 

           <div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline17" name="customRadioInline4" class="custom-control-input"></input>
  <label class="custom-control-label" for="customRadioInline17">Excellent</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline18" name="customRadioInline4" class="custom-control-input"></input>

  <label class="custom-control-label" for="customRadioInline18">Good</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline19" name="customRadioInline4" class="custom-control-input"></input>

  <label class="custom-control-label" for="customRadioInline19">Average</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline20" name="customRadioInline4" class="custom-control-input"></input>

  <label class="custom-control-label className=mb-2" for="customRadioInline20">Poor</label>
</div>

<div class="mt-3">
    <label for="validationTextarea">Comments:</label>
    <textarea class="form-control is-invalid mt-2 " id="validationTextarea" placeholder="Enter your Comments Here.." onChange={this.changecommentsHandler}></textarea>
    <div>
    <div class="invalid-feedback">
      Please enter your message here.
      </div>
      <div>
  <button class="btn btn-outline-info mt-2"  type="submit" onClick={this.adduser}>Submit Feedback</button>
  </div>
    </div>
  </div>
 
</form>
        </div>
      </div>       
        

</div>

</div>
        );
    }
}