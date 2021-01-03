const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('...').then(message => {
   var espriler = [' Para Miktarın Düştü ❌ ' ,'Paranı 2 ye katladın helal ✅ '];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kumar',
  description: 'para çevir',
  usage: 'kumar'
};
//Senti Abiniz Sunar