import OrderController from '../app/controllers/OrderController';
import router from './config.router';

export default [

    router.post('/orders/', OrderController.index),

]