import axios from 'axios';

const RECORDING_API_BASE_URL = "http://localhost:8080/a/rec";

class RecordingService {

    getRecording(){
        return axios.get(RECORDING_API_BASE_URL);
    }
    createRecording(recording){
        return axios.post(RECORDING_API_BASE_URL, recording);
    }
    getRecordingById(recordingId){
        return axios.get(RECORDING_API_BASE_URL + '/' + recordingId);
    }

    updateRecording(recording, recordingId){
        return axios.put(RECORDING_API_BASE_URL + '/' + recordingId, recording);
    }

    deleteRecording(recordingId){
        return axios.delete(RECORDING_API_BASE_URL + '/' + recordingId);
    }

    

    
   
}
export default new RecordingService()
