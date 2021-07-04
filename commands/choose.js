const Discord = require('discord.js');

module.exports = {
  name: 'choose',
  description: 'Chooses something given different options.',
  usage: '\`.choose <option1> <option2>\`',
  execute(message, args) {
    if(!args[0]) return message.reply('Please give options. \nExample: \`.choose <option1> <option2>\`');

    if(args[0] == 'game') {
      var games = ["Overwatch", "Sleeping Dog", "Assassin's Creed Odyssey", "Black Desert Online", "Risk of Rain 2", "PUBG"];
      var gameImage = ["https://i.imgur.com/0Xk3OOl.jpg", "https://i.imgur.com/3pfz9b0.jpg", "https://i.imgur.com/uTmNh6O.jpg", "https://i.imgur.com/Z092nyg.jpg", "https://i.imgur.com/E2MsDSd.jpg", "https://i.imgur.com/MB8H8SQ.jpg"]
      var choice = Math.random();
      var result;

      if (choice <= .1) result = 0;
      else if (choice <= .2) result = 1;
      else if (choice <= .3) result = 2;
      else if (choice <= .5) result = 3;
      else if (choice <= .75) result = 4;
      else result = 5;

      const gifEmbed = new Discord.MessageEmbed()
        .setColor('#8109e9')
        .setImage('https://i.imgur.com/tbAcbt4.gif')

      const gameEmbed = new Discord.MessageEmbed()
        .setColor('#8109e9')
        .setTitle(games[result])
        .setImage(gameImage[result])

      message.channel.send(gifEmbed).then((message) => setTimeout(() => { message.edit(gameEmbed); }, 3000));


    }

    else {
      var choice = args[Math.floor(Math.random()*args.length)];
      message.channel.send(choice);
    }
  }
}
