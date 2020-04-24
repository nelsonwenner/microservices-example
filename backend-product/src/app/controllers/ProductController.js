import Product from '../models/Product';


class ProductController {

    async index(req, res) {

        try {

            const attributes = ['product_id', 'product', 'price']
            const products = await Product.findAll({attributes: attributes});
            return res.status(200).json(products);
            
        } catch (error) { 
            switch (error.message) {
                case error.message:
                    return res.status(400).json({error: error.message });
            }
        }
    }

    async show(req, res) {

        try {
            
            const { id } = req.params;
            const attributes = ['product_id', 'product', 'price']
            const product = await Product.findOne({where: {product_id: id}, attributes: attributes});
            return res.status(200).json(product);
            
        } catch (error) {
            switch (error.message) {
                case error.message:
                    return res.status(400).json({error: error.message });
            }
        }
    }
}

export default new ProductController();