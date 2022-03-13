require("dotenv").config();//Loading .env
require("./html.js")
const fs = require("fs");
const { Collection, Client } = require("discord.js");
const client = new Client();//Making a discord bot client
const db = require('quick.db');
const Enmap = require("enmap")
const Discord = require("discord.js");
const Canvas = require("canvas");
const SQLite = require("better-sqlite3")
const sql = new SQLite('./mainDB.sqlite')
const { join } = require("path")
const { readdirSync } = require("fs");
const cooldowns = new Discord.Collection();
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const talkedRecently = new Map();
const pagination = require('discord.js-pagination');
const weather = require('weather-js');
const prettyMilliseconds = require("pretty-ms");
const http = require("http");

client.cooldown = new Collection();
client.commands = new Collection();//Making client.commands as a Discord.js Collection
client.queue = new Map();

client.config = {
	prefix: process.env.PREFIX
};


//歡迎資訊卡
client.on("guildMemberAdd", guildMember =>{
  guildMember.guild.channels.cache.get("399874406991659018").send(`哈囉! <@${guildMember.user.id}>, 歡迎蒞臨${guildMember.guild}伺服器 :tada:`)
})
//離開資訊卡
client.on("guildMemberRemove", guildMember =>{
  guildMember.guild.channels.cache.get("399874406991659018").send(`掰掰~~ <@${guildMember.user.id}>, 期待再相見 :hearts:`)
})

client.on('message', message => {
  if (message.content === "13")
	message.channel.send("海王寶庫流程圖", {
  files: [
    "./img/海1.jpg",
    "./img/海2.jpg"
  ]
})
    })

client.on('message', message => {
  if (message.content === "r1")
	message.channel.send("中階鍊金術\n\n請參考\nhttps://ji3tl94fu06.pixnet.net/blog/post/46631884-%E7%BF%92%E5%BE%97%EF%BC%9A%E4%B8%AD%E9%9A%8E%E9%8D%8A%E9%87%91%E8%A1%93\n\n高階鍊金術\n\n請參考\nhttps://ji3tl94fu06.pixnet.net/blog/post/46672444-%E7%BF%92%E5%BE%97%EF%BC%9A%E9%AB%98%E9%9A%8E%E9%8D%8A%E9%87%91%E8%A1%93\n\n半透明魔晶石ｘ２取得任務\n\n請參考\nhttps://ji3tl94fu06.pixnet.net/blog/post/46673611-來自雪之國度的女王\n", {
  files: [
    "./img/鍊金.jpg",
  ]
})
    })

client.on('message', message => {
  if (message.content === "14")
	message.channel.send("```diff\n-Boss跑速表,若需補充歡迎回報```", {
  files: [
    "./img/SPD.png"
  ]
})
    })

client.on('message', message => {

	function speak(AA, BB, CC) {
		let 說的話2 = AA;
		let bot發話2 = BB;
    let bot發話3 = CC;
		if (message.content === AA) {
			message.channel.send(BB)
      message.channel.send(CC);
		}
	}
let R01 = speak("r3",{files:["./rar/WLAlchemy.exe"]},{files:["./rar/WLAlchemy.xls"]})
let R02 = speak("r4","物屬總表\n\n請參考\n",{files:["./img/屬性圖.png"]})
let R03 = speak("r5","紙娃娃軟體如下,直接下載\n\n",{files:["./rar/doalaw2.4c.zip"]})
let R04 = speak("r6","經驗需求表如下\n\n",{files:["./img/鍊金經驗表.jpg"]})
let R05 = speak("16","節日禮盒圖表如下,不清楚請自行放大\n",{files:["./img/節日禮包.png"]})
let R06 = speak("19","副本/12宮裝備(最高)素質表如下\n",{files:["./img/副本裝素質.png"]})
let R07 = speak("m1","１元福袋機率圖\n",{files:["./mall/1元福袋 .png"]})
let R08 = speak("m2","七彩寵物蛋機率圖\n",{files:["./mall/七彩寵物蛋 .png"]})
let R09 = speak("m3","三葉蟲福袋機率圖\n",{files:["./mall/三葉蟲福袋.png"]})
let R10 = speak("m4","古錐猴福袋機率圖\n",{files:["./mall/古錐猴福袋 .png"]})
let R11 = speak("m5","卷軸福袋機率圖\n",{files:["./mall/卷軸福袋 .png"]})
let R12 = speak("m6","俏皮海豚福袋機率圖\n",{files:["./mall/俏皮海豚福袋 .png"]})
let R13 = speak("m7","幽冥戰馬福袋機率圖\n",{files:["./mall/幽冥戰馬福袋 .png"]})
let R14 = speak("m8","墮天魔駒福袋機率圖\n",{files:["./mall/墮天魔駒福袋 .png"]})
let R15 = speak("m9","神秘套裝盒機率圖\n",{files:["./mall/神秘套裝盒.png"]})
let R16 = speak("m10","野戰福袋機率圖\n",{files:["./mall/野戰福袋 .png"]})
let R17 = speak("m11","聖水福袋機率圖\n",{files:["./mall/聖水福袋.png"]})
let R18 = speak("m12","夥伴強化福袋機率圖\n",{files:["./mall/夥伴強化福袋 .png"]})
let R19 = speak("m13","夥伴裝備福袋機率圖\n",{files:["./mall/夥伴裝備福袋 .png"]})
let R20 = speak("m14","禮物福袋機率圖\n",{files:["./mall/禮物福袋 .png"]})
let R21 = speak("m15","變身福袋機率圖\n",{files:["./mall/變身福袋 .png"]})
let R22 = speak("m16","琉璃石袋機率圖\n",{files:["./mall/琉璃石袋 .png"]})
let R23 = speak("w1","夾娃娃機-機率圖\n",{files:["./mall/play/夾娃娃機.png"]})
let R24 = speak("w2","轉蛋機-機率圖\n",{files:["./mall/play/轉蛋機.png"]})
let R25 = speak("w3","拳擊機-機率圖\n",{files:["./mall/play/拳擊機.png"]})
let R26 = speak("w4","倍水拉霸機-機率圖\n",{files:["./mall/play/倍水拉霸.png"]})
let R27 = speak("w5","彩鑽拉霸機-機率圖\n",{files:["./mall/play/彩鑽拉霸.png"]})
let R28 = speak("w6","爆鑽拉霸機-機率圖\n",{files:["./mall/play/爆鑽拉霸.png"]})
let R29 = speak("w7","翻翻樂機率圖\n",{files:["./mall/play/翻翻樂.png"]})
let R30 = speak("w8","轉轉樂機率圖\n",{files:["./mall/play/轉轉樂.png"]})
let R31 = speak("w9","拼拼樂機率圖\n",{files:["./mall/play/拼拼樂.png"]})
let R32 = speak("w10","戳戳樂(中國童玩商人)-機率圖\n",{files:["./mall/play/戳戳樂.png"]})
let R33 = speak("22","飄流幻境能力值計算機\n下載後解壓縮即可使用\n",{files:["./rar/WLComputer.rar"]})
})
client.on('message', message => {
  if (message.content === "r3")
	message.channel.send("鍊金合成參考表,直接下載你喜歡的格式\n\n")
    })

///說話語法↓///
client.on('message', message => {

	function speak(AA, BB) {
		let 說的話 = AA;
		let bot發話 = BB;
		if (message.content === AA) {
			message.channel.send(BB);
		}
	}
  //聊天功能
  let rudeWords = ['WL','wl','飄流','漂流','飄流幻境','漂流幻境'];
	if (rudeWords.includes(message.content.toLowerCase())) {
    message.channel.send({files:["./img/WL.png"]});
	}
  let C99 = speak("99", "空想奇談部落格\n https://greenraisa.pixnet.net/blog")
  let C1 = speak("01", "輸入n1.女神技能1\n\n輸入n2.女神技能2\n\n輸入n3.職業技能\n\n輸入n4.龍魂\n\n輸入n5.魂閃\n\n輸入n6.箭雨\n\n輸入n7.噬血擊")
  let C2 = speak("n1", "女神技能1\n\n請參考\n\nhttps://ji3tl94fu06.pixnet.net/blog/post/24887731-%E5%A5%B3%E7%A5%9E%E6%8A%80%E8%83%BD%E4%B8%80-%28-%E6%B6%88%E8%80%975%E9%A1%86%E6%98%9F-%29")
  let C3 = speak("n2", "女神技能2\n\n請參考\n\nhttps://ji3tl94fu06.pixnet.net/blog/post/24975281-%E5%A5%B3%E7%A5%9E%E6%8A%80%E8%83%BD%E4%BA%8C-%28-%E6%B6%88%E8%80%977%E9%A1%86%E6%98%9F-%29")
  let C4 = speak("n3", "職業技能\n\n請參考\n\nhttps://ji3tl94fu06.pixnet.net/blog/post/25101171-%E8%81%B7%E6%A5%AD%E6%8A%80%E8%83%BD-%28-%E6%B6%88%E8%80%975%E9%A1%86%E6%98%9F-%29")
  let C5 = speak("n4", "龍魂\n\n請參考\n\nhttps://ji3tl94fu06.pixnet.net/blog/post/25142322-%E9%BE%8D%E9%AD%82")
  let C6 = speak("n5", "魂閃\n\n請參考\n\nhttps://ji3tl94fu06.pixnet.net/blog/post/24793204-%E9%AD%82%E9%96%83-%28-%E6%B6%88%E8%80%973%E9%A1%86%E6%98%9F-%29")
  let C7 = speak("n6", "箭雨\n\n請參考\n\nhttps://ji3tl94fu06.pixnet.net/blog/post/24822312-%E7%AE%AD%E9%9B%A8-%28-%E6%B6%88%E8%80%972%E9%A1%86%E6%98%9F-%29")
  let C8 = speak("n7", "噬血擊\n\n請參考\n\nhttps://ji3tl94fu06.pixnet.net/blog/post/24819845-%E5%99%AC%E8%A1%80%E6%93%8A-%28-%E6%B6%88%E8%80%973%E9%A1%86%E6%98%9F-%29")
  let C9 = speak("02", "轉職任務\n\n請參考\n\nhttps://ji3tl94fu06.pixnet.net/blog/post/24474877-%E8%BD%89%E8%81%B7%E4%BB%BB%E5%8B%99%E6%B5%81%E7%A8%8B")
  let C10 = speak("03", "人寵取得流程\n輸入s1.羅卡取得\n輸入s2.小蘭取得\n輸入s3.妮絲取得\n輸入s4.莎莎取得\n輸入s5.艾琳取得\n輸入s6.燕鈴取得\n輸入s7.疾風取得\n輸入s8.伊娃取得\n輸入s9.貞德取得\n輸入s10.鈴音取得\n輸入s11.薩爾斯取得\n輸入s12.克里夫取得\n輸入s13.加奈子取得\n輸入s14.娜琪拉取得\n輸入s15.弗雷德取得\n輸入s16.夏綠蒂取得\n輸入s17.路易斯取得\n輸入s18.安琪拉取得\n輸入s19.麥哲倫取得\n輸入s20.維納斯＆雅典娜取得\n輸入s21.亞雷斯(獸寵)取得")
  let C11 = speak("s1", "羅卡取得流程\n\n請參考\n\nhttps://ji3tl94fu06.pixnet.net/blog/post/23870551-%E5%8A%A0%E5%85%A5%EF%BC%9A%E8%98%BF%E5%8D%A1")
  let C12 = speak("s2", "小蘭取得流程\n\n請參考\n\nhttps://ji3tl94fu06.pixnet.net/blog/post/23871126-%E5%8A%A0%E5%85%A5%EF%BC%9A%E5%B0%8F%E8%98%AD")
  let C13 = speak("s3", "妮絲取得流程\n\n請參考\n\nhttps://ji3tl94fu06.pixnet.net/blog/post/23870360-%E5%8A%A0%E5%85%A5%EF%BC%9A%E5%A6%AE%E7%B5%B2")
  let C14 = speak("s4", "莎莎取得流程\n\n請參考\n\nhttps://ji3tl94fu06.pixnet.net/blog/post/24072862-%E4%BA%BA%E5%AF%B5%EF%BC%9A%E8%8E%8E%E8%8E%8E-----get")
  let C15 = speak("s5", "艾琳取得流程\n\n請參考\n\nhttps://ji3tl94fu06.pixnet.net/blog/post/23859868-%E5%8A%A0%E5%85%A5%EF%BC%9A%E8%89%BE%E7%90%B3")
  let C16 = speak("s6", "燕鈴取得流程\n\n請參考\n\nhttps://ji3tl94fu06.pixnet.net/blog/post/23912416-%E5%8A%A0%E5%85%A5%EF%BC%9A%E7%87%95%E7%8E%B2")
  let C17 = speak("s7", "疾風取得流程\n\n請參考\n\nhttps://ji3tl94fu06.pixnet.net/blog/post/23912995-%E4%BA%BA%E5%AF%B5%EF%BC%9A%E7%96%BE%E9%A2%A8-----get")
  let C18 = speak("s8", "伊娃取得流程\n\n請參考\n\nhttps://ji3tl94fu06.pixnet.net/blog/post/24106532-%E5%8A%A0%E5%85%A5%EF%BC%9A%E4%BC%8A%E5%A8%83")
  let C19 = speak("s9" , "貞德取得流程\n\n請參考\n\nhttps://ji3tl94fu06.pixnet.net/blog/post/27321543-%E4%BA%BA%E5%AF%B5%EF%BC%9A%E8%B2%9E%E5%BE%B7--get")
  let C20 = speak("s10", "鈴音取得流程\n\n請參考\n\nhttps://ji3tl94fu06.pixnet.net/blog/post/23907489-%E5%8A%A0%E5%85%A5%EF%BC%9A%E9%88%B4%E9%9F%B3")
  let C21 = speak("s11", "薩爾斯取得流程\n\n請參考\n\nhttps://ji3tl94fu06.pixnet.net/blog/post/23860861-%E5%8A%A0%E5%85%A5%EF%BC%9A%E8%96%A9%E7%88%BE%E6%96%AF")
  let C22 = speak("s12", "克里夫取得流程\n\n請參考\n\nhttps://ji3tl94fu06.pixnet.net/blog/post/23885442-%E5%8A%A0%E5%85%A5%EF%BC%9A%E5%85%8B%E9%87%8C%E5%A4%AB")
  let C23 = speak("s13", "加奈子取得流程\n\n請參考\n\nhttps://ji3tl94fu06.pixnet.net/blog/post/23886568-%E5%8A%A0%E5%85%A5%EF%BC%9A%E5%8A%A0%E5%A5%88%E5%AD%90")
  let C24 = speak("s14", "娜琪拉取得流程\n\n請參考\n\nhttps://ji3tl94fu06.pixnet.net/blog/post/24073014-%E4%BA%BA%E5%AF%B5%EF%BC%9A%E5%A8%9C%E7%90%AA%E6%8B%89-----get")
  let C25 = speak("s15", "弗雷德取得流程\n\n請參考\n\nhttps://ji3tl94fu06.pixnet.net/blog/post/24193451-%E5%8A%A0%E5%85%A5%EF%BC%9A%E5%BC%97%E9%9B%B7%E5%BE%B7")
  let C26 = speak("s16", "夏綠蒂取得流程\n\n請參考\n\nhttps://ji3tl94fu06.pixnet.net/blog/post/24104292-%E5%8A%A0%E5%85%A5%EF%BC%9A%E5%A4%8F%E7%B6%A0%E8%92%82")
  let C27 = speak("s17", "路易斯取得流程\n\n請參考\n\nhttps://ji3tl94fu06.pixnet.net/blog/post/23877241-%E5%8A%A0%E5%85%A5%EF%BC%9A%E8%B7%AF%E6%98%93%E6%96%AF")
  let C28 = speak("s18", "安琪拉取得流程\n\n請參考\n\nhttps://ji3tl94fu06.pixnet.net/blog/post/24100535-%E5%8A%A0%E5%85%A5%EF%BC%9A%E5%AE%89%E7%90%AA%E6%8B%89")
  let C29 = speak("s19", "麥哲倫取得流程\n\n請參考\n\nhttps://ji3tl94fu06.pixnet.net/blog/post/23884549-%E5%8A%A0%E5%85%A5%EF%BC%9A%E9%BA%A5%E5%93%B2%E5%80%AB")
  let C30 = speak("s20", "維納斯＆雅典娜取得流程\n\n請參考\n\nhttps://ji3tl94fu06.pixnet.net/blog/post/26031289-%E4%BA%BA%E5%AF%B5%EF%BC%9A%E9%9B%85%E5%85%B8%E5%A8%9C-or-%E7%B6%AD%E7%B4%8D%E6%96%AF-----get")
  let C31 = speak("s21", "亞雷斯(獸寵)取得流程\n\n請參考\n\nhttps://ji3tl94fu06.pixnet.net/blog/post/30520256-%E7%8D%B8%E5%AF%B5%EF%BC%9A%E4%BA%9E%E9%9B%B7%E6%96%AF--get")
  let C32 = speak("04","人寵死任流程\n輸入z1.羅卡死任流程\n輸入z2.小蘭死任流程\n輸入z3.妮絲死任流程\n輸入z4.莎莎死任流程\n輸入z5.艾琳死任流程\n輸入z6.燕鈴死任流程\n輸入z7.疾風死任流程\n輸入z8.伊娃死任流程\n輸入z9.貞德死任流程\n輸入z10.薩爾斯死任流程\n輸入z11.克里夫死任流程\n輸入z12.加奈子死任流程\n輸入z13.娜琪拉死任流程\n輸入z14.弗雷德死任流程\n輸入z15.安琪拉死任流程\n輸入z16.麥哲倫死任流程")
  let C33 = speak("z1","羅卡死任流程\n\n請參考\n\nhttps://ji3tl94fu06.pixnet.net/blog/post/24653667-%E6%AD%BB%E4%BA%A1%EF%BC%9A%E8%98%BF%E5%8D%A1")
  let C34 = speak("z2","小蘭死任流程\n\n請參考\n\nhttps://ji3tl94fu06.pixnet.net/blog/post/24394579-%E6%AD%BB%E4%BA%A1%EF%BC%9A%E5%B0%8F%E8%98%AD")
  let C35 = speak("z3","妮絲死任流程\n\n請參考\n\nhttps://ji3tl94fu06.pixnet.net/blog/post/24198826-%E6%AD%BB%E4%BA%A1%EF%BC%9A%E5%A6%AE%E7%B5%B2")
  let C36 = speak("z4","莎莎死任流程\n\n請參考\n\nhttps://ji3tl94fu06.pixnet.net/blog/post/24479927-%E6%AD%BB%E4%BA%A1%EF%BC%9A%E8%8E%8E%E8%8E%8E")
  let C37 = speak("z5","艾琳死任流程\n\n請參考\n\nhttps://ji3tl94fu06.pixnet.net/blog/post/24930674-%E6%AD%BB%E4%BA%A1%EF%BC%9A%E8%89%BE%E7%90%B3")
  let C38 = speak("z6","燕鈴死任流程\n\n請參考\n\nhttps://ji3tl94fu06.pixnet.net/blog/post/33744777-%E6%AD%BB%E4%BA%A1%EF%BC%9A%E7%87%95%E7%8E%B2")
  let C39 = speak("z7","疾風死任流程\n\n請參考\n\nhttps://ji3tl94fu06.pixnet.net/blog/post/26199429-%E6%AD%BB%E4%BA%A1%EF%BC%9A%E7%96%BE%E9%A2%A8")
  let C40 = speak("z8","伊娃死任流程\n\n請參考\n\nhttps://ji3tl94fu06.pixnet.net/blog/post/47567718-%E6%AD%BB%E4%BA%A1%EF%BC%9A%E4%BC%8A%E5%A8%83")
  let C41 = speak("z9","貞德死任流程\n\n請參考\n\nhttps://www.youtube.com/watch?v=pjdeuqpC5V0")
  let C42 = speak("z10","薩爾斯死任流程\n\n請參考\n\nhttps://ji3tl94fu06.pixnet.net/blog/post/35426681-%E6%AD%BB%E4%BA%A1%EF%BC%9A%E8%96%A9%E7%88%BE%E6%96%AF")
  let C43 = speak("z11","克里夫死任流程\n\n請參考\n\nhttps://ji3tl94fu06.pixnet.net/blog/post/24198879-%E6%AD%BB%E4%BA%A1%EF%BC%9A%E5%85%8B%E9%87%8C%E5%A4%AB")
  let C44 = speak("z12","加奈子死任流程\n\n請參考\n\nhttps://ji3tl94fu06.pixnet.net/blog/post/26585339-%E6%AD%BB%E4%BA%A1%EF%BC%9A%E5%8A%A0%E5%A5%88%E5%AD%90")
  let C45 = speak("z13","娜琪拉死任流程\n\n請參考\n\nhttps://ji3tl94fu06.pixnet.net/blog/post/24664806-%E6%AD%BB%E4%BA%A1%EF%BC%9A%E5%A8%9C%E7%90%AA%E6%8B%89")
  let C46 = speak("z14","弗雷德死任流程\n\n請參考\n\nhttps://ji3tl94fu06.pixnet.net/blog/post/27319247-%E6%AD%BB%E4%BA%A1%EF%BC%9A%E5%BC%97%E9%9B%B7%E5%BE%B7")
  let C47 = speak("z15","安琪拉死任流程\n\n請參考\n\nhttps://ji3tl94fu06.pixnet.net/blog/post/46509769-%E6%AD%BB%E4%BA%A1%EF%BC%9A%E5%AE%89%E7%90%AA%E6%8B%89")
  let C48 = speak("z16","麥哲倫死任流程\n\n請參考\n\nhttps://ji3tl94fu06.pixnet.net/blog/post/24479805-%E6%AD%BB%E4%BA%A1%EF%BC%9A%E9%BA%A5%E5%93%B2%E5%80%AB")
  let C49 = speak("05","星星取得任務\n\n請參考\n\nhttps://forum.gamer.com.tw/G2.php?bsn=8897&sn=1476")
  let C50 = speak("06","致命一擊任務流程\n\n請參考\nhttps://ji3tl94fu06.pixnet.net/blog/post/25027844-%E8%87%B4%E5%91%BD%E4%B8%80%E6%93%8A-%28-%E6%B6%88%E8%80%978%E9%A1%86%E6%98%9F-%29")
  let C51 = speak("07","遺忘 人／寵 卷軸取得任務\n\n輸入h1.人卷任務\n\n輸入h2.寵卷任務")
  let C52 = speak("h1","遺忘之卷(人)任務\n\n請參考\n\nhttps://www.google.com/search?q=%E9%A3%84%E6%B5%81%E5%B9%BB%E5%A2%83%E4%BA%BA%E6%8D%B2&oq=%E9%A3%84%E6%B5%81%E5%B9%BB%E5%A2%83%E4%BA%BA%E6%8D%B2&aqs=chrome..69i57.3837j0j4&sourceid=chrome&ie=UTF-8")
  let C53 = speak("h2","回點寵卷(寵)取得任務\n\n請參考\n\nhttps://ji3tl94fu06.pixnet.net/blog/category/1478577")
  let C54 = speak("08","經驗聖水／倍水取得任務\n\n請參考\n\nhttps://forum.gamer.com.tw/C.php?bsn=8897&snA=84555")
  let C55 = speak("09","人／寵經驗膠囊取得任務\n\n請參考\n\nhttps://forum.gamer.com.tw/G2.php?bsn=08897&parent=5507&sn=3578&lorder=4&ptitle=%EF%BF%A1%E4%BA%BA%E7%89%A9%E8%86%A0%E5%9B%8A%E3%80%81%E5%AF%B5%E7%89%A9%E8%97%A5%E4%B8%B8%E7%9B%B8%E9%97%9C")
  let C56 = speak("10","友好度道具取得任務\n\n請參考\n\nhttps://forum.gamer.com.tw/G2.php?bsn=08897&parent=5514&sn=3734&lorder=8&ptitle=%EF%BF%A1%E7%89%B9%E6%AE%8A%E4%BB%BB%E5%8B%99%E7%8D%8E%E5%8B%B5%E7%9B%B8%E9%97%9C")
  let C57 = speak("11","寵物臂環取得任務\n\n請參考\n\nhttps://forum.gamer.com.tw/G2.php?bsn=08897&parent=5508&sn=1838&lorder=1&ptitle=%EF%BF%A1%E4%BB%BB%E5%8B%99%E8%87%82%E7%92%B0%E3%80%81%E9%BB%9E%E6%95%B8%E8%87%82%E7%92%B0%E7%9B%B8%E9%97%9C")
  let C58 = speak("12","潛能／絕對潛能丸任務\n\n請參考\n\nhttps://ji3tl94fu06.pixnet.net/blog/category/1648684")
  let C59 = speak("17","機智問答/猜燈謎 題庫\n\n請參考\n\nhttps://forum.gamer.com.tw/C.php?bsn=8897&snA=91345")
  let C60 = speak("15","r1.初中高階鍊金術任務\n\nr2.8-12及物屬取得替代方案\n\nr3.鍊金合成參考表\n\nr4.物屬總表\n\nr5.紙娃娃\n\nr6.鍊金經驗表\n\nr7.副本裝合成公式")
  let C61 = speak("r2","8-12材料 與 替代材料\n\n請參考\nhttps://forum.gamer.com.tw/C.php?bsn=08897&snA=74151")
  let C62 = speak("r7","副本裝合成公式\n\n請參考\nhttps://blog.xuite.net/yooyoo1188/4ever/24431323")
  let C63 = speak("18","裝備還原方法(原始數值)\n\n方法一 : 裝備 + 金塊ｘ４ + 物等１雜物(有機肥料) + 書１.２.３ ＝ 乾淨的裝備 （中高階）\n\n方法二 : 裝備 + 18金ｘ３ + 物等１雜物(有機肥料) + 書１.２.３ ＝ 乾淨的裝備   ( 中高階 )\n\n※要注意還原後鍛造&結晶&造型都會消失(變回原始數值)")
  let C64 = speak("20","商城機率圖\n```diff\n-若圖片太小請自行放大```輸入 m1．１元福袋\n輸入 m2．七彩寵物蛋\n輸入 m3．三葉蟲福袋\n輸入 m4．古錐猴福袋\n輸入 m5．卷軸福袋\n輸入 m6．俏皮海豚福袋\n輸入 m7．幽冥戰馬福袋\n輸入 m8．墮天魔駒福袋\n輸入 m9．神秘套裝盒\n輸入 m10．野戰福袋\n輸入 m11．聖水福袋\n輸入 m12．夥伴強化福袋\n輸入 m13．夥伴裝備福袋\n輸入 m14．禮物福袋\n輸入 m15．變身福袋\n輸入 m16．琉璃石袋")
  let C65 = speak("21","遊樂場機率圖\n```diff\n-若圖片太小請自行放大```輸入 w1．夾娃娃機\n輸入 w2．轉蛋機\n輸入 w3．拳擊機\n輸入 w4．倍水拉霸機\n輸入 w5．彩鑽拉霸機\n輸入 w6．爆鑽拉霸機\n輸入 w7．翻翻樂\n輸入 w8．轉轉樂\n輸入 w9．拼拼樂\n輸入 w10．戳戳樂(中國童玩商人)")
 
  
  //幫玩家備註功能
  let R1 = speak("暫離", `${message.author}等一下回來唷!`)
  let R2 = speak("掰掰", `${message.author}要走了,晚安掰掰唷!`)


	if (message.content === '愛你') {
		for (i = 0; i < 3; i++) {
			message.channel.send(`我也最愛${message.author.username}了♥`);
		}
		message.channel.send('很重要,所以要說三次(,,・ω・,,)');
	}

	if (message.content === '標記我') {
		message.reply('奇怪的人');
	}

});

///一堆功能的區域↓///
client.on('message', message => {

  //一鍵串流音樂
	if (message.content === "music") {
    let channel = message.member.voice.channel;
    const connection = channel.join();
		message.channel.send("~p https://www.youtube.com/watch?v=oXUc4r6sFRA");
	}
  //一鍵串流音樂2
	if (message.content === "music2") {
    let channel = message.member.voice.channel;
    const connection = channel.join();
		message.channel.send("~p https://www.youtube.com/watch?v=q3H0yMmsBaM");
	}
  
	//傳送(指定)私人訊息
	if (message.content === '傳訊息給貓貓') {
		client.users.fetch('258925476733648898').then(user => { user.send('早安你好') } );
	}
  //傳送私人訊息
  if (message.content === "傳訊息") {
    message.author.send('早安你好');
  };

  //新增反應
  if (message.content === "給我回應") {
    message.react(`❤`)
  };

  //指定抹個人 才能使用的指令
  if (message.author.id ===  "xxxxxxxxxxxxxxxx"){
   if (message.content === '123') {
    message.channel.send("456")
   }
  } 

	//禁語設定
	if (message.author.bot) return;
	let rudeWords = ['幹','媽的','幹你娘','靠北',
  '耖','耖你媽','操你媽','機掰'];
	if (rudeWords.includes(message.content.toLowerCase())) {
		message.delete();
		message.author.send('請勿說髒話,麻煩請注意用詞!');
	}

});

//載入 Events
fs.readdir(__dirname + "/events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(__dirname + `/events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
    console.log("載入資料：" + eventName)
  });
});

//載入Commands
fs.readdir('./commands/game', (err, files) => {
	if (err) return console.error(err);
	files.forEach(file => {
		if (!file.endsWith('.js')) return;
		let props = require(`./commands/game/${file}`);
		let commandName = file.split('.')[0];
		client.commands.set(commandName, props);
		console.log('載入指令：' + commandName);
	});
});
 
fs.readdir("./commands/other", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/other/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
    console.log("載入指令：" + commandName)
  });
});

fs.readdir("./commands/rank", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/rank/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
    console.log("載入指令：" + commandName)
  });
});

fs.readdir("./commands/music", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/music/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
    console.log("載入指令：" + commandName)
  });
});
//rank專用語法
client.on("message", message => {
  //如果發話者為機器人 跳出
  if (message.author.bot) return;
  //如果不是伺服器裡的發話 跳出
  if (!message.guild) return;
  //抓取主鍵(使用者id,伺服器id)
  const rank = user_get.get(message.author.id, message.guild.id)

  //如果發話人的主鍵 沒有在ranks表格內的話 =>
  if (!rank) {
    //輸入資訊 => 輸入或複寫到ranks表格中(*同上)
    let sql_insert = sql.prepare("INSERT OR REPLACE INTO ranks (id, user, guild, xp, level, totalXP) VALUES (?,?,?,?,?,?);");
    //輸入的資訊 => .run運行資料庫且不回傳值
    //( 發話人id-伺服器id , 發話人id , 伺服器id , 0 , 0 , 0 )
    sql_insert.run(`${message.author.id}-${message.guild.id}`, message.author.id, message.guild.id, 0, 1, 0)
    console.log("載入第一資料庫");
    //跳出
    return;
  }
                
 //---經驗值處理---//
  //經驗值公式
  const getXp = Math.floor(Math.random() * 9)+1;
  //所需經驗值
  const nextXP = rank.level * 275;
  //如果有人傳訊息
  if (message.author){
    //經驗值+經驗值公式
    rank.xp += getXp;
    //總經驗值+經驗值公式
    rank.totalXP += getXp;
 //---升級處理---//
    //經驗值>=所需經驗值
    if (rank.xp >= nextXP) {
      //經驗值歸0
      rank.xp = 0;
      //等級+1
      rank.level += 1;
      //傳訊息
      let embed = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`**🎊恭喜${message.author}🎊  您已經提升到${rank.level}等了:arrow_up:**`)
        .setColor("RANDOM")
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp();
        message.channel.send(embed).then(m=>m.delete({timeout:60000}));
    };

    //設定等級 => .run運行(抓取等級)資料庫且不回傳值
    userinfo_set.run(rank);
  }
});


//Logging in to discord
client.login(process.env.TOKEN)
