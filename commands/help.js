const { prefix } = require('../config.json');

module.exports = {
  name: 'help',
  description: 'You know very well what this does. Don\'t bother Nibbles.',
  usage: '\`.help\`, \`.help <command>\`',
  execute(message, args) {
    const data = [];
    const { commands } = message.client;

    if(!args.length) {

//    message.channel.send('Here\'s a list of all my commands:');
      const commandNames = (commands.map(command => command.name).join('\n'));
//    message.channel.send(commandNames)
//    message.channel.send(`\nYou can send \`${prefix}help [command name]\` to get info on a specific command!`);

      message.channel.send({embed: {
        color: 0x8109e9,
        title: "List of Commands",
        fields: [{
            name: commandNames,
            value: `\nYou can send \`${prefix}help [command name]\` to get info on a specific command!`
          }
        ],
        timestamp: new Date(),
      }});

    }

    else if(args[0].toLowerCase() === 'me') {
      message.channel.send('Sowwy, Nibbles can\'t help you... Nibbles believe in you though!');
      message.channel.send('<:cheer:734597383857635348>');
    }
    else if(args.length) {
      const name = args[0].toLowerCase();
      const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

      if (!command) {
	       return message.reply('That\'s not a command!');
      }

      message.channel.send({embed: {
        color:0x8109e9,
        title: command.name,
        description: command.description + '\n' + command.usage
      }});

//    message.channel.send(`\*\*Name:\*\* ${command.name}`);

//    if (command.aliases) message.channel.send(`\*\*Aliases:\*\* ${command.aliases.join(', ')}`);
//    if (command.description) message.channel.send(`\*\*Description:\*\* ${command.description}`);

    }
  }
}
