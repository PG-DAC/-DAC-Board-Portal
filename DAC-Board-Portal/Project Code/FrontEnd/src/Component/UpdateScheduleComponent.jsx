import React, { Component } from 'react'
import ScheduleService from '../Services/ScheduleService';

class UpdateScheduleComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            topicName: '',
            date: '',
            time: '',
            meetingId:'',
            password: ''
        }
    
        this.changetopicnameHandler = this.changetopicnameHandler.bind(this);

        this.updateSchedule = this.updateSchedule.bind(this);
    }

    componentDidMount(){
       
        ScheduleService.getScheduleById(this.state.id).then( (res) =>{
            let schedule = res.data;
            this.setState({topicName: schedule.topicName,
                date: schedule.date,
                time: schedule.time,
                meetingId: schedule.meetingId,
                password: schedule.password
                });
            });
              
    }

    updateSchedule = (e) => {
        e.preventDefault();
        let schedule = {topicName: this.state.topicName, date: this.state.date,time: this.state.time, meetingId: this.state.meetingId,password: this.state.password};
        console.log('schedule => ' + JSON.stringify(schedule));
        console.log('id => ' + JSON.stringify(this.state.id));
        ScheduleService.updateSchedule(schedule, this.state.id).then( res => {
            this.props.history.push('/scheduledAdmin');
        });
    }
    
    changetopicnameHandler= (event) => {
        this.setState({topicName: event.target.value});
    }
    changedateHandler= (event) => {
        this.setState({date: event.target.value});
    }
    changetimeHandler= (event) => {
        this.setState({time: event.target.value});
    }
    changemeetingIdHandler= (event) => {
        this.setState({meetingId: event.target.value});
    }
    changepasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }
    cancel1(){
        this.props.history.push('/scheduledAdmin');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Schedule</h3>
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label> Topic Name: </label>
                                            <input placeholder="Topic Name" name="topicName" className="form-control" 
                                                value={this.state.topicName} onChange={this.changetopicnameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Date: </label>
                                            <input placeholder="Date" name="date" className="form-control" 
                                                value={this.state.date} onChange={this.changedateHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Time: </label>
                                            <input placeholder="Time" name="time" className="form-control" 
                                                value={this.state.time} onChange={this.changetimeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Meeting Id: </label>
                                            <input placeholder="Meeting Id" name="meetingId" className="form-control" 
                                                value={this.state.meetingId} onChange={this.changemeetingIdHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Password: </label>
                                            <input placeholder="Password" name="password" className="form-control" 
                                                value={this.state.password} onChange={this.changepasswordHandler}/>
                                        </div>
                                        
                                        <button className="btn btn-success" onClick={this.updateSchedule}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel1.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateScheduleComponent;
