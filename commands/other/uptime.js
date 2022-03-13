const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "uptime",
    description: "上線時間",
    usage: "uptime",
    aliases: ["上線時間"]
  },
  
  run: async(client, message, args) => {
    
    let days = Math.floor(client.uptime / 86400000 );
    let hours = Math.floor(client.uptime / 3600000 ) % 24;
    let minutes = Math.floor(client.uptime / 60000) % 60;
    let seconds = Math.floor(client.uptime / 1000) % 60;
    
    let upembed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`上線時間 **${days}天 ${hours}時 ${minutes}分 ${seconds}秒**`)
    
    message.channel.send(upembed)
    } 
}