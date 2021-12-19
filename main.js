/* Modules / Imports */
const Discord = require('discord.js'); // Require the discord.js module
const fs = require('fs'); // Require the fs module

/* Constants / Variables */
const creator = {
    username: "ฅ^•ﻌ•^ฅ", // Your username here
    id: "674758524642787349" // Your id here
}

const prefix = '?';

const Client = new Discord.Client({
    fetchAllMembers: true,
    presence: {
        'activity': {
            name: `${prefix}help`,
            type: 'PLAYING'
        }
    }
});

Client.Commands = new Discord.Collection();

const CommandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of CommandFiles) {
    const command = require(`./commands/${file}`);

    Client.Commands.set(command.name, command);
}

Client.once('ready', () => {
    console.log('Bot : Online');
});

Client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping') { // Ping command
        Client.Commands.get('ping').execute(message, args);
    } else if(command == 'say') { // Say / Repeat command
        Client.Commands.get('say').execute(message, args);
    } else if(command == 'time') { // Current time command
        Client.Commands.get('time').execute(message, args);
    } else if(command == 'kick') { // Kick command
        Client.Commands.get('kick').execute(message, args);
    } else if(command == 'ban') { // Ban command
        Client.Commands.get('ban').execute(message, args);
    } else {
        message.channel.send('Please state a command!');
    }
});

Client.login('ODk0Mzg2NTI3NTU4MzExOTg3.YVpQXQ.2VtZFcmxBn0t-mNTTvYv1xM0c_w'); // Type in your token here