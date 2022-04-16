import "./as.css";
import React, { Component } from 'react'
import MessageService from '../Services/MessageService';
class MessagesAdmin extends Component {
  constructor(props){
      super(props)

      this.state={
             messages:[]
      }
      
  }
  componentDidMount(){
    MessageService.getMessage().then((res)=>{
       this.setState({messages: res.data });
    });  
  }
  


render() {
  return (
   
    <div className="container">
                 
                <h2 className="text-center" >Messages List</h2>
                
                 <div className="row">
                  
                     <table className="table table-striped table-bordered">
                       
                       <thead>
                           <tr>
                               <th >Sr no</th>
                               <th >User Id</th>
                               <th >Message Content</th>
                              
            
                           </tr>
                       </thead>
                     
                   <tbody>
                      {
                   this.state.messages.map(
                    messages =>
                        <tr key={messages.user.userid}>
                        <td> {messages.id} </td> 
                        <td> {messages.user.userid} </td>
                        <td> {messages.message} </td>
                        
                        </tr>
                     
                     )
                   }
                   </tbody>

                     </table>
                 </div>
    </div>
  
    
  );
 }
}

export default MessagesAdmin;