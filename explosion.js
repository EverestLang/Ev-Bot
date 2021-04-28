module.exports = 
{
    name: 'explosion',
    description: "boum",
    execute(message, args)
    {
        const Discord = require('discord.js');
        const archiveEmbed = new Discord.MessageEmbed()
        .setColor('#C20909')
        .setTitle('Le Boom')
        .setImage('https://thumbs.gfycat.com/EminentPlaintiveJabiru-size_restricted.gif')

        message.channel.send(archiveEmbed);
    }
}