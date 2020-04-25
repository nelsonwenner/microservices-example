import Checkout from '../models/Checkout';
import Api from '../../services/Api'
import User from '../models/User';


class CheckoutController {

    async index(req, res) {

        try {

            const { user, password, product_id } = req.body;
            
            const existsUser = await User.findOne({where: {name: user}});

            if (!existsUser) { throw 'User not found' }
            
            const validationUser = await User.findOne({where: {name: user, password: password}});

            if (!validationUser) { throw 'Credentials invalid' }
            
            const existproduct = await Api.post(`/products/stock/`, {product_id: product_id});

            if (!existproduct) { throw 'Product not exists' }
        
            await Checkout.create({user_id: validationUser.user_id, product_id: product_id});

            return res.status(200).json({status: true});
            
        } catch (error) { 
            switch (error.message) {
                case 'User not found':
                    return res.status(404).json({error: 'User not found' });
                case 'Credentials invalid':
                    return res.status(400).json({error: 'Credentials invalid' });
                case 'Product not exists':
                    return res.status(404).json({error: 'Product not exists' });
                default:
                    return res.status(400).json({error: error.message });
            }
        }
    }
}

export default new CheckoutController();