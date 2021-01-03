const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, message, args) => {
    const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor(message.guild.me.displayColor)
        .setTitle(`📊 İstatistikler`)
        .setDescription(`👑 Yapımcılarım:          
<@676048473237225502>\n<@750283022737342545>
${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
 🛠️ Çalışma süresi:    
${duration}
 👥 Kullanıcılar:      
${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}
 💻 Sunucular:         
${client.guilds.size.toLocaleString()}
 📚 Kanallar:          
${client.channels.size.toLocaleString()}
 📖 Discord.JS sürümü:  
v${Discord.version}
 ⏰ Ping:              
${client.ping}
`)  

        .setThumbnail(client.user.avatarURL)
        .setFooter(`Kateria Guard |2020 Tüm Hakları Saklıdır`,client.user.avatarURL)

    return message.channel.send(embed);
  
  
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot durum', 'i', 'bi', 'istatistikler', 'kullanımlar', 'botdurum', 'bd', 'istatisik', 'stats', 'stat'],
  permLevel: 0
};

exports.help = {
  name: 'istatistik',
  description: 'Botun istatistiklerini Gösterir',
  usage: 'istatistik'
};
