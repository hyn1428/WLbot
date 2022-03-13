const { MessageEmbed } = require("discord.js");
const sendError = require("../../events/error");

module.exports = {
  info: {
    name: "resume",
    description: "恢復暫停的音樂",
    usage: "",
    aliases: ["繼續"]
  },

  run: async function (client, message, args) {
    const serverQueue = message.client.queue.get(message.guild.id);
    if (serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume();
      let xd = new MessageEmbed()
      .setDescription("▶ 已恢復播放!")
      .setColor("YELLOW")
      .setAuthor("繼續播放▶!", "https://github.com/NyanCatOuO/Oneting/blob/main/Music.gif?raw=true")
      return message.channel.send(xd);
    }
    return sendError("There is nothing playing in this server.", message.channel);
  },
};
