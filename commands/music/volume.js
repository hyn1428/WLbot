const { MessageEmbed } = require("discord.js");
const sendError = require("../../events/error");

module.exports = {
  info: {
    name: "volume",
    description: "音量調整",
    usage: "[volume]",
    aliases: ["v", "vol", "音量"]
  },

  run: async function (client, message, args) {
    const channel = message.member.voice.channel;
    if (!channel)return sendError("I'm sorry but you need to be in a voice channel to play music!", message.channel);
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return sendError("There is nothing playing in this server.", message.channel);
    if (!serverQueue.connection) return sendError("There is nothing playing in this server.", message.channel);
    if (!args[0])return message.channel.send(`目前音量為: **${serverQueue.volume}**`);
     if(isNaN(args[0])) return message.channel.send('❌僅能輸入數字❌').catch(err => console.log(err));
    if(parseInt(args[0]) > 200 ||(args[0]) < 0) return sendError('音量設定錯誤❌\n音量最小為:**0**\n最大為:**200**',message.channel).catch(err => console.log(err));
    serverQueue.volume = args[0]; 
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 50);
    let xd = new MessageEmbed()
    .setDescription(`已將音量調整成 : **${args[0]/1}/200**`)
    .setAuthor("目前音量🔊", "https://github.com/NyanCatOuO/Oneting/blob/main/Music.gif?raw=true")
    .setColor("ORANGE")
    return message.channel.send(xd);
  },
};
//You can\'t set the volume more than 150. or lower than 0
//原來(\)可以忽列下一個符號  就能用\' \* \` ......等等