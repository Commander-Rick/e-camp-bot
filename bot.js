/* e-camp-bot, */
// Log our bot in
client.login(token);
// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

// The token of your bot - https://discordapp.com/developers/applications/me
const token = 'MzcyMTYwODE0NTQ4Nzc5MDEw.DNAVCg.N5GQZvbyV8Y6DQ6J3NjtIbRkj7o';

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "yee"
  if (message.content === '!yee') {
    // Send "pong" to the same channel
    message.channel.send('https://youtube.com/watch?v=myvideo');
  }
});

client.on('message', message,  => {
  // If the message is "ping"
  if (message.content === '!nick') {
    // Send "pong" to the same channel
     setNickname(nick, reason) {
    return this.edit({ nick }, reason);
  }
  }
});

