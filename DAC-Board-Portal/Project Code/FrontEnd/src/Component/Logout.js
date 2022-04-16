import {useHistory} from 'react-router-dom';

function Logout(){
    const history= useHistory();
    sessionStorage.clear();
    history.push("/Login");
   
}

export default Logout;  