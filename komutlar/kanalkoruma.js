const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
	if (!message.guild) return;
 if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("Yetkin Yko Knk")

    let kanal = message.mentions.channels.first() || client.channels.get(args[1])
if(args[0] === "aç"){
if(!kanal) return message.channel.send("Doğru kullanım `!kanal-koruma aç #logkanal`")
if(db.has(`kanalklog_${message.guild.id}`)) return message.channel.send("Zaten açık")
db.set(`kanalklog_${message.guild.id}`, kanal.id)
message.channel.send("Başarıyla ayarlandı :))")
}
if(args[0] === "kapat"){
if(!db.has(`kanalklog_${message.guild.id}`)) return message.channel.send("Zaten kapalı")
db.delete(`kanalklog_${message.guild.id}`)
message.channel.send("Başarıyla kapatıldı :))")
}



}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'kanal-koruma',
    description: 'Say',
 } 