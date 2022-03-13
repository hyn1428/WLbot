const Discord = require('discord.js');
const Database = require("@replit/database")
const db = new Database()
const sendError = require("../../events/error");

module.exports = {
    info: {
        name: "add_money",
        aliases: ["領錢"],
        description: "領錢",
        usage: "add_money",
    },

    run: async function (client, message, args) {
    //獲取CD時間
    const check = await db.get(`dailyCheck_${message.author.id}`)
    //設定CD時間
    const timeout = 3600000;
    //檢查有無CD時間
    if(check !== null && timeout - (Date.now() - check) > 0){
      const ms = require("pretty-ms")
      const timeLeft = ms(timeout - (Date.now() - check))
      sendError(`每個小時只能領一次錢,請勿貪心\n你在過${timeLeft}才能領錢`, message.channel);
    } else {
      //增加的金錢
      let reward = 500
      //獲取資料庫餘額
      let currentbank = await db.get(`bank_${message.author.id}`)
      //傳送資訊
      const embed = new Discord.MessageEmbed()
      .setTitle(`${message.author.username}增加了錢錢`)
      .setDescription(`你增加了:${reward}元`)
      .setColor("RANDOM")
      message.channel.send(embed);
      //讓餘額+增加的錢 回傳給資料庫
      await db.set(`bank_${message.author.id}`,currentbank + reward)
      //讓CD時間變成true狀態
      await db.set(`dailyCheck_${message.author.id}`, Date.now())
    }
  },
};