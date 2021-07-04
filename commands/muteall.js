const Discord = require("discord.js");

module.exports = {
  name: 'muteall',
  description: 'Mutes everyone in user\'s VC',
  usage: '\`.muteall\`',
  execute(message) {
    if (!message.member.hasPermission("MUTE_MEMBERS")) return message.reply('You do not have permissions to use this command.');
    const channel = message.member.voice.channel;
    if (!channel) return message.channel.send("You must be in a vc to use this command.");
    for (const [snowflake, member] of channel.members) {
      //if (message.member === member) continue;
      if(member.user.bot) continue;
      member.voice.setMute(true);
    }
    message.channel.send("Oki, good night!");

  }
}
