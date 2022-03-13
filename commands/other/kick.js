const Discord = require('discord.js');

module.exports = {
  info: {
    name: "kick",
    description: "踢人",
    usage: "kick",
    aliases: ["踢人"]
  },
  
  run: async(client, message, args) => {

 let rudeWords = ["258925476733648898","399553141718384641"];
 if (rudeWords.includes(message.author.id.toLowerCase())) {

     //const member = 提及(@)的第一個用戶
     const member = message.mentions.users.first();
     if(member){
     //const memberTarger = 公會.會員.取得(會員ID)
     const memberTarger = message.guild.members.cache.get(member.id);
     //memberTarger.踢除
     memberTarger.kick();
     //傳訊息
     message.channel.send("使用者已被踢除");
     }else {
        message.channel.send("使用方法:空白建+提及(@)+使用者名子");
     }
   } else {message.channel.send("權限不足無法使用,詳情請洽管理員")}
  }
}




