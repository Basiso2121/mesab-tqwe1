const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  let prefix = "y!";
  let yardım = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .addField(
      "Mesa BOT Eğlence Menüsü",
      `
✨ **m!fbi** : FBİ Gelir.
✨ **m!token** : Botun Tokenini Görürsünüz.
✨ **m!atam** : Dene ve Gör Reis.
✨ **m!vine** : Komik Paylaşımlar.`
    )
    .addField(
      "**» Davet Linki**",
      " [Botu Davet Et](https://discord.com/api/oauth2/authorize?client_id=724709606206472283&permissions=8&scope=bot)"
    )
    .setImage(
      "https://cdn.discordapp.com/attachments/851857286917259264/851865590922084422/standard.gif"
    )
    .setFooter(
      `${message.author.tag} Tarafından İstendi.`,
      message.author.avatarURL()
    )
    .setThumbnail(client.user.avatarURL());
  message.channel.send(yardım);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["eğlence"],
  permLevel: 0
};

exports.help = {
  name: "eğlence",
  category: "eğlence",
  description: "Eğlence Komutları Gösterir."
};
