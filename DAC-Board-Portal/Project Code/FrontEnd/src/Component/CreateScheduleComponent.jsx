import React, { Component } from 'react'
import ScheduleService from '../Services/ScheduleService';

class CreateScheduleComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            topicName: '',
            date: '',
            time: '',
            meetingId:'',
            password: ''
        }
        this.changetopicnameHandler = this.changetopicnameHandler.bind(this);
        // this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveOrUpdateSchedule = this.saveOrUpdateSchedule.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
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
    }
    saveOrUpdateSchedule = (e) => {
        e.preventDefault();
        let schedule = {topicName: this.state.topicName, date: this.state.date,time: this.state.time, meetingId: this.state.meetingId,password: this.state.password};
        console.log('schedule => ' + JSON.stringify(schedule));

        // step 5
        if(this.state.id === '_add'){
            ScheduleService.createSchedule(schedule).then(res =>{
                this.props.history.push('/scheduledAdmin');
            });
        }else{
            ScheduleService.updateSchedule(schedule, this.state.id).then( res => {
                this.props.history.push('/scheduledAdmin');
            });
        }
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

    // changeLastNameHandler= (event) => {
    //     this.setState({lastName: event.target.value});
    // }

    // changeEmailHandler= (event) => {
    //     this.setState({emailId: event.target.value});
    // }

    cancel(){
        this.props.history.push('/recordingAdmin');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Schedule</h3>
        }else{
            return <h3 className="text-center">Update Schedule</h3>
        }
    }
    render() {
        return (
            <div>
                <div className="body2">
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Topic Name: </label>
                                            <input placeholder="Topic Name" name="topicName"  className="form-control" 
                                                value={this.state.topicName} onChange={this.changetopicnameHandler} />
                                        </div>
                                        <div className = "form-group">
                                            <label> Date: </label>
                                            <input type="Date" placeholder="DD/MM/YYYY"  className="form-control" 
                                                value={this.state.date} onChange={this.changedateHandler} />
                                        </div>
                                        <div className = "form-group">
                                            <label> Time: </label>
                                            <input placeholder="Time" name="time"  className="form-control" 
                                                value={this.state.time} onChange={this.changetimeHandler} />
                                        </div>
                                        <div className = "form-group">
                                            <label> Meeting Id: </label>
                                            <input placeholder="Meeting Id" name="meetingId"  className="form-control" 
                                                value={this.state.meetingId} onChange={this.changemeetingIdHandler} />
                                        </div>
                                        <div className = "form-group">
                                            <label> Password: </label>
                                            <input placeholder="Password" name="password"  className="form-control" 
                                                value={this.state.password} onChange={this.changepasswordHandler} />
                                        </div>
                                        <div>
                                        <button className="btn btn-success" onClick={this.saveOrUpdateSchedule}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                        </div>
                                   
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
            </div>
        )
    }
}

export default CreateScheduleComponent;
