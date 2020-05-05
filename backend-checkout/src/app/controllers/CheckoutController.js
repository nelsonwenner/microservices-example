import Queue from '../../services/queue/Queue';
import Api from '../../services/Api';


class CheckoutController {
    
    async store(req, res) {

        try {

            const { authorization } = req.headers;
            const { email, product_id } = req.body;
            
            const checkoutAuth = await Api.ApiAuth(authorization).post('/auth/checkout-token');
            console.log("\nTESTS: ", checkoutAuth)
            if (!checkoutAuth.data.auth && !(checkoutAuth.data.email == email)) { throw new Error('Failure Authorization') }
            
            const { data } = await Api.ApiProduct.post('/products/stock/', {product_id: product_id});
            
            if (!data.status) { throw new Error('not in stock') }
            
            const payload = JSON.stringify({user: checkoutAuth.data.user_id, product: product_id, created_at: new Date()});
            
            await Queue.publish('checkout_exchange', 'checkout', payload);

            return res.status(200).json({status: true});
            
        } catch (error) { 
            switch (error.message) {
                case 'Failure Authorization':
                    return res.status(401).json({error: 'Failure Authorization' });
                case 'Credentials invalid':
                    return res.status(400).json({error: 'Credentials invalid' });
                case 'not in stock':
                    return res.status(404).json({error: 'not in stock' });
                default:
                    return res.status(400).json({error: error.message });
            }
        }
    }
}

export default new CheckoutController();