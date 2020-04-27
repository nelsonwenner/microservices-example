import amqp from 'amqplib';
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

    async publish(exchange, routerKey, msgPayload) {
        const connection = await amqp.connect(url);
        const channel = await connection.createChannel();
        
        await channel.publish(exchange, routerKey, Buffer.from(msgPayload), { persistent: true });
    
        console.log(`\n[X] Sent Payload: ${msgPayload}\n[X] RouterKey: ${routerKey}`);

        this.closedConnection(connection);
    }

    async consumer(exchange, queueName, routerKey, ACK) {
        const connection = await amqp.connect(url);
        const channel = await connection.createChannel();

        await channel.assertExchange(exchange, 'direct', {durable: true});

        const q = await channel.assertQueue(queueName, {durable: true}, {exclusive: false});

        await channel.bindQueue(queueName, exchange, routerKey);

        console.log(" [*] Waiting for messages in %s", q.queue);

        channel.consume(q.queue, (msg) => {

            ACK(msg);

        }, { noAck: true });
    }
}

export default new Queue();