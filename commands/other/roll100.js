const Discord = require('discord.js');

module.exports = {
  info: {
    name: "roll100",
    usage: "[roll100]",
    aliases: ["骰子100"],
  },

  run: async function (client, message, args) {

 let mm = Math.random()*100;
 mm = Math.floor(mm)
 message.channel.send(`${mm}:game_die:`)
   
}
};  