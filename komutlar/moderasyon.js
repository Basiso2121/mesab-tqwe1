const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  let prefix = "y!";
  let yardım = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .addField("Mesa BOT Moderasyon Menüsü",`
🔰 **y!reklam** : Reklam Engeli Açarsınız.
🔰 **y!küfür** : Küfür Engeli Açarsınız.
🔰 **y!otorol** : Otorol Ayarlarsınız.
🔰 **y!sayaç** : Sayaç Rakamını Seçersiniz.
🔰 **y!sayaç-kanal-ayarla** : Sayaç Kanalını Seçer.
🔰 **y!mod-log** : Mod-Log Kanalı Seçersiniz.
🔰 **y!yavaş-mod** : Yavaş Mod Ayarlarsınız.
🔰 **y!sa-as** : Sa-As Mesajını Açar..
🔰 **y!sil** : Belli Miktarda Mesaj Siler.
🔰 **y!oylama** : Oylama Yaparsınız.`)
  .addField("**» Davet Linki**", " [Botu Davet Et](https://discord.com/api/oauth2/authorize?client_id=7724709606206472283&permissions=8&scope=bot)", )
    .setImage("https://cdn.discordapp.com/attachments/851857286917259264/851865590922084422/standard.gif")
    .setFooter(`${message.author.tag} Tarafından İstendi.`,message.author.avatarURL())
    .setThumbnail(client.user.avatarURL());
  message.channel.send(yardım);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["moderasyon"],
  permLevel: 0
};

exports.help = {
  name: "moderasyon",
  category: "moderasyon",
  description: "Eğlence Komutları Gösterir."
};
