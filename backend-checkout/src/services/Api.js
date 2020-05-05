import Axios from 'axios';
import 'dotenv/config';

const ApiProduct = Axios.create({
    baseURL: `http://${process.env.PRODUCT_URI}`,
    headers: {
        "Content-Type": "application/json"
    }
})

const ApiAuth = (token) => Axios.create({
    baseURL: `http://${process.env.AUTH_URI}`,
    headers: {
        "Content-Type": "application/json",
        "Authorization": `${token}`
    }
})

export default { ApiProduct, ApiAuth };
