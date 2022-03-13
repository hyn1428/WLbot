const Discord = require('discord.js');

module.exports = {
  info: {
    name: "server",
    description: "伺服器資訊",
    usage: "server",
    aliases: ["伺服器資訊"]
  },
  
  run: async(client, message, args) => {
   
    let zzz = new Discord.MessageEmbed()
    .setTitle(message.guild.name+"的伺服器資料")
    .setDescription(message.guild.id)
    .setThumbnail(message.guild.iconURL())
    //.addField("服主",message.guild.owner.nickname)
    .addField("伺服器區域",message.guild.region)
    .addField("成員數",message.guild.memberCount)
    .addField("頻道數",message.guild.channels.cache.size)
    .addField("表情數",message.guild.emojis.cache.size)
    .addField("身分組數",message.guild.roles.cache.size)
    //.addField("創群日期",message.guild.roles.createdAt.toUTCString())
    message.channel.send(zzz)
  
  }
};