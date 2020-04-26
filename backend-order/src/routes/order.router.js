import OrderController from '../app/controllers/OrderController';
import router from './config.router';

export default [

    router.get('/orders/:id/', OrderController.show),

]