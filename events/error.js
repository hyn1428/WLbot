const { MessageEmbed } = require("discord.js")



module.exports = async (text, channel) => {
    let embed = new MessageEmbed()
    .setColor("RED")
    .setTitle("警告🔞")
    .setDescription(text)
    await channel.send(embed)
}
