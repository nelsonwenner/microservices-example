import Queue from '../../services/queue/Queue';
import Api from '../../services/Api';

class ConsumerController {

    constructor() {
        this.consumer();
    }
    
    async consumer() {

        try {
            
            await Queue.consumer('order_exchange', 'order_queue', 'order', async (msg) => {

                console.log(`\n[X] Message receved: ${msg.content}`);

                const payload = JSON.parse(msg.content);

                payload.status = "aproved";

                await Queue.publish('payment_exchange', 'payment', JSON.stringify(payload));
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