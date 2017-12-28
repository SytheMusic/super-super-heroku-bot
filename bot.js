const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

bot.user.setPresence(game: nibb name: 'nibb', type: 0)

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
 client.on('message', message => {  
    if (message.content === '/join') {
    
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          message.reply('I have successfully connected to the channel!');
        })
        .catch(console.log);
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
