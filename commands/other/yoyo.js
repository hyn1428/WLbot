const Discord = require('discord.js');
const fs = require('fs');
const prefix = "~";

module.exports = {
  info: {
    name: "yoyo",
    description: "rr",
    usage: "",
    aliases: ["yoyo"]
  },

  run: async function(client, message, args){
    if (!args[0]) {
      let categories = [];
      fs.readdirSync('./commands/').forEach(dir => {
        const commands = fs.readdirSync(`./commands/${dir}/`).filter(file => file.endsWith('.js'));
      
        const cmds = commands.map(command => {
          let file = require(`../../commands/${dir}/${command}`)
          if (!file.info.name) return "沒有指令";
          let name = file.info.name.replace('.js', '');
          return `\`${name}\` |`;
          });
      
        let data = new Object();
      
        data = {
          name : dir.toUpperCase(),
          value : cmds.length === 0 ? 'In progress' : cmds.join(' '),
          };
      
          categories.push(data)
      });
      
            const helpEmbed = new Discord.MessageEmbed()
            .setTitle('前綴為: `~`')
            .setAuthor('貓貓機器人指令', "https://github.com/hyn1428/image/blob/main/Music.gif?raw=true")
            .addFields(categories)
            .addField("可個別查詢相關指令",'範例:[~help item]')
            //.setDescription(`使用\`${prefix}\`去完成指令`)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setColor("RANDOM")
            .setTimestamp()
            return message.channel.send(helpEmbed)
          } else{
            const command = client.commands.get(args[0].toLowerCase() || client.commands.find(c => c.aliases && c.aliases.includes(args[0].toLowerCase())));
      
            if (!command){
              const noCommandEmbed = new Discord.MessageEmbed()
              .setTitle('查詢的指令有誤')
              .setDescription(`請正確輸入你要查詢的指令`)
              .setFooter(client.user.username, client.user.displayAvatarURL())
              .setColor('RED')
              .setTimestamp()
              return message.channel.send(noCommandEmbed)
            }
      
            const helpMenuEmbed = new Discord.MessageEmbed()
            .setTitle('個別指令資訊')
            //.addField('前綴:', `\`${prefix}\``)
            .addField('指令:',command.info.name ? `**\`${command.info.name}\`**` : 'no command name')
            .addField('縮寫:', command.info.aliases ? `**\`${command.info.aliases.join('` `')}\`**` : 'No aliases')
            .addField('使用方式', command.info.usage ? `**\`${prefix}${command.info.usage}\`**` : `**\`${prefix}${command.info.name},${prefix}${command.info.aliases}\`**`)
            .addField('說明', command.info.description ? command.info.description : 'No說明')
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setColor('YELLOW')
            .setTimestamp()
      
            return message.channel.send(helpMenuEmbed)
          }
  }
}