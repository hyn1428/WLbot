const Discord = require('discord.js');
const Database = require("@replit/database")
const db = new Database()

module.exports = {
    info: {
        name: "money",
        aliases: ["銀行"],
        description: "銀行",
        usage: "money",
    },

    run: async function (client, message, args) {

    let bank = await db.get(`bank_${message.author.id}`)
    if(bank === null) bank = 0
    let money = ":moneybag:"
    const embed = new Discord.MessageEmbed()
    .setTitle(`${message.author.username}的錢包`)
    .setDescription(`你的錢包:${bank}${money}`)
    .setColor("RANDOM")
    .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
    message.channel.send(embed);
    },
};