const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
exports.run = (client, message, args) => {
var prefix = ayarlar.prefix
 message.channel.send(new Discord.RichEmbed()
.setTitle(`Yardım Menüsü`)
.setDescription(`
• ${prefix}komutismi: açıklama
• ${prefix}komutismi: açıklama
• ${prefix}komutismi: açıklama
• ${prefix}komutismi: açıklama
• ${prefix}komutismi: açıklama
• ${prefix}komutismi: açıklama
• ${prefix}komutismi: açıklama
• ${prefix}komutismi: açıklama
• ${prefix}komutismi: açıklama
`)//// Kendinize göre komutları arttırabilirsiniz
.setColor("RANDOM")
.setFooter(`Tüm Hakları Saklıdır.`))

//// Basit Yardım Menusu İstek Üzerine Yapılmıştır
 
  

}



exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['help'],
  permLevel: 0
}

exports.help = {
  name: 'yardım-nsfw'
}