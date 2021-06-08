const Discord = require ("discord.js");

exports.run = (client, message) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
const YRNEXEMBED = new Discord.MessageEmbed()

.setColor("BLACK")
.setTitle("**  » Mesa BOT**")
.setImage("https://cdn.discordapp.com/attachments/851857286917259264/851865590922084422/standard.gif")
.setDescription(`
**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/kkkxZqF9bu)** **•** **[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=724709606206472283&permissions=8&scope=bot)** **•**
Bir komut hakkında detaylı __yardım için__: **m!yardım**`)

.addField('**• Komutlar**',' Botun Tüm Komutları Aşağıda Bulunmaktadır.')
.addField('> m!moderasyon ',' 🔰 Moderasyon komutları')
.addField('> m!kullanıcı ',' 👥 Kullanıcı komutları')
.addField('> m!abone-yardım ',' 🔔 Ayarlamalı Abone Rol Sistemi')
.addField('> m!eğlence','  ✨ Eğlence Komutları')
return message.channel.send(YRNEXEMBED)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'yardım', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-eğlence'
};