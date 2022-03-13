const Discord = require('discord.js');
const Database = require("@replit/database")
const db = new Database()

module.exports = {
    info: {
        name: "hack_money",
        aliases: ["開外掛領錢"],
        description: "開外掛領錢",
        usage: "hack_money",
    },

    run: async function (client, message, args) {
      //增加的金錢
      let reward = 9999
      //獲取資料庫餘額
      let currentbank = await db.get(`bank_${message.author.id}`)
      //傳送資訊
      const embed = new Discord.MessageEmbed()
      .setTitle(`${message.author.username}使用了外掛:money_mouth:`)
      .setDescription(`你使用了外掛,增加了:${reward}元`)
      .setColor("RANDOM")
      message.channel.send(embed);
      //讓餘額+增加的錢 回傳給資料庫
      await db.set(`bank_${message.author.id}`,currentbank + reward)
    },
};