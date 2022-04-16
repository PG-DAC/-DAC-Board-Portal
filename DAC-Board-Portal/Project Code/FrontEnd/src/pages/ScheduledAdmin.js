// import React from 'react';
import "./as.css";
import "./Admin.css";
import React, { Component } from 'react';
import ScheduleService from '../Services/ScheduleService';




class ScheduledAdmin extends Component {
  constructor(props){
    super(props)

    this.state={
           schedules:[]
    }
    this.addSchedule = this.addSchedule.bind(this);
    this.editSchedule = this.editSchedule.bind(this);
        this.deleteSchedule = this.deleteSchedule.bind(this);
}

deleteSchedule(id){
  ScheduleService.deleteSchedule(id).then( res => {
      this.setState({schedules: this.state.schedules.filter(schedule => schedule.id !== id)});
  });
}
editSchedule(id){
this.props.history.push(`/add-schedule/${id}`);
}
componentDidMount(){
  ScheduleService.getSchedule().then((res)=>{
     this.setState({schedules: res.data });
  });  
}
addSchedule(){
  this.props.history.push('/add-schedule/_add');
}

render() {
  return (
    
    <div>
      {/* <div className="body2">
      <div className="container"> */}
                 
                <h2 className="text-center" >Scheduled Meetings</h2>
                 {/* <div className="row">
                     <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
                 </div> */}
                 <div className="row">
                     {/* <button className="btn btn-primary ">Search</button>
                  */}
                     <table className="table table-striped table-bordered">
                       
                        <thead>
                            <tr>
                                <th>Topic Name</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Meeting Id</th>
                                <th>Meeting Password</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                         {
                           this.state.schedules.map(
                               schedule=>
                               <tr key={schedule.id}>
                                  
                                  <td>{schedule.topicName}</td>
                                  <td>{schedule.date}</td>
                                  <td>{schedule.time}</td>
                                  <td>{schedule.meetingId}</td>
                                  <td>{schedule.password}</td> 

                                  {/* <td> <div className="container d-flex justify-content-center">
                                  <a href={schedule.link} target={"_blank"}><button type="button" class="btn btn-danger mt-1 ">Access Here</button></a> 
                                  </div>
                                  </td> */}
                                 
                                  <td>
                                                 <button onClick={ () => this.editSchedule(schedule.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteSchedule(schedule.id)} className="btn btn-danger">Delete </button>
                                             </td>
                                  
                                  
                               </tr>
                           )  
                         }
                       </tbody>  
                        
        </table>
        </div>
        <div className="d-flex justify-content-center">
        <button className="btn btn-primary" onClick={this.addSchedule}> Add Schedule</button>
        </div>
      </div>
    // </div>
    // </div> 
    
  );
}
}

export default ScheduledAdmin;