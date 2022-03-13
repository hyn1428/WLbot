const Discord = require('discord.js');

module.exports = {
  info: {
    name: "ticket",
    description: "ticket",
    usage: "ticket",
    aliases: ["投票"]
  },
  
  run: async(client, message, args) => {

    const yesEmoji = '👌';
    const noEmoji = '👋';
    
    // amount是空白建後的東西
    let amount = args.join(' ');

    //新建一個abc的資訊卡
    let abc = new Discord.MessageEmbed()
      .setColor('#e42643')
      .setTitle('-----投票系統-----')
      .setDescription(`${amount}`)
      .setTimestamp()
    //讓資訊卡變成呼叫等待
    let messageEmbed = await message.channel.send(abc)
    //新增資訊卡上的反應
    messageEmbed.react(yesEmoji);
    messageEmbed.react(noEmoji);
  }
}