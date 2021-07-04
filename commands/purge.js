const Discord = require("discord.js");

module.exports = {
  name: 'purge',
  description: 'Deletes a specified amount of messages.',
  usage: '\`.purge <number>\`',
  execute(message, args) {

    if (!message.member.hasPermission("MANNAGE_MESSAGES")) return message.reply('You do not have the permissions to use this command.');
    if (!args[0]) return message.reply('Please specify number of messages to delete');

    var amount = args.join(' ');

    if (isNaN(amount)) return message.reply('Please enter a number.');
    if (amount > 100) return message.reply('You can only delete 100 messages at once');
    if (amount < 1) return message.reply('You must delete at least 1 message');

    amount++;

    message.channel.messages.fetch({ limit: amount }).then(messages => {
      message.channel.bulkDelete(messages)
    });

//  message.delete().catch(e => {});

  }

}
