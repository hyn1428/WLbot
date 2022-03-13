const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "version",
    description: "版本",
    usage: "version",
    aliases: ["ver","版本"]
  },
  
  run: async(client, message, args) => {

    //const A1 = '📃';
    //let version = "1.0"
    
    let ver = new Discord.MessageEmbed()
    .setColor("#6D1BEB")
    //-------↓目前版本↓------//
    .setTitle('`目前版本:3.0`')
    .addField('-----更新內容-----','✿ 新增貨幣系統\n✿ 新增道具系統')
    .addField('\u200B','-----歷史版本-----')
    .addField('2.0','✿ 發布正式版')
    .addField('1.0','✿ 內部測試版')

    //讓資訊卡變成呼叫等待
    let messageEmbed = await message.channel.send(ver)
    
    /*
    //新增資訊卡上的反應
    await messageEmbed.react(A1);

    let verlog = new Discord.MessageEmbed()
      .setColor('#800080')
      .setTitle('歷史紀錄')
      .addField('2.0','✿ 發布正式版')
      .addField('1.0','✿ 內部測試版')
      .setTimestamp()

   client.on('messageReactionAdd', async(reaction, user) => {
        //如果點一下就去除按鈕
        if(!reaction.partial) await reaction.remove()

          if(reaction.emoji.name === A1){
            message.channel.send(verlog)
            console.log("執行1次")
          }
      })
    */

  } 
}