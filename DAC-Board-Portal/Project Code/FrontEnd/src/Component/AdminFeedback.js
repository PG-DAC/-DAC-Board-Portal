import React, { Component } from 'react'
import UserService from '../Services/UserService';

export default class AdminFeedback extends Component {
  

    constructor(props) {
        super(props)
    
        this.state = {
             feedbackList:[]
       }
         
    }
      
    componentDidMount(){
       UserService.getFeedback().then((response) => {
            this.setState({feedbackList: response.data});
            
        });
    }
 
    render() {
        return (
            <div style={{backgroundColor:"honeydew",height:"120%"}}>
            <div>
               <h2 className="text-center bg-light"> User's Feedback</h2>
               <div className="row">
                <table className="table table-striped table-bordered ml-3 mr-6">
                
                   <thead>
                     <tr>
                           <th>UserId</th>
                           <th>Comments</th>
                           
                     </tr>

                   </thead>

                   <tbody>
                      {
                   this.state.feedbackList.map(
                            feedbackList =>
                        <tr key={feedbackList.user.userid}>
                        <td> {feedbackList.user.userid} </td> 
                        <td> {feedbackList.comments} </td>
                        
                        </tr>
                     
                     )
                   }
                   </tbody>

                </table>

               </div>

          </div>
            </div>
        )
    }
 
}