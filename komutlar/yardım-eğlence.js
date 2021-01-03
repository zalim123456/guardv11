const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
exports.run = (client, message, args) => {
var prefix = ayarlar.prefix
 message.channel.send(new Discord.RichEmbed()
.setTitle(`Yardım Menüsü`)
.setDescription(`
• ${prefix}kaçcm: Aletin Botunu Söyler .d

• ${prefix}kumar: paranızı ya 2 ye katlarsınız yada düşürürsünüz

• ${prefix}kralol: Kral Olursunuz

• ${prefix}aşk-ölçer: Etiketlediğiniz kişiyle aşkınızı ölçer

`)//// Kendinize göre komutları arttırabilirsiniz
.setColor("RANDOM")
      .addField(`Davet ->`, `[Sunucumuz](https://discord.gg/EEkVzynh6B)`)
           .addField(`Website ->`, `[Sitemiz](http://kateriaguardsupport.tk/)`)
.setFooter(`Kateria Guard Tüm Hakları Saklıdır.`))

//// Basit Yardım Menusu İstek Üzerine Yapılmıştır
 
  

}



exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['help-funny'],
  permLevel: 0
}

exports.help = {
  name: 'yardım-eğlence'

}