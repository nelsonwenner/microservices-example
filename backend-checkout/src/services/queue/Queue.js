import amqp from 'amqplib/callback_api';
import 'dotenv/config';

const url = `amqp://${process.env.RABBITMQ_USER}:${process.env.RABBITMQ_PASSWORD}@${process.env.RABBITMQ_URI}`;


class Queue {

    constructor() { }

    closedConnection(connecction) {
        console.log("\nClosing Connection...");

        setTimeout(() => { connecction.close();
            process.emit(0);
        }, 500);
    }

    publish(exchange, routerKey, msgPayload) {
        amqp.connect(url, (connectError, connection) => {

            if (connectError) { throw connectError; }
    
            connection.createChannel((channelError, channel) => {
    
                if (channelError) { throw channelError; }
    
                channel.publish(exchange, routerKey, Buffer.from(msgPayload));
    
                console.log(`\n[X] Payload: ${msgPayload}\n[X] RouterKey: ${routerKey}`);
            });
    
            this.closedConnection(connection);
        })
    }
}

export default new Queue();