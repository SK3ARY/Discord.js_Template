module.exports = {
    name: 'kick',
    description: "Kick a user from the server.",
    execute(message, args) {
        let member = message.mentions.members.first();
        if(!member) return message.reply("Please mention a valid member of this server");
        if(!member.kickable) return message.reply("I cannot kick this member!");

        member.kick(args.join(' '));
    }
}