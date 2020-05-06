import Order  from '../models/Order';
import Api from '../../services/Api';


class OrderController {
    
    async index(req, res) {

        try {

            const { authorization } = req.headers;
            
            const split = authorization.split('Bearer');
            const token = split[1].replace(' ', '');

            const { data } = await Api.ApiAuth(token).post('/auth/checkout-token');
            
            if (!data.auth) { throw new Error('Token invalid') }

            const orders = await Order.findAll({where: {user_id: data.user_id}});

            return res.status(200).json(orders);
            
        } catch (error) { 
            switch (error.message) {
                case 'User not found':
                    return res.status(404).json({error: 'User not found', status: false});
                case 'Credentials invalid':
                    return res.status(401).json({error: 'Credentials invalid', status: false});
                default:
                    return res.status(400).json({error: error.message });
            }
        }
    }
}

export default new OrderController();