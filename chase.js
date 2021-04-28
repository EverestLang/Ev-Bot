module.exports = {
    name: 'chase',
    description: "this works like the ?chase command from dyno",
    execute(message, args){

        // random number generator
        var cat = Math.floor(Math.random() * 100) + 1;
        //will pick a random number between 1 and 100

        if(cat == 1){ catto = ('You jump and **you catch the cat!!!**'); }
        else if(cat == 2){ catto = ('You jump and **you hit your head and fucking die**'); }
        else if(cat == 3){ catto = ('You jump and **you hit your head and fucking die**'); }
        else if(cat == 4){ catto = ('You jump and **you hit your head and fucking die**'); }
        else if(cat == 5){ catto = ('You jump and **you hit your head and fucking die**'); }
        else if(cat == 6){ catto = ('You jump and **you hit your head and fucking die**'); }
        else if(cat == 7){ catto = ('You jump and **you get gnomed** https://cdn.discordapp.com/attachments/721018302670962841/836995724134318090/latest.png'); }
        else if(cat != 1 || cat != 2 || cat != 3 || cat != 4 || cat != 5 || cat != 6 || cat != 7){ catto = ('You jump and **you miss the cat**'); }

        
        // sends the thing
        var userUsername = message.author.username
        message.channel.send(`${userUsername} "You start chasing the cat..."`);
        message.channel.send(catto);
    }
}