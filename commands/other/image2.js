const Discord = require('discord.js');
var Scraper = require('images-scraper')

const google = new Scraper({
  puppeteer:{
    headless:true
  }
})

module.exports = {
  info: {
    name: "image2",
    description: "圖片2",
    usage: "image2",
    aliases: ["圖片2"]
  },
  
  run: async(client, message, args) => {
      const image_query = args.join(' ');
      if(!image_query) return message.channel.send("書打");

      const image_results = await google.scrape(image_query, 1);
      message.channel.send(image_results[0].url);

  }
}