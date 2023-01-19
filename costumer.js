const amqp = require("amqplib");

var channel, connection;
connectQueue()  // call the connect function

async function connectQueue() {
    try {
        connection = await amqp.connect("amqp://user:bitnami@localhost:5672");
        channel    = await connection.createChannel()

        console.log('test-queue is ok')
        channel.consume("test.a.a", data => {
            console.log("test.a.a",`${Buffer.from(data.content)}`);
            channel.ack(data);
        })
        
    } catch (error) {
        console.log(error);
    }
}
