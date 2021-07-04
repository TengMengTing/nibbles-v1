const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token, badWords } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

//importing the command files
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

//when bot turns on, tell me
client.once('ready', () => {
	console.log('Nibbles is awake!');
	client.user.setActivity('on a wheel', { type: '' });
//client.user.setPresence({ activity: { name: '<:nom:734597385162063993>nom noming' }, status: 'online' });
});

//welcome message when people join
client.on('guildMemberAdd', (member) => {
	const channel = member.guild.channels.cache.find(ch => ch.name === '💬chit-chat');
	if(!channel) return;
	var user = member.user.username;
	channel.send('Hello ' + user + ', I\'m Nibbles! Welcome to the server!');
	user = user.toLowerCase();
	member.setNickname(user);
});

//leave message
client.on('guildMemberRemove', (member) => {
	const channel = member.guild.channels.cache.find(ch => ch.name === '💬chit-chat');
	if(!channel) return;
	const user = member.user.username;
	channel.send('Nibbles is sad to see you go, ' + user + ' ;-;');
});

//message interpreting
client.on('message', message => {

	//bad word detector
	for (word of badWords) {
		if (message.content.toLowerCase() === word) {
			message.reply("No bad words in Nibbles server!");
	  	message.delete().catch(e => {});
			return;
		}
	}

	if(message.content == '666') {
		client.users.cache.get('414929112973705236').send('You have been summoned in Project Void!');
	}
	if(message.content == ':poro__tongue:') {
		client.users.cache.get('761008316020555786').send('You have been summoned in Project Void!');
	}

	if(message.content.toLowerCase().includes('uwu')) {
		message.react('705242036835450880');
		return;
	}

  //do not respond if message doesn't have prefix or is sent by bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

  //actual commands!
  if(!client.commands.has(command)) return;

  try {
    client.commands.get(command).execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply('Sowwy Nibbles accidentally nibbled on the cables, the command isn\'t working!');
  }
//if(command === 'greet'){
//client.command.get('greet').execute(message, args);
//}

  /*else if(command === ''){

  }*/
});

//has to be last line
client.login(token);
