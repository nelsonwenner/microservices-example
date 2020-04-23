import ProductController from '../app/controllers/ProductController';

export default [

    router.get('/products/', ProductController.index),
    router.get('/products:id/', ProductController.show)

]