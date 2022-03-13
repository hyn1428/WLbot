const Discord = require('discord.js');

module.exports = {
  info: {
    name: "Role",
    description: "介紹課程",
    usage: "Role",
    aliases: ["介紹課程"]
  },
  
  run: async(client, message, args) => {
  //discord.js網站收尋  Permissions

  //顯示有無身分組(內碼版)
  if(message.member.roles.cache.has('853406866544918558')){ 
      message.channel.send("您有ccccc的身分組")
  } else{message.channel.send("你什麼都沒有")}
  //顯示有無身分組(名稱版)
  if(message.member.roles.cache.some(r => r.name === "ccccc")){
      message.channel.send("您有ccccc的身分組2")
  } else{message.channel.send("你什麼都沒有")}

  //增加與移除身分組(內碼版)
  if (message.content === "我要增加身分組") {
    message.member.roles.add('853406866544918558') 
  }
  if (message.content === "我要移除身分組") {
    message.member.roles.remove('853406866544918558')
  }
  //增加與移除身分組(名稱版)
  let role = message.guild.roles.cache.find(r => r.name === "ccccc")
  if (message.content === "我要增加身分組2") {
      message.member.roles.add(role)
    }
  if (message.content === "我要移除身分組") {
      message.member.roles.remove(role)
  }
  
  //顯示有無"  "權限  //網站Permissions=> .FLAGS
  if(message.member.permissions.has("ADMINISTRATOR")){
    message.channel.send("你擁有最高權限")
  } else{message.channel.send("你什麼都沒有")}

}
}
