module.exports = {
    name: 'time',
    description: "A simple time command.",
    execute(message, args) {
        var today = new Date();
        message.channel.send(`Current time: ${today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()}`);
    }
}