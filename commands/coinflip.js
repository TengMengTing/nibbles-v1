module.exports = {
  name: 'coinflip',
  description: 'Flips a coin',
  usage: '\`.coinflip\`',
  execute(message) {
    var choice = Math.floor(Math.random()*2);
    if (choice == 0) {
      message.channel.send('heads!');
    }
    else if (choice == 1) {
      message.channel.send('tails!');
    }
  }
}
