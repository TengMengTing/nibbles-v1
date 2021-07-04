const Discord = require('discord.js');

module.exports = {
  name: 'testing',
  description: 'Command for Nibbles test things that caretaker is working on.',
  usage: '\`.testing\`',
  execute(message) {
    if(!(message.author.id === '201687181238992896')) return message.reply('You are not my caretaker! No touchie!');
    message.channel.send({embed: {
    color: 3447003,
    author: {
      name: message.author.username,
      icon_url: message.author.displayAvatarURL
    },
    title: "This is an embed",
    url: "http://google.com",
    description: "This is a test embed to showcase what they look like and what they can do.",
    fields: [{
        name: "Fields",
        value: "They can have different fields with small headlines."
      },
      {
        name: "Masked links",
        value: "You can put [masked links](http://google.com) inside of rich embeds."
      },
      {
        name: "Markdown",
        value: "You can put all the *usual* **__Markdown__** inside of them."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: message.author.displayAvatarURL,
      text: "© Example"
    }
  }});
  }
}
