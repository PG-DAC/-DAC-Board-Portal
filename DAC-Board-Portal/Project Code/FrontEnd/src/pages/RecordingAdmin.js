// import React from 'react';
import "./as.css";
import "./Admin.css";
import React, { Component } from 'react';
import RecordingService from '../Services/RecordingService';



class RecordingAdmin extends Component {
  constructor(props){
      super(props)

      this.state={
             recordings:[]
      }
      this.addRecording = this.addRecording.bind(this);
      this.editRecording = this.editRecording.bind(this);
        this.deleteRecording = this.deleteRecording.bind(this);
   
  }

  deleteRecording(id){
    RecordingService.deleteRecording(id).then( res => {
        this.setState({recordings: this.state.recordings.filter(recording => recording.id !== id)});
    });
}
editRecording(id){
  this.props.history.push(`/add-recording/${id}`);
}
  componentDidMount(){
    RecordingService.getRecording().then((res)=>{
       this.setState({recordings: res.data });
    });  
  }
  addRecording(){
    this.props.history.push('/add-recording/_add');
}
  
  


render() {
  return (
    <div>
    {/* // <div className="body2"> */}
    {/* <div className="container"> */}
                 
                <h2 className="text-center" >Recording List</h2>
                 {/* <div className="row">
                     <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
                 </div> */}
                 <div className="row">
                     {/* <button className="btn btn-primary ">Search</button>
                  */}
                     <table className="table table-striped table-bordered ">
                       
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
                                 <td> <div className="container d-flex justify-content-center">
                                  <a href={recording.link} target={"_blank"}><button type="button" class="btn btn-danger mt-1 ">Access Here</button></a> 
                                  </div>
                                  </td>
                                  <td>
                                                 <button onClick={ () => this.editRecording(recording.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteRecording(recording.id)} className="btn btn-danger">Delete </button>
                                             </td>
                                  
                                  
                               </tr>
                           )  
                         }
                       </tbody> 
                     </table>
                 {/* </div> */}
            </div>
            <div className="d-flex justify-content-center">
            <button className="btn btn-primary" onClick={this.addRecording}> Add Recording</button>
            </div>
    
     </div>
    
    
  );
 }
}

export default RecordingAdmin ;