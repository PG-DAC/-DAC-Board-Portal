import axios from 'axios';

const MESSAGE_API_BASE_URL = "http://localhost:8080/mes/mesget";

class MessageService {

    getMessage(){
        return axios.get(MESSAGE_API_BASE_URL);
    }
    createMessage(message){
        return axios.post(MESSAGE_API_BASE_URL, message);
    }
    

    

    
   
}
export default new MessageService()