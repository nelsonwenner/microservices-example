import Order from '../models/Order';


class OrderController {

    async show(req, res) {

        try {
            console.log("oi")

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