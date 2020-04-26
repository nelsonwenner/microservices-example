import CheckoutController from '../app/controllers/CheckoutController';
import router from './config.router';

export default [

    router.post('/checkouts/', CheckoutController.store),
    router.get('/checkouts/', CheckoutController.index),

]