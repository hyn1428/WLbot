const Discord = require("discord.js");
const SQLite = require("better-sqlite3");
const sql = new SQLite('./mainDB.sqlite')
const client = new Discord.Client();

module.exports = {
  info: {
    name: 'leaderboard',
    aliases: ['lb',"前10名","前十名","排行"],
    description: "等級排行榜前10名",
    cooldown: 3,
    category: "Leveling",
    },

    run: async function (client, message, args) {
      
    const currentPage = parseInt(args[0]) || 1;
    const top10 = sql.prepare("SELECT * FROM ranks WHERE guild = ? ORDER BY totalXP DESC;").all(message.guild.id);
    if(parseFloat(args[0])  > Math.ceil(top10.length / 10)) {
      return message.reply(`Invalid page number! There are only ${Math.ceil(top10.length / 10)} pages`)
    }
        const embed = new Discord.MessageEmbed()
        .setTitle(`📊等級排行榜`)
        .setColor("RANDOM")
        .setTimestamp()


      if(top10.length < 1) {
          embed.setDescription(`排行榜中沒有人!`)
        }
      var state = {
        'querySet': top10,
        'page': currentPage,
        'rows': 10
      }

      buildTable()

      function pagination(querySet, page, rows) {
        var trimStart = (page - 1) * rows
        var trimEnd = trimStart + rows

        var trimmedData = querySet.slice(trimStart, trimEnd)
      
        var pages = Math.ceil(querySet.length / rows)

        return{
          'querySet':trimmedData,
          'pages':pages
        }
      }
      
      function buildTable() {
        var pagesData = pagination(state.querySet, state.page, state.rows)
        var myList = pagesData.querySet
      for(var i = 1 in myList) {
           let nextXP = myList[i].level * 275
           let totalXP = myList[i].totalXP
          let rank = top10.sort((a, b) => {
            return b.totalXP - a.totalXP
          });
          let ranking = rank.map(x => x.totalXP).indexOf(totalXP) + 1
        let users;
        if(typeof message.client.users.cache.get(myList[i].user) == "undefined") {
        users = `<@!${myList[i].user}>`
        } else {
        users = message.client.users.cache.get(myList[i].user).tag
        }
        embed.addFields({ name: `#${ranking}. ${users}`, 
                          value: 
                          `> **🏅 等級**: \`${myList[i].level}\`
                         \n> **🧮 經驗**: \`${myList[i].xp} / ${nextXP}\`` });
      }
      embed.setFooter(`頁數 ${currentPage} / ${Math.ceil(top10.length / 10)}`)
    }
      return message.channel.send({embed});

    }
}