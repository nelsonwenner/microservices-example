import Order from '../models/Order';
import Api from '../../services/Api';


class OrderController {
    
    async index(req, res) {

        try {

            const { user, password } = req.body;
            
            const auth = await Api.ApiAuth.post('/auth/', {user: user, password: password});

            if (auth.status == 404) { throw new Error('User not found') }

            if (auth.status == 401) { throw new Error('Credentials invalid') }

            const orders = await Order.findAll({where: {user_id: auth.data.user_id}});

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