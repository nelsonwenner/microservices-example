import Product from '../models/Product';


class ProductController {

    async index(req, res) {

        try {

            const products = await Product.findAll({});
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
            const product = await Product.findOne({where: {product_id: id}});
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