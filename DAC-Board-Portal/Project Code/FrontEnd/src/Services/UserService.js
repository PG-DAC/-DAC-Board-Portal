import axios from 'axios'

const USER_API_BASE_URL = 'http://localhost:8080/api/users';
const USER_API_BASE_URL1 = 'http://localhost:8080/api/feedback';
const USER_API_BASE_URL2 = 'http://localhost:8080/api/loginusers';
const USER_API_BASE_URL3 = 'http://localhost:8080/api/admin-feedback';
class UserService {
    getUsers(){
      return axios.get(USER_API_BASE_URL);
    }
    registerUser(user){
      console.log(user.userid);
      return axios.post(USER_API_BASE_URL, user);
  }
  
  loginUser(user){
    console.log(user.userid);
    return axios.post(USER_API_BASE_URL2, user);
}

  feedbackUser(feedback){
    console.log(feedback);
    return axios.post(USER_API_BASE_URL1, feedback);
}
  
getFeedback(){
  return axios.get(USER_API_BASE_URL3);
}

}

export default new UserService();