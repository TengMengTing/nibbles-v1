const Discord = require('discord.js');

module.exports = {
  name: 'getpfp',
  description: 'Displays your pfp',
  usage: '\`.getpfp\`, \`.getpfp <user>\`',
  execute(message, args) {

    if(!args.length) {
      const pfp = message.author.displayAvatarURL();
      const pfpEmbed = new Discord.MessageEmbed()
        .setColor('#8109e9')
        .setTitle(message.author.username + '\'s pfp')
        .setImage(pfp)
        .setTimestamp()
      message.channel.send(pfpEmbed);
    }
    else if(args.length) {
      if (!args[0].startsWith('<@') && !args[0].endsWith('>')) return message.channel.send('Please @ the user.');
      var name = args[0].slice(3,-1);
      name = message.client.users.cache.get(name);
      const pfp = name.displayAvatarURL();
      const pfpEmbed = new Discord.MessageEmbed()
        .setColor('#8109e9')
        .setTitle(name.username + '\'s pfp')
        .setImage(pfp)
        .setTimestamp()
      message.channel.send(pfpEmbed);
    }

  }
}
