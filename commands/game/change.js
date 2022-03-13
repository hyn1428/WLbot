const Discord = require('discord.js');
const Database = require("@replit/database")
const db = new Database()
const sendError = require("../../events/error");

module.exports = {
    info: {
        name: "change",
        aliases: ["換獎勵"],
        description: "換獎勵",
        usage: "change",
    },

    run: async function (client, message, args) {
    //獲取資料庫餘額
    let currentcherry = await db.get(`cherry_${message.author.id}`)
    let currentapple = await db.get(`apple_${message.author.id}`)
    let currentwatermelon = await db.get(`watermelon_${message.author.id}`)
    
    //如果有1個以上的櫻桃+蘋果+西瓜 才能換
    if(currentcherry >= 1 & currentapple >= 1 & currentwatermelon >= 1){
      //減少道具的數量
      let reward = 1
      //傳送資訊
      const embed = new Discord.MessageEmbed()
      .setTitle(`${message.author.username}以兌換`)
      .setDescription(`你消耗了,1顆:cherries:,1顆:apple:,1顆:watermelon:`)
      .setColor("RANDOM")
      message.channel.send(embed);
      //用餘額去購買東西 回傳給資料庫
      await db.set(`cherry_${message.author.id}`,currentcherry - reward)
      await db.set(`apple_${message.author.id}`,currentapple - reward)
      await db.set(`watermelon_${message.author.id}`,currentwatermelon - reward)
      //獎勵是傳送訊息
      message.author.send('換到的獎勵就是讓貓貓抱一個>///< (飛撲')
    } else{
      sendError(`你沒有足夠的道具`, message.channel);
    }
  },
};