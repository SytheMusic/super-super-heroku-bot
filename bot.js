const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'screw you') {
    	message.reply('screw you too! ');
  	}
});

client.on('message', message => {
    if (message.content === 'nothing') {
    	message.reply('yay you did nothing');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
