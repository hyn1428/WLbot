const { MessageEmbed } = require("discord.js");
const sendError = require("../../events/error");

module.exports = {
  info: {
    name: "loop",
    description: "切換音樂循環",
    usage: "loop",
    aliases: ["重複", "循環"],
  },

  run: async function (client, message, args) {
    const serverQueue = message.client.queue.get(message.guild.id);
       if (serverQueue) {
            serverQueue.loop = !serverQueue.loop;
            return message.channel.send({
                embed: {
                    color: "GREEN",
                    description: `🔁  **循環模式已**\`${serverQueue.loop === true ? "啟動" : "關閉"}\``
                }
            });
        };
    return sendError("目前沒有播放任何歌曲.", message.channel);
  },

};
