import "./as.css";
import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from 'react'
import ScheduleService from '../Services/ScheduleService';



class Scheduled extends Component {
  constructor(props){
      super(props)

      this.state={
             schedules:[]
      }
      
  }
  componentDidMount(){
    ScheduleService.getSchedule().then((res)=>{
       this.setState({schedules: res.data });
    });  
  }


render() {
  return (
    <div >
    
    <div className="container">
                 
                 <h2 className="text-center " >Scheduled Meetings</h2>
                  {/* <div className="row">
                      <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
                  </div> */}
                  <div className="row">
                      {/* <button className="btn btn-primary ">Search</button>
                   */}
                      <table className="table table-striped table-bordered ml-6 mr-6">
                        
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

                                  {/* <div className="container d-flex justify-content-center">
                                   <a href={schedule.link} target={"_blank"}><button type="button" class="btn btn-primary">Access Here</button></a> 
                               
                               </div> */}
                               
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

export default Scheduled;