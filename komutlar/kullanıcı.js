const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = 'y!'
let yardım = new Discord.MessageEmbed()  
.setColor('RANDOM')
.addField('Mesa BOT Kullanıcı Menüsü',`
👥 **y!profil** : Kullanıcı Bilginizi Görürsünüz.
👥 **y!avatar** : Avatarınıza Bakarsınız.
👥 **y!say** : Sunucudaki Üye Sayısını Gösterir.
👥 **y!afk** : AFK Olma Komutudur.
👥 **y!yetkilerim** : Sunucudaki Yetkinize Bakarsınız.
👥 **y!ping** : Botun Pingine Bakarsınız.
👥 **y!i** : Botun İstatistiklerine Bakarsınız.
👥 **y!bug-bildir** : Botun Bugunu Bildirirsiniz.
👥 **y!davet** : Botu Davet Edersiniz.`)
.addField("**» Davet Linki**", " [Botu Davet Et](https://discord.com/api/oauth2/authorize?client_id=724709606206472283&permissions=8&scope=bot)", )
    .setImage("https://cdn.discordapp.com/attachments/851857286917259264/851865590922084422/standard.gif")
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kullanıcı'],
  permLevel: 0
};

exports.help = {
  name: "kullanıcı",
  category: "kullanıcı",
    description: "Eğlence Komutları Gösterir."
};