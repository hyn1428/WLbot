const Discord = require('discord.js');
const ms = require('ms');

module.exports = {
  info: {
    name: "mute",
    description: "請設定~基礎權限+禁言~為無法打字的身分組,才能使用",
    usage: "mute",
    aliases: ["禁言"]
  },
  
  run: async(client, message, args) => {
    
        //指定為第一個
        const target = message.mentions.users.first();
        if(target){
            //獲取貓咪身分組 & 獲取禁音身分組
            let mainRole = message.guild.roles.cache.find(role => role.name === '貓咪')
            let muteRole = message.guild.roles.cache.find(role => role.name === '禁言')

            let memberTarger = message.guild.members.cache.get(target.id)
             
            if(!args[1]){
                message.channel.send(`請輸入數字+時間 ex: 10s,10m,10h,10d,10m,10y`);
                return
            }

            memberTarger.roles.remove(mainRole.id);
            memberTarger.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarger.user.id}> 已禁言${ms(ms(args[1]))}`);

            setTimeout(function(){
                memberTarger.roles.remove(muteRole.id);
                memberTarger.roles.add(mainRole.id);
            }, ms(args[1]));
        }else{
            message.channel.send("找不到");
        }
  }
}