const db = require('quick.db');

const Discord = require('discord.js')

exports.run = function(client, message,args) {
 
let kanal = message.mentions.channels.first();
if(!args[0]) return message.channel.send("Doğru Kullanım: `kt!botkoruma aç/kapat/izin-ver`")
if(args[0] === "aç"){
if(!kanal) return message.channel.send("Doğru Kullanım: `kt!botkoruma aç #logkanal`")
if(db.has(`botkoruma_${message.guild.id}`)) return message.channel.send("Zaten Açık")
db.set(`botkoruma_${message.guild.id})`, kanal.id)
message.channel.send("Başarıyla ayarlandı")
}
if(args[0] === "kapat"){
if(!db.has(`botkoruma_${message.guild.id}`))
db.delete(`botkoruma_${message.guild.id}`)
message.channel.send("Başarıyla Kapatıldı")

}
if(args[0] === "izin-ver"){
  let bot = args[1]
  if(db.has(`botkizin_${message.guild.id}`)) return db.delete(`botkizin_${message.guild.id}`)
  db.set(`botkizin_${message.guild.id}`, bot)
  message.channel.send("İzin verildi.Not: İzin bir kereliktir başka bota izin verirseniz bu botunki silinir.")
  
}
};
exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['botkoruma'],

  permLevel: 0

};

exports.help = {

  name: 'bot-koruma',

  description: 'Bot Koruma Sistemi.',

  usage: 'yaz'

};