const weather = require('weather-js');
const Discord = require('discord.js');

module.exports = {
  info: {
    name: "weather",
    description: "天氣預報",
    usage: "weather",
    aliases: ["weather", "天氣", "氣溫"]
  },
  
     run: async function (client, message, args) {

       weather.find({search: args.join(" "), degreeType: 'C'}, function (error, result){
       // 'C' can be changed to 'F' for farneheit results
       if(error) return message.channel.send(error);
       if(!args[0]) return message.channel.send('請指定一個地區')

       if(result === undefined || result.length === 0) return message.channel.send('**無效的** 地區');

        var current = result[0].current;
        var location = result[0].location;

        const weatherinfo = new Discord.MessageEmbed()
        .setDescription(`**${current.skytext}**`)
        .setAuthor(`天氣預測 ${current.observationpoint}`)
        .setThumbnail(current.imageUrl)
        .setColor(0x111111)
        .addField('標準時區', `UTC${location.timezone}`, true)
        .addField('溫度標示', '攝氏溫度', true)
        .addField('測得溫度', `......${current.temperature}°......`, true)
        .addField('測得風速', current.winddisplay, true)
        .addField('體感溫度', `......${current.feelslike}°......`, true)
        .addField('測得濕度', `......${current.humidity}%.....`, true)


        message.channel.send(weatherinfo)
        })        
    }
}