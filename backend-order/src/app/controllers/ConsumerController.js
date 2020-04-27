import Queue from '../../services/queue/Queue';
import Order from '../models/Order';


class ConsumerController {

    constructor() {
        this.consumerCheckout();
        this.consumerPayment();
    }
    
    async consumerCheckout() {

        try {
            
            await Queue.consumer('checkout_exchange', 'checkout_queue', 'checkout', async (msg) => {

                console.log(`\n[X] Message receved: ${msg.content}`);

                const payload = JSON.parse(msg.content);

                const order = await Order.create({user_id: payload.user, product_id: payload.product, status: 'pending'});
                
                console.log(`\n[X] Order created with success!`);

                await Queue.publish('order_exchange', 'order', JSON.stringify(order));
            });

        } catch (error) { 
            switch (error.message) {
                default:
                    console.log("error")
            }
        }
    }

    async consumerPayment() {

        try {
            
            await Queue.consumer('payment_exchange', 'payment_queue', 'payment', async (msg) => {

                console.log(`\n[X] Message receved: ${msg.content}`);

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