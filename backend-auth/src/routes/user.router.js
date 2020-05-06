import UserController from '../app/controllers/UserController';
import router from './config.router';

export default [

    router.post('/auth', UserController.auth),

]