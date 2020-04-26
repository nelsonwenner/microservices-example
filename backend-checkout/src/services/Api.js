import Axios from 'axios';
import 'dotenv/config';

const ApiProduct = Axios.create({
    baseURL: `http://${process.env.PRODUCT_URI}`,
    headers: {
        "Content-Type": "application/json"
    }
})

const ApiAuth = Axios.create({
    baseURL: `http://${process.env.AUTH_URI}`,
    headers: {
        "Content-Type": "application/json"
    }
})

export default { ApiProduct, ApiAuth };
