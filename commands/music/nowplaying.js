const { MessageEmbed } = require("discord.js");
const sendError = require("../../events/error")

module.exports = {
  info: {
    name: "nowplaying",
    description: "現在正在播放",
    usage: "",
    aliases: ["np"]
  },
 
 run: async function (client, message, args) {
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return sendError("There is nothing playing in this server.", message.channel);
    let song = serverQueue.songs[0]
    let thing = new MessageEmbed()
      .setAuthor("目前正在播放🎶", "https://github.com/NyanCatOuO/Oneting/blob/main/Music.gif?raw=true")
      .setThumbnail(song.img)
      .setColor("PURPLE")
      .addField("歌名🎵", song.title, true)
      .addField("播放時間⌛", song.duration, true)
      .addField("點播人🐱", song.req.tag, true)
      .setFooter(`觀看次數📝: ${song.views} | ${song.ago}`)
    return message.channel.send(thing)
  },
};