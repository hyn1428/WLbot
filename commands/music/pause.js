const { MessageEmbed } = require("discord.js");
const sendError = require("../../events/error");

module.exports = {
  info: {
    name: "pause",
    description: "暫停",
    usage: "[pause]",
    aliases: ["pause", "暫停"]
  },

  run: async function (client, message, args) {
    const serverQueue = message.client.queue.get(message.guild.id);
    if (serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
	    try{
      serverQueue.connection.dispatcher.pause()
	  } catch (error) {
        message.client.queue.delete(message.guild.id);
        return sendError(`:notes: The player has stopped and the queue has been cleared.: ${error}`, message.channel);
      }	    
      let xd = new MessageEmbed()
      .setDescription("⏸ 已為您暫停播放!")
      .setColor("YELLOW")
      .setTitle("音樂已暫停⏸")
      return message.channel.send(xd);
    }
    return sendError("There is nothing playing in this server.", message.channel);
  },
};
