module.exports = {
    name: 'unmute',
    description: "this command will body anyone who gets it used on them",
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Event Members');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Bodied');

            let memberTarget = message.guild.members.cache.get(target.id); 

            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been unmuted`)
        } else{
            message.channel.send('no user found');
        }

    }
}