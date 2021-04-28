const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = 'e!';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const commands = require(`./commands/${file}`);

    client.commands.set(commands.name, commands);
}

client.once('ready', () => {
    console.log('Ev Bot is online');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }
    if(command === 'chase'){
        client.commands.get('chase').execute(message, args);
    }
    if(command === 'rate'){
        client.commands.get('rate').execute(message, args);
    }
    if(command === 'mute'){
        client.commands.get('mute').execute(message, args);
    }
    if(command === 'unmute'){
        client.commands.get('unmute').execute(message, args);
    }
    if(command === 'explosion'){
        client.commands.get('explosion').execute(message, args);
    }
    if(command === 'testmute'){
        client.commands.get('testmute').execute(message, args);
    }
    if(command === 'testunmute'){
        client.commands.get('testunmute').execute(message, args);
    }
});
