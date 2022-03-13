const Discord = require('discord.js');
const Database = require("@replit/database")
const db = new Database()

module.exports = {
    info: {
        name: "item",
        aliases: ["道具"],
        description: "道具",
        usage: "item",
    },

    run: async function (client, message, args) {
    let cherry_img = ":cherries:"
    let apple_img = ":apple:"
    let watermelon_img = ":watermelon:"

    let cherry = await db.get(`cherry_${message.author.id}`)
    let apple = await db.get(`apple_${message.author.id}`)
    let watermelon = await db.get(`watermelon_${message.author.id}`)

    if(cherry === null) cherry = 0
    if(apple === null) apple = 0
    if(watermelon === null) watermelon = 0
    
    const embed = new Discord.MessageEmbed()
    .setTitle(`${message.author.username}的道具欄`)
    .addField(`櫻桃${cherry_img}`,`有${cherry}顆`)
    .addField(`蘋果${apple_img}`,`有${apple}顆`)
    .addField(`西瓜${watermelon_img}`,`有${watermelon}顆`)
    .setColor("RANDOM")
    .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
    message.channel.send(embed);
    },
};