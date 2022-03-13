const Discord = require('discord.js');
//const db = require("quick.db")

module.exports = {
  info: {
    name: "clear",
    description: "清除文字",
    usage: "[clear]",
    aliases: ["c", "清除"]
  },

  run (client, message, args) {
    
     //指定的ID才能使用此功能
  	 let rudeWords = ["258925476733648898","399553141718384641"];
     if (rudeWords.includes(message.author.id.toLowerCase())) {

        let amount = args.join(' ');

        if (!amount) {
            return message.channel.send('請輸入您要刪除的訊息')
        }

        if (amount > 100) {
            return message.channel.send('您不能一次刪除100則以上的訊息')
        }

        if (amount < 1) {
            return message.channel.send('至少需要刪除一條訊息')
        }

        message.channel.messages.fetch({limit: amount}).then(messages => {
            message.channel.bulkDelete(messages)
        })

        message.channel.send(`成功刪除了\`${amount}\`則訊息` ).then(m => m.delete({ timeout: 3000 }))
        
    //如非指定ID 執行以下事件
    } else {message.channel.send("權限不足無法使用,詳情請洽管理員")}
    }
};    