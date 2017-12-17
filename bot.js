const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('i cant ping sorry i can only do nothing');
  	}
});

client.on('message', message => {
    if (message.content === 'nothing') {
    	message.reply('yay you did nothing');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
