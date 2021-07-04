const Discord = require("discord.js");

module.exports = {
  name: 'unmuteall',
  description: 'Unmutes everyone in user\'s VC',
  usage: '\`.unmuteall\`',
  execute(message) {
    if (!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send('You do not have permissions to use this command.');
    const channel = message.member.voice.channel;
    if (!channel) return message.channel.send("You must be in a vc to use this command.");
    for (const [snowflake, member] of channel.members) {
      member.voice.setMute(false);
    }
    message.channel.send("Oki, good morning!");

  }
}
