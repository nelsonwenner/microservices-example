import Checkout from '../models/Checkout';
import Api from '../../services/Api'


class CheckoutController {
    
    async store(req, res) {

        try {

            const { user, password, product_id } = req.body;
            
            const auth = await Api.ApiAuth.post('/auth/', {user: user, password: password})

            if (auth.status == 404) { throw new Error('User not found') }

            if (auth.status == 401) { throw new Error('Credentials invalid') }
            
            const { data } = await Api.ApiProduct.post('/products/stock/', {product_id: product_id});
            
            if (!data.status) { throw new Error('not in stock') }
        
            await Checkout.create({user_id: auth.data.user_id, product_id: product_id});

            return res.status(200).json({status: true});
            
        } catch (error) { 
            switch (error.message) {
                case 'User not found':
                    return res.status(404).json({error: 'User not found' });
                case 'Credentials invalid':
                    return res.status(400).json({error: 'Credentials invalid' });
                case 'not in stock':
                    return res.status(404).json({error: 'not in stock' });
                default:
                    return res.status(400).json({error: error.message });
            }
        }
    }

    async index(req, res) {

        try {

            const checkouts = await Checkout.findAll({});
            return res.status(200).json(checkouts);
            
        } catch (error) { 
            switch (error.message) {
                case error.message:
                    return res.status(400).json({error: error.message });
            }
        }
    }
}

export default new CheckoutController();