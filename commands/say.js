module.exports = {
    name: 'say',
    description: "Makes the bot repeat whatever you tell it to.",
    execute(message, args) {
        if(args.length > 0) {
            message.channel.send(args.join(' '));
        } else {
            message.channel.send('Please define a message');
        }
    }
}