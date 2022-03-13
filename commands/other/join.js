const { MessageEmbed } = require("discord.js");
const sendError = require("../../events/error");

module.exports = {
    info: {
        name: "join",
        aliases: ["來","來啊"],
        description: "加入語音頻道",
        usage: "join",
    },

    run: async function (client, message, args) {
        let channel = message.member.voice.channel;
        if (!channel) return sendError("您需要進入語音頻道才能使用", message.channel);

        try {
           const connection = await channel.join();
        } catch (error) {
            await message.guild.me.voice.kick(message.guild.me.id);
            return sendError("嘗試加入頻道.....", message.channel);
        }

        const Embed = new MessageEmbed()
            .setAuthor("已加入語音頻道!", "https://github.com/hyn1428/image/blob/main/Music.gif?raw=true")
            .setColor("GREEN")
            .setTitle("親愛的貓貓已加入頻道")
            .setTimestamp();

        return message.channel.send(Embed).catch(() => message.channel.send("離開語音頻道😿"));
    },
};