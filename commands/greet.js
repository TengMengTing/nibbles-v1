module.exports = {
  name: 'greet',
  description: 'Command to get Nibbles to greet you!',
  usage: '\`.greet\`',
  execute(message) {
    message.channel.send('Hello! I\'m Nibbles uwu');
    message.channel.send('<:nibbles1:736040128840990820><:nibbles2:736040128882933852>' +
                         '\n<:nibbles3:736040129168146468><:nibbles4:736040128723681302>');
  }
}
