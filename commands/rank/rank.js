const { createCanvas, loadImage } = require("canvas");
const Discord = require("discord.js");
const SQLite = require("better-sqlite3");
const sql = new SQLite('./mainDB.sqlite')
const client = new Discord.Client();
const { join } = require("path")
const path = require('path');

module.exports = {
  info: {
    name: "rank",
    description: "顯示當前等級",
    usage: "",
    aliases: ["等級"]
},
run: async function (client, message, args) {



//設定空白建
let userArray = message.content.split(" ");
//抓取空白建後的數值
let userArgs = userArray.slice(1);
//設定user = 標記的會員or抓取數值or找尋數值=>()or會員
//(使用者名稱=空白建後的人or使用者名稱=預設第一人)
let user = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;

//抓取user資料庫
user_get = sql.prepare("SELECT * FROM ranks WHERE user = ? AND guild = ?");
//抓取user資料庫
userinfo_set = sql.prepare("INSERT OR REPLACE INTO ranks (id, user, guild, xp, level, totalXP) VALUES (@id, @user, @guild, @xp, @level, @totalXP);");

//設定排行榜前10名的人
const top10 = sql.prepare("SELECT * FROM ranks WHERE guild = ? ORDER BY totalXP").all(message.guild.id);
//設定user資料庫 = score
let score = user_get.get(user.id, message.guild.id);
if (!score) {
  return message.reply(`此用戶還沒有等級資料!`)
}

//設定level資訊
const levelInfo = score.level
//設定nextXP資訊
const nextXP = levelInfo * 275
//設定xp資訊
const xpInfo = score.xp;
//設定totalxp資訊
const totalXP = score.totalXP
//抓取排行榜2名數值 做運算 (不知道啦!)
let rank = top10.sort((a, b) => {
return b.totalXP - a.totalXP
});

//抓取排行榜的相關數值 (不知道啦!)
let ranking = rank.map(x => x.totalXP).indexOf(totalXP) + 1
//如果有問題就 =>
if(!message.guild.me.hasPermission("ATTACH_FILES")) return message.reply(`**Missing Permission**: ATTACH_FILES or MESSAGE ATTACHMENTS`);
 
//建立canvas資訊卡(寬,高)
const canvas = createCanvas(1000, 333)

//canvas資訊卡的文字為2d
const ctx = canvas.getContext("2d");
  
//改背景 (*勿動)
const background = await loadImage(join('./img/000.jpg'));

//字型註冊
let {registerFont} = require('canvas');

//繪圖指令
ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
 
//改字體 丟檔案到 font資料夾 (*勿動)
function fontFile(name) {
  return path.join('./font', name);
}
//             改這個檔名  ⬇ (*勿動)
registerFont(fontFile('666.ttf'), {
//   這個也要 ⬇ 但是不用副檔名 底下font 也要全改 (*勿動)
    family:"666"
})

  //-----繪圖區-----// 
    //初始設定
    ctx.beginPath();
    //線的寬度
    ctx.lineWidth = 4;
    //經驗值框顏色
    ctx.strokeStyle = "#6D1BEB"
    //透明度
    ctx.globalAlpha = 0.2;
    //經驗值條背景透明色
    ctx.fillStyle = "#000000"
    //矩形的透明框(x,y,寬,高)
    ctx.fillRect(180, 216, 775, 65);
    //填滿當前區域
    ctx.fill();
    //透明度
    ctx.globalAlpha = 1;
    //矩形邊框(x,y,寬,高)
    ctx.strokeRect(180, 216, 775, 65);
    //圖形邊框
    ctx.stroke();
    
  //---動態顏色填滿圖---//
    //經驗值顏色
    ctx.fillStyle = "#ff52c2";
    //透明度
    ctx.globalAlpha = 0.6;
    //填滿的矩形(x,y,寬,高)
    ctx.fillRect(200, 216, ((100 / (score.level * 275)) * score.xp) * 7.5, 65);
    //填滿當前區域
    ctx.fill();
    //透明度
    ctx.globalAlpha = 1;

    //          ***  調整等級卡位置  ***  
    //  x = 左綠色數字為左右 調低則向左移動 調高則向右移動 
    //  y = 右綠色數字為高低 調低則向上移動 調高則向下移動
    // PX 注意  www7 為字型勿動 調整PX即可 PX為字體大小                   
 
  //-----設定區-----//
    //所有字顏色
    ctx.fillStyle = "#6D1BEB";

    //經驗值的數字區
    ctx.font = '40px 666';
    ctx.textAlign = "經驗條";
    ctx.fillText(`${xpInfo} / ${nextXP} `, 480, 260);//位置數字

    //暱稱區
    ctx.font = '60px 666';
    ctx.textAlign = '暱稱';
    ctx.fillText(user.user.tag, 450 , 92); //位置數字

    //等級區
    ctx.font = '50px 666';
    ctx.fillText("等級:", 400, 170); //位置數字
    ctx.fillText(levelInfo, 530, 170);

    //排行區
    ctx.font = '50px 666';
    ctx.fillText("排行: ", 700, 170); //位置數字
    ctx.fillText(ranking, 830, 170);

  //---頭像外框設定---//
    //弧形(x,y,半徑,起始角,結束角,逆時針)
    ctx.arc(170, 160, 120, 0, Math.PI * 2, true);
    //線寬
    ctx.lineWidth = 6;
    //頭相圓框顏色
    ctx.strokeStyle = "#ff52c2"
    //圖形邊框
    ctx.stroke();
    //閉合路徑
    ctx.closePath();
    //繪圖
    ctx.clip();

    //設定角色圖片
    const avatar = await loadImage(user.user.displayAvatarURL({ format: "png" }));
    //設定角色圖片2
    ctx.drawImage(avatar, 40, 40, 250, 250);

    //發訊息 (使用canvas資訊卡)
    const attachments = new Discord.MessageAttachment(canvas.toBuffer(), "rank.png");
    //傳送訊息.刪除機器人打字
    message.channel.send(attachments)
    //.then(m=>m.delete({timeout:60000}));
    }
} 

//參考的資料文獻=> https://developer.mozilla.org/zh-TW/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes