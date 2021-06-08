const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  const chrome = new Discord.MessageEmbed()
  .setTitle("Davet Linkleri Altta Belirtilmiştir")
  .setColor("GOLD")
    .addField("» **Botun Sahibi**", "<@!723463609971376129>")
    .addField("**» Destek Sunucusu**", " [Sunucumuza Katıl](https://discord.gg/kkkxZqF9bu)", )
    .addField("**» Davet Linki**", " [Botu Davet Et](https://discord.com/api/oauth2/authorize?client_id=724709606206472283&permissions=8&scope=bot)", )
    .setImage("https://cdn.discordapp.com/attachments/851857286917259264/851865590922084422/standard.gif")
  .setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
  message.channel.send(chrome);   //DevTR
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'davet',
};