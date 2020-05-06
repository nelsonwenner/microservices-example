import auth from '../services/auth/token.auth';
import router from './config.router';


export default [

    router.post('/auth/checkout-token', auth.checkToken),

]