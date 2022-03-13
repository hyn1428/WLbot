const { Util, MessageEmbed } = require("discord.js");
const sendError = require("../../events/error");

module.exports = {
  info: {
    name: "skip",
    description: "跳過歌曲",
    usage: "",
    aliases: ["s", "切歌"]
  },

  run: async function (client, message, args) {
    
    await client.user.setActivity("流行音樂", {
    type: "LISTENING",//can be LISTENING, WATCHING, PLAYING, STREAMING
    });

    const channel = message.member.voice.channel
    if (!channel)return sendError("你需要進入語音頻道才能播音樂"
    , message.channel);
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue)return sendError("目前沒任何歌曲可以切歌", message.channel);
    if(!serverQueue.connection)return
    if(!serverQueue.connection.dispatcher)return
    if (serverQueue.loop = serverQueue.skip)
    if (serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume();
      let xd = new MessageEmbed()
      .setDescription("▶ Resumed the music for you!")
      .setColor("YELLOW")
      .setTitle("Music has been Resumed!")
   return message.channel.send(xd).catch(err => console.log(err));
      
    }


       try{
      serverQueue.connection.dispatcher.end()
      } catch (error) {
        serverQueue.voiceChannel.leave()
        message.client.queue.delete(message.guild.id);
        return sendError(`:notes: The player has stopped and the queue has been cleared.: ${error}`, message.channel);
      }
    message.react("✅")
  },
};
