const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'play') {
    	message.reply('https://nibb.herokuapp.com/');
  	}
});

client.on('message', message => {
    if (message.content === 'help') {
       message.reply(message.author, "Hello!");
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
