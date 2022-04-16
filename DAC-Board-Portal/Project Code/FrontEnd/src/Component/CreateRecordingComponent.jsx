import React, { Component } from 'react'
import RecordingService from '../Services/RecordingService';
import 'bootstrap/dist/css/bootstrap.min.css';
import swal from 'sweetalert';

class CreateRecordingComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            topicName: '',
            date: '',
            passcode:'',
            link: ''
        }
        this.changetopicnameHandler = this.changetopicnameHandler.bind(this);
        // this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveOrUpdateRecording = this.saveOrUpdateRecording.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.topicName === "" ||
        this.state.date === "" ||
        this.state.passcode === "" ||
        this.state.link === "" )
        {
            
            
            
        }
        else{
            
            RecordingService.getRecordingById(this.state.id).then( (res) =>{
                let recording = res.data;
                this.setState({topicName: recording.topicName,
                    date: recording.date,
                    passcode: recording.passcode,
                    link: recording.link
                });
            });
        }        
    }
    saveOrUpdateRecording = (e) => {
        e.preventDefault();
        let recording = {topicName: this.state.topicName, date: this.state.date, passcode: this.state.passcode,link: this.state.link};
        console.log('recording => ' + JSON.stringify(recording));

        // step 5
        if(this.state.id === '_add'){
            
            //swal("Error","Empty Field","error");
            RecordingService.createRecording(recording).then(res =>{
                
                
                this.props.history.push('/recordingAdmin');
            });
        }else{
            
            RecordingService.updateRecording(recording, this.state.id).then( res => {
                this.props.history.push('/recordingAdmin');
            });
        }
    }
    
    changetopicnameHandler= (event) => {
        this.setState({topicName: event.target.value});
    }
    changedateHandler= (event) => {
        this.setState({date: event.target.value});
    }
    changepasscodeHandler= (event) => {
        this.setState({passcode: event.target.value});
    }
    changelinkHandler= (event) => {
        this.setState({link: event.target.value});
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
            return <h3 className="text-center">Add Recording</h3>
        }else{
            return <h3 className="text-center">Update Recording</h3>
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
                                        <div>
                                        <div className = "form-group">
                                            <label> Topic Name: </label>
                                            <input    placeholder="Topic Name" name="topicName" className="form-control" 
                                                value={this.state.topicName} onChange={this.changetopicnameHandler}/>
                                        </div>
                                        </div>
                                       <div>
                                        <div className = "form-group">
                                            <label> Date: </label>
                                            <input   type="Date" placeholder="DD/MM/YYYY" className="form-control" 
                                                value={this.state.date} onChange={this.changedateHandler}/>
                                        </div>
                                        </div>
                                        <div className = "form-group">
                                            <label> Passcode: </label>
                                            <input  placeholder="Passcode" name="passcode" className="form-control" 
                                                value={this.state.passcode} onChange={this.changepasscodeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Link: </label>
                                            <input   placeholder="Link" name="link" className="form-control" 
                                                value={this.state.link} onChange={this.changelinkHandler}/>
                                        </div>
                                        <div>
                                        <button className="btn btn-success" onClick={this.saveOrUpdateRecording}>Save</button>
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

export default CreateRecordingComponent;
