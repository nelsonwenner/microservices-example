import ProductController from '../app/controllers/ProductController';
import router from './config.router';

export default [

    router.get('/products/', ProductController.index),
    router.get('/products/:id/', ProductController.show),
    router.post('/products/stock/', ProductController.stock)

]