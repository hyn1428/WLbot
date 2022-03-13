const axios = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports = {
  info: {
    name: "catimage",
    description: "找貓咪圖片",
    usage: "[catimage]",
    aliases: ["貓", "貓咪", "cat"]
  },
    run: async (client, message, args) => {
        
        const url = "https://some-random-api.ml/img/cat";
        
        const facts = "https://some-random-api.ml/facts/cat"

        let image, response;
        
        let fact, responses;
        
        try {
            response = await axios.get(url);
            image = response.data;

            responses = await axios.get(facts)
            fact = responses.data

        } catch (e) {
           //如果無執行則報錯
            return message.channel.send(`發生錯誤 請重試!`)
        }
        //新建一個照片
        const embed = new MessageEmbed()
            .setImage(image.link)

        //12秒刪除
        await message.channel.send(embed).then(m => m.delete({ timeout: 120000 }))
    }
}