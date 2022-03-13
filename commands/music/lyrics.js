const { MessageEmbed } = require("discord.js");
const lyricsFinder = require("lyrics-finder");
const sendError = require("../../events/error");

module.exports = {
  info: {
    name: "lyrics",
    description: "顯示歌詞(測試中)",
    usage: "[lyrics]",
    aliases: ["ly"]
  },

  run: async function (client, message, args) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return sendError("There is nothing playing.",message.channel).catch(console.error);

    let lyrics = null;

    try {
      lyrics = await lyricsFinder(queue.songs[0].title, "");
      if (!lyrics) lyrics = `No lyrics found for ${queue.songs[0].title}.`;
    } catch (error) {
      lyrics = `No lyrics found for ${queue.songs[0].title}.`;
    }

    let lyricsEmbed = new MessageEmbed()
      //設定作者
      .setAuthor(`${queue.songs[0].title} — Lyrics`, "https://github.com/NyanCatOuO/Oneting/blob/main/Music.gif?raw=true")
      //設定縮圖
      .setThumbnail(queue.songs[0].img)
      //設定顏色
      .setColor("YELLOW")
      //設定字串
      .setDescription(lyrics)
      //設定時間戳
      .setTimestamp();

    if (lyricsEmbed.description.length >= 2048)
      lyricsEmbed.description = `${lyricsEmbed.description.substr(0, 2045)}...`;
    return message.channel.send(lyricsEmbed).catch(console.error);
  }
};
