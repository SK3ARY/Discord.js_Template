module.exports = {
    name: 'ping',
    description: "A simple ping command.",
    execute(message, args) { // order 66
        message.channel.send('Pong!');
    }
}