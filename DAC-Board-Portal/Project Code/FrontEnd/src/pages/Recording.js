// import React from 'react';
import "./as.css";
import React, { Component } from 'react'
import RecordingService from '../Services/RecordingService';

class Recording extends Component {
  constructor(props){
      super(props)

      this.state={
             recordings:[]
      }
      
  }
  componentDidMount(){
    RecordingService.getRecording().then((res)=>{
       this.setState({recordings: res.data });
    });  
  }
  


render() {
  return (
    <div c>
    <div className="container">
                 
                <h2 className="text-center " >Recording List</h2>
                 {/* <div className="row">
                     <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
                 </div> */}
                 <div className="row">
                     {/* <button className="btn btn-primary ">Search</button>
                  */}
                     <table className="table table-striped table-bordered ml-3 mr-6">
                       
                       <thead>
                           <tr>
                               <th >Topic Name</th>
                               <th >Date</th>
                               <th >Recording Passcode</th>
                               <th >Recording Link</th>
                           </tr>
                       </thead>
                        <tbody>
                         {
                           this.state.recordings.map(
                               recording=>
                               <tr key={recording.id}>
                                   
                                  <td >{recording.topicName}</td>
                                  <td >{recording.date}</td>
                                  <td >{recording.passcode}</td>
                                  {/* <td>{recording.link}</td> */}
                                  <div className="container d-flex justify-content-center">
                                  <a href={recording.link} target={"_blank"}><button type="button" class="btn btn-danger mt-1 ">Access Here</button></a> 
                                  </div>
                               </tr>
                           )  
                         }
                       </tbody> 
                     </table>
                 </div>
    </div>
     </div>
    
  );
 }
}

export default Recording ;