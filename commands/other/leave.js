const { MessageEmbed } = require("discord.js");
const sendError = require("../../events/error");

module.exports = {
    info: {
        name: "leave",
        aliases: ["滾", "disconnect"],
        description: "離開語音頻道",
        usage: "Leave",
    },

    run: async function (client, message, args) {
        let channel = message.member.voice.channel;
        if (!channel) return sendError("您需要進入語音頻道才能使用", message.channel);
        if (!message.guild.me.voice.channel) return message.channel.send(`😾我沒有在頻道裡❗${message.author}你有事嗎❓`, message.channel);

        try {
            await message.guild.me.voice.channel.leave();
        } catch (error) {
            await message.guild.me.voice.kick(message.guild.me.id);
            return sendError("嘗試離開頻道.....", message.channel);
        }

        const Embed = new MessageEmbed()
            .setAuthor("已離開語音頻道!", "https://github.com/hyn1428/image/blob/main/Music.gif?raw=true")
            .setColor("GREEN")
            .setTitle("👋 掰掰~期待再見")
            .setTimestamp();

        return message.channel.send(Embed).catch(() => message.channel.send("離開語音頻道😿"));
    },
};