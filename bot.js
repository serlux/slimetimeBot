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

async def('message', message => {
    if (message.contains(is a valid)) {
    	message.reply('zamknij ryj');
       	}});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
