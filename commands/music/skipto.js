const { MessageEmbed } = require("discord.js");
const sendError = require("../../events/error");

module.exports = {
  info: {
    name: "skipto",
    description: "跳過指定歌曲 (數字)",
    usage: "skipto <number>",
    aliases: ["一鍵跳過到"],
  },

  run: async function (client, message, args) {
    if (!args.length || isNaN(args[0]))
      return message.channel.send({
                        embed: {
                            color: "GREEN",
                            description: `**請使用**: \`${client.config.prefix}skipto <數字>\``
                        }
   
                   }).catch(console.error);
        

    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return sendError("There is no queue.",message.channel).catch(console.error);
    if (args[0] > queue.songs.length)
      return sendError(`撥放列表中只有 ${queue.songs.length} 首歌曲!`,message.channel).catch(console.error);

    queue.playing = true;

    if (queue.loop) {
      for (let i = 0; i < args[0] - 2; i++) {
        queue.songs.push(queue.songs.shift());
      }
    } else {
      queue.songs = queue.songs.slice(args[0] - 2);
    }
     try{
    queue.connection.dispatcher.end();
      }catch (error) {
        queue.voiceChannel.leave()
        message.client.queue.delete(message.guild.id);
       return sendError(`:notes: The player has stopped and the queue has been cleared.: ${error}`, message.channel);
      }
    
    queue.textChannel.send({
                        embed: {
                            color: "GREEN",
                            description: `${message.author} ⏭ 已經跳過 \`${args[0] - 1}\` 首歌曲`
                        }
   
                   }).catch(console.error);
                   message.react("✅")

  },
};