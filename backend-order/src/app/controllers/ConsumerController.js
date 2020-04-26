import Queue from '../../services/queue/Queue';
import Order from '../models/Order';


class ConsumerController {

    constructor() {
        this.consumer();
    }
    
    consumer() {

        try {
            
            Queue.consumer('checkout_exchange', 'checkout_queue', 'checkout', (msg) => {

                console.log(`\n[X] Message receved: ${msg.content}`);
                
                const payload = JSON.parse(msg.content);

                Promise.resolve(
                    Order.create({user_id: payload.user, product_id: payload.product, status: 'pending'})
                );
             
                console.log(`\n[X] Order created with success!`);
            });

        } catch (error) { 
            switch (error.message) {
                default:
                    return res.status(400).json({error: error.message });
            }
        }
    }
}

export default new ConsumerController();