const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    info: {
        name: "help",
        description: "顯示所有指令",
        usage: "[command]",
        aliases: ["commands", "我要幫忙", "幫助"]
    },

    run: async function(client, message, args){

        const music = new Discord.MessageEmbed()
        .setAuthor('音樂常用功能１／８', "https://github.com/hyn1428/image/blob/main/Music.gif?raw=true")
	      .addField('`play`','功能：播放音樂\n用法：p、播放')
		    .addField('`playlist`','功能：加入音樂到播放列表\n用法：pl\n*備註：放播放清單請用此指令')
        .addField('`search`','功能：搜尋歌曲\n用法：sc')
        .addField('`list`','功能：已點播列表\n用法：l、清單')
        .addField('`skip`','功能：切歌 \n用法：s、切歌')
		    .setColor("RANDOM")
        .setTimestamp()

        const music2 = new Discord.MessageEmbed()
        .setAuthor('音樂進階功能２／８', "https://github.com/hyn1428/image/blob/main/Music.gif?raw=true")
        .addField('`loop`','功能：循環播放\n用法：重複、循環')
        .addField('`pause`','功能：暫停播放\n用法：暫停')
        .addField('`resume`','功能：繼續播放\n用法：繼續')
		    .addField('`volume`','功能：音量調整<1～200>\n用法：v、音量')
		    .addField('`remove`','功能：刪指定歌曲<數字>\n用法：rm')
        .setColor("RANDOM")
        .setTimestamp()

        const music3 = new Discord.MessageEmbed()
        .setAuthor('音樂進階功能３／８', "https://github.com/hyn1428/image/blob/main/Music.gif?raw=true")
        .addField('`nowplaying`','功能：顯示現正播放\n用法：np')
		    .addField('`skipto`','功能：指定數字前一鍵切歌\n用法：一鍵跳過到')
		    .addField('`shuffle`','功能：將列表中的歌曲隨機打亂\n用法：隨機重洗')
		    .addField('`lyrics`*未完成','功能：搜尋歌詞\n用法：ly')
        .setColor("RANDOM")
        .setTimestamp()
        
        const rank = new Discord.MessageEmbed()
        .setAuthor('等級功能４／８', "https://github.com/hyn1428/image/blob/main/Music.gif?raw=true")
        .addField('`rank`','功能：顯示當前等級\n用法：等級')
        .addField('`leaderboard`','功能：顯示當前排名\n用法：lb、排名')
        .setColor("RANDOM")
        .setTimestamp()

        const other = new Discord.MessageEmbed()
        .setAuthor('其他功能５／８', "https://github.com/hyn1428/image/blob/main/Music.gif?raw=true")
        .addField('`help`','功能：顯示所有功能\n用法：幫助、我要幫忙')
		    .addField('`clear`','功能：清除文字\n用法：c、清除\n*備註：此功能需特殊權限')
        .addField('`join`','功能：讓機器人加入語音\n用法：來')
        .addField('`leave`','功能：中斷機器人連接\n用法：disconnect、滾')
        .addField('`info`','功能：貓貓機器人資訊卡\n用法：資訊、作者、作者是誰')
        .setColor("RANDOM")
        .setTimestamp()

        const other2 = new Discord.MessageEmbed()
        .setAuthor('其他功能６／８', "https://github.com/hyn1428/image/blob/main/Music.gif?raw=true")
		    .addField('`roll`',  '功能：亂數擲骰遊戲\n用法：隨機數、擲骰子')
		    .addField('`weather`','功能：查詢天氣\n用法：天氣、氣溫')
		    .addField('`catimage`','功能：隨機生成一張貓咪圖片\n用法：cat、貓、貓咪')
        .addField('`uptime`','功能：查詢機器人開機多久時間\n用法：上線時間')
        .addField('`version`','功能：查詢機器人的版本\n用法：ver、版本')
        .addField('`image`*暫時壞','功能：找圖片(僅限英文)\n用法：找,圖片')
        .setColor("RANDOM")
        .setTimestamp()

        const manage = new Discord.MessageEmbed()
        .setAuthor('管理功能７／８', "https://github.com/hyn1428/image/blob/main/Music.gif?raw=true")
        .setTitle('*此管理功能為客製化區')
		    .addField('`ban`','功能：禁掉抹人進入伺服器的權限\n用法：禁止訪問')
		    .addField('`kick`','功能：踢除抹人\n用法：踢人')
		    .addField('`ReactRole`','功能：自動給予身分組\n用法：身分組')
		    .addField('`mute`','功能：禁言抹人\n用法：禁言')
        .setColor("RANDOM")
        .setTimestamp()

        const speak = new Discord.MessageEmbed()
        .setAuthor('說話聊天功能８／８', "https://github.com/hyn1428/image/blob/main/Music.gif?raw=true")
        .setTitle('以下都不用加前綴(~)指令')
        .addField('`---↓聊天功能↓---`','貓貓、貓、喵、喵喵\n死貓咪、壞貓咪、你好、愛你')
        .addField('`---↓實用功能↓---`','music、隨機音樂')
        .addField('`--↓備註告知功能↓--`','暫離、掰掰')
        .setColor("RANDOM")
        .setTimestamp()

        const pages = [
                music,
                music2,
                music3,
                rank,
                other,
                other2,
                manage,
                speak
        ]
        
        const emojiList = ["⏪", "⏩"];

        const timeout = '240000';
        
        

        pagination(message, pages, emojiList, timeout)
    }
}