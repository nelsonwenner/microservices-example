import Axios from 'axios';

export default Axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        "Content-Type": "application/json"
    }
})
