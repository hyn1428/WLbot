const Discord = require('discord.js');

module.exports = {
  info: {
    name: "roll",
    usage: "[roll]",
    aliases: ["隨機數", "擲骰子"],
  },

  run: async function (client, message, args) {


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
};

message.channel.send(`${getRandomInt(10)}:game_die:`).then(m => m.delete({ timeout: 30000 }));
}
};  