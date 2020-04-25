import Axios from 'axios';
import 'dotenv/config';

export default Axios.create({
    baseURL: `${process.env.PRODUCT_URI}`,
    headers: {
        "Content-Type": "application/json"
    }
})
