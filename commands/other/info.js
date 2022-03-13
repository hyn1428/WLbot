const Discord = require('discord.js');
//const db = require("quick.db")

module.exports = {
  info: {
    name: "info",
    usage: "[info]",
    aliases: ["資訊","作者","作者是誰"]},

 run: async function (client, message, args) {
  const embed = new Discord.MessageEmbed()
      //設定顏色
      .setColor('#6D1BEB')
      .setTitle('貓貓的相關資料')
      //設定網址
      .setURL('https://7b845761-bf43-465c-a6cf-e74ea4afbbcd.id.repl.co/')
      //增加說明
      .setDescription('輸入 ~help ,即可查看所有指令!')
      //增加縮圖
      .setThumbnail('https://github.com/NyanCatOuO/Oneting/blob/main/w54l1i5py0n.jpg?raw=true')
      //字串(文字,值) Max->25   **\u200B為空白
      .addField('\u200B','我是貓貓機器人!!!')
      .addField('此機器人有多樣功能例如:', '自動刪禁語,等級系統,音樂功能,骰子功能,可以聊天對話等等')
      .addField('\u200B','有問題或反饋都快去跟可愛的貓貓說(｡◕∀◕｡)')
      //多行字串(name:,value:) Max->25
      .addFields(
        {name:'貓貓#3258',value:'\u200B'},
        {name:'作者:貓貓',value:'協作者:魯蛋'}
      )
      //增加圖片
      .setImage('https://github.com/NyanCatOuO/Oneting/blob/main/GO.png?raw=true')
      //設置時間戳
      .setTimestamp()
      //設置頁腳
      .setFooter('大龍貓的相關資料,由貓貓所製作提供!');
      message.channel.send(embed);
}}
