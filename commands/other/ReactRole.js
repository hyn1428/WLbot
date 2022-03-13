const Discord = require('discord.js');

module.exports = {
  info: {
    name: "ReactRole",
    description: "身分組",
    usage: "ReactRole",
    aliases: ["身分組"]
  },
  
  run: async(client, message, args) => {

  //指定的頻道才能使用此功能
  let rudeWords = ["780795218173624332","853363445268480081"];
  if (rudeWords.includes(message.channel.id.toLowerCase())) {
    
    const catTeamRole = message.guild.roles.cache.find(role => role.name === "貓咪")
    const musicTeamRole = message.guild.roles.cache.find(role => role.name === "音樂區")
    const jsTeamRole = message.guild.roles.cache.find(role => role.name === "開發者")

    const catTeamEmoji = '🐱';
    const musicTeamEmoji = '🎧';
    const jsTeamEmoji = '📙';

    //新建一個abc的資訊卡
    let abc = new Discord.MessageEmbed()
      .setColor('#e42643')
      .setTitle('-----自動給予身分組-----')
      .setDescription('選你想要新增的身分組\n\n'+ `新增貓咪${catTeamEmoji}\n`+ `新增音樂區${musicTeamEmoji}\n`+ `新增開發者${jsTeamEmoji}`)
      .setTimestamp()
    //讓資訊卡變成呼叫等待
    let messageEmbed = await message.channel.send(abc)
    //新增資訊卡上的反應
    messageEmbed.react(catTeamEmoji);
    messageEmbed.react(musicTeamEmoji);
    messageEmbed.react(jsTeamEmoji);

    //偵測事件
    client.on('messageReactionAdd', async(reaction, user) => {
        //抓取按下的人是誰
        if(reaction.message.partial) await reaction.message.fetch();
        //設定按下去的反應
        if(reaction.partial) await reaction.fetch();
        //如果是機器人的話 -> 跳出
        if(user.bot) return;
        //如果沒有任何反應的話 -> 跳出
        if(!reaction.message.guild) return;
          //新增身分組
          if(reaction.emoji.name === jsTeamEmoji){
            await reaction.message.guild.members.cache.get(user.id).roles.add(jsTeamRole);
          }
          if(reaction.emoji.name === musicTeamEmoji){
               await reaction.message.guild.members.cache.get(user.id).roles.add(musicTeamRole);
          }
          if(reaction.emoji.name === catTeamEmoji){
            await reaction.message.guild.members.cache.get(user.id).roles.add(catTeamRole);
          } else{
             return;
         }
         
     })

client.on('messageReactionRemove', async(reaction, user) => {
        if(reaction.message.partial) await reaction.message.fetch();
        if(reaction.partial) await reaction.fetch();
        if(user.bot) return;
        if(!reaction.message.guild) return;

          //移除身分組
          if(reaction.emoji.name === jsTeamEmoji){
               await reaction.message.guild.members.cache.get(user.id).roles.remove(jsTeamRole);
             }
          if(reaction.emoji.name === musicTeamEmoji){
               await reaction.message.guild.members.cache.get(user.id).roles.remove(musicTeamRole);
             }
          if(reaction.emoji.name === catTeamEmoji){
               await reaction.message.guild.members.cache.get(user.id).roles.remove(catTeamRole);
             } else{
             return;
         }
         
     })
  } else {message.channel.send("您所在的頻道有誤,詳情請洽管理員")}
  }
}