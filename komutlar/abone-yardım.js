const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = 'y!'
let yardım = new Discord.MessageEmbed()  
.setColor('RANDOM')
.addField('Mesa BOT Abone Rol Menüsü',`
🔔 **m!abone-yetkili-rol** : Abone Yetkilisini Seçer.
🔔 **m!abone-rol** : Vericeğiniz Rolü ayarlarsınız.
🔔 **m!abone-log** : Log mesajınn gitceği yer seçilir.
🔔 **m!abone** : Abone Rolü verme komutudur.`)
  .addField("**» Davet Linki**", " [Botu Davet Et](https://discord.com/api/oauth2/authorize?client_id=724709606206472283&permissions=8&scope=bot)", )
    .setImage("https://cdn.discordapp.com/attachments/851857286917259264/851865590922084422/standard.gif")
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['abone-yardım'],
  permLevel: 0
};

exports.help = {
  name: "abone-yardım",
  category: "abone-yardım",
    description: "Eğlence Komutları Gösterir."
};