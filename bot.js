const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!sbot') {
    	message.reply('twoja stara');
       	}
});


if(message.content.toLowerCase().indexOf("is a valid") >= 0){
    message.reply('zamknij ryj');
       	}
    });
  

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
