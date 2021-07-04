const Discord = require('discord.js');

module.exports = {
  name: 'poll',
  description: 'Create a poll',
  usage: '\`.poll <args>\`',
  execute(message, args) {

    if(!args[0]){
      message.channel.send('Please include arguments to create a poll.\nExample: \`.poll is Nibbles the best\`');
      return;
    }

    let msgArgs = args.join(' ');
    let name = message.author.username
    message.channel.send(name + ' asks: ' + msgArgs).then(messageReaction => {
      messageReaction.react('703367584355188852');
      messageReaction.react('703367586561130507');
    })
    message.delete().catch(e => {});
  }
}
