const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'meme') {
    	message.reply('https://i.pinimg.com/736x/94/ab/4f/94ab4f2e19f96539dbf400238a9a48d0--youth-groups-dankest-memes.jpg');
  	}
});

client.on('message', message => {
    if (message.content === 'meme2') {
       message.reply(message.author, "tbd");
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
