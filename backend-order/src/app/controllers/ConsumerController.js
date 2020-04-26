import Queue from '../../services/queue/Queue';
import Order from '../models/Order';


class ConsumerController {

    constructor() {
        this.consumer();
    }
    
    async consumer() {

        try {
        
            await Queue.consumer('checkout_exchange', 'checkout_queue', 'checkout', async (msg) => {

                console.log(`\n[X] Message receved: ${msg.content}`);

                const payload = JSON.parse(msg.content);

                const order = await Order.create({user_id: payload.user, product_id: payload.product, status: 'pending'});
                
                console.log(`\n[X] Order created with success!`);

                //Queue.publish('order_exchange', 'order', JSON.stringify(order));
            });

        } catch (error) { 
            switch (error.message) {
                default:
                    console.log("error")
            }
        }
    }
}

export default new ConsumerController();