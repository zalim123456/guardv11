const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('Hemen Diyorum Abi 1 Saniye..').then(message => {
   var espriler = [' **Senin Aletin 18CM ** :eggplant: ' ,'**Senin Aletin  11CM ** :eggplant:' ,'**Senin aletin 32CM  ** :eggplant:' ,'**Senin Aletin 35CM ** :eggplant:' ,'**Senin Pipin  8CM  ** :eggplant:' ,'**Senin Aletin  65CM  ** :eggplant:' ,'**Senin Çükün 5CM  ** :eggplant:' ,'**Senin Aletin 31CM  ** :eggplant:' ,'**Senin Aletin   14CM ** :eggplant:' ,'**Senin Olmayan Pipin  1CM ** :eggplant:'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kaçcm', 'cmkaç', 'kaç-cm', 'cm-kaç'],
  permLevel: 0
};

exports.help = {
  name: 'kaçcm',
  description: 'Malafatını Söyler.',
  usage: 'kaçcm'
};
//Senti Abiniz Sunar