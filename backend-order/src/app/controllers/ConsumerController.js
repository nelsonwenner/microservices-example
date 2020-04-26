import Queue from '../../services/queue/Queue';


class ConsumerController {

    constructor() {
        this.consumer();
    }
    
    consumer() {

        try {
            
            Queue.consumer('checkout_exchange', 'checkout_queue', 'checkout', (msg) => {

                console.log(`\n[X] Message receved: ${msg.content}`);

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