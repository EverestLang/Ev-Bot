module.exports = 
{
    name: 'rate',
    description: "Who made this shit",
    execute(message, args)
    {

        var rating = Math.floor(Math.random() * 11) + 1;

        if(rating == 1){ userrating = ('*1/10*'); }
        else if(rating == 2){ userrating = ('*2/10*'); }
        else if(rating == 3){ userrating = ("*3/10*"); }
        else if(rating == 4){ userrating = ('*4/10*'); }
        else if(rating == 5){ userrating = ('*5/10*'); }
        else if(rating == 6){ userrating = ('*6/10*'); }
        else if(rating == 7){ userrating = ('*7/10*'); }
        else if(rating == 8){ userrating = ('**8/10**'); }
        else if(rating == 9){ userrating = ('**9/10**'); }
        else if(rating == 10){ userrating = ('**10/10**'); }
        else if(rating == 11){ userrating = ('***11/10***'); }

        var userUsername = message.author
        message.channel.send(`${userUsername} I rate you a "${userrating}"`);
    }
}