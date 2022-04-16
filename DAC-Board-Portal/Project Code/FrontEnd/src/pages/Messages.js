import React, { Component } from "react";
import "./as.css";
import MessageService from '../Services/MessageService';


class Messages extends Component {
constructor(props){
    super(props)

    this.state={
           messages:[]
    }
    this.addMessage = this.addMessage.bind(this);
    
 
}

componentDidMount(){
  MessageService.getMessage().then((res)=>{
     this.setState({messages: res.data });
  });  
}
addMessage(){
  this.props.history.push('/add-message/_add');
}

      
    render() {
        const { formErrors } = this.state;

        return (
          
           
                <div className="container d-flex justify-content-center mt-6">
                <div className="form-wrapper">
                    <h1>Post your Doubts here</h1>
                   
                        
                        <div className="createAccount">
                        
                        <button className="btn btn-primary" onClick={this.addMessage}>Click Here</button>
            
              
                            
                        </div>
                         
                    
                </div>
            </div>
            
        );
    }
}

export default Messages;