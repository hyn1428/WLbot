const Discord = require('discord.js');
const Database = require("@replit/database")
const db = new Database()
const sendError = require("../../events/error");

module.exports = {
    info: {
        name: "add_item",
        aliases: ["買道具"],
        description: "買道具",
        usage: "add_item",
    },

    run: async function (client, message, args) {
    //獲取資料庫餘額
    let currentbank = await db.get(`bank_${message.author.id}`)
    let currentcherry = await db.get(`cherry_${message.author.id}`)
    let currentapple = await db.get(`apple_${message.author.id}`)
    let currentwatermelon = await db.get(`watermelon_${message.author.id}`)
    
    //如果有200元以上 才能買
    if(currentbank >= 200){
      //減少的金錢
      let reward = 200
      //傳送資訊
      const embed = new Discord.MessageEmbed()
      .setTitle(`${message.author.username}購買了道具`)
      .setDescription(`你花費了:${reward}元\n你買了,1顆:cherries:,1顆:apple:,1顆:watermelon:`)
      .setColor("RANDOM")
      message.channel.send(embed);
      //用餘額去購買東西 回傳給資料庫
      await db.set(`bank_${message.author.id}`,currentbank - reward)
      await db.set(`cherry_${message.author.id}`,currentcherry + 1)
      await db.set(`apple_${message.author.id}`,currentapple + 1)
      await db.set(`watermelon_${message.author.id}`,currentwatermelon + 1)
    } else{
      sendError(`你沒有足夠的錢`, message.channel);
    }
  },
};