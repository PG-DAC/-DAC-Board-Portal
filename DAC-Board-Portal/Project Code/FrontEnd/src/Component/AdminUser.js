import React, { Component } from 'react'
import UserService from '../Services/UserService';

export default class AdminUser extends Component {
  

    constructor(props) {
        super(props)
    
        this.state = {
             userList:[]
       }
         
    }
      
    componentDidMount(){
        UserService.getUsers().then((response) => {
            this.setState({userList: response.data});
        });
    }
 
    render() {
        return (
            <div>
               <h2 className="text-center bg-light"> User List</h2>
               <div className="row">
                <table className="table table-striped table-bordered ml-3 mr-6">
                
                   <thead>
                     <tr>
                           <th>UserId</th>
                           <th>UserName</th>
                           <th>Email ID</th>
                     </tr>

                   </thead>

                   <tbody>
                      {
                   this.state.userList.map(
                            userList =>
                        <tr key={userList.userid}>
                        <td> {userList.userid} </td> 
                        <td> {userList.username} </td>
                        <td> {userList.email} </td>
                        </tr>
                     
                     )
                   }
                   </tbody>

                </table>

               </div>


            </div>
        )
    }
 
}