import React, { Component } from 'react'
import MessageService from '../Services/MessageService';

class CreateMessage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
           message:''
        }
        this.changemessageHandler = this.changemessageHandler.bind(this);
        this.saveOrUpdateMessage = this.saveOrUpdateMessage.bind(this);
    }

    
    saveOrUpdateMessage = (e) => {
        e.preventDefault();
        let variable=sessionStorage.getItem("userdata");
        variable=JSON.parse(variable);
        let id=variable.userid;

        let message = {message: this.state.message,userid:id};
        console.log('message => ' + JSON.stringify(message));

        // step 5
        if(this.state.id === '_add'){
            MessageService.createMessage(message).then(res =>{
                this.props.history.push('/messages');
            });
        }else{
            MessageService.updateMessage(message, this.state.id).then( res => {
                this.props.history.push('/messages');
            });
        }
    }
    
    changemessageHandler= (event) => {
        this.setState({message: event.target.value});
    }
    

    cancel(){
        this.props.history.push('/messages');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Post</h3>
        }else{
            return <h3 className="text-center">Update Recording</h3>
        }
    }
    render() {
        return (
            <div>
                <div className="body1 ">
                <div className="form-wrapper">
                        <div className = "row">
                           
                                {
                                    this.getTitle()
                                }
                                
                                    <form>
                                        <div>
                                        <div className = "form-group">
                                            <label> Message: </label>
                                            <div >
                                            <textarea placeholder="Message" name="message" className="form-control" 
                                                value={this.state.message} onChange={this.changemessageHandler}/>
                                                </div>
                                        </div>
                                        </div>
                                      
                                        <div>
                                        <button className="btn btn-success" onClick={this.saveOrUpdateMessage}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                        </div>
                                   
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
           
           
        )
    }
}

export default CreateMessage;