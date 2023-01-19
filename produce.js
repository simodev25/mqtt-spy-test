const amqplib = require('amqplib');

const amqp_url = process.env.CLOUDAMQP_URL || 'amqp://user:bitnami@localhost:5672';

async function produce() {
    console.log("Publishing");
    const conn = await amqplib.connect(amqp_url, "heartbeat=60");
    const ch = await conn.createChannel()
    const exch = 'amq.topic';
        const rkey = 'test.a.a';
    const msg = 'Hello World!2';
    await ch.publish(exch, rkey, Buffer.from(msg));
    setTimeout(function () {
        ch.close();
        conn.close();
    }, 500);
}

produce();
