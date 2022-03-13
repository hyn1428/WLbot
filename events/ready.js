const SQLite = require("better-sqlite3")
const sql = new SQLite('./mainDB.sqlite')


module.exports = async (client) => {

//---設定跟新增ranks表格---//
  // 找尋名子為ranks的表格 => .get執行調用且回傳函數
  const rankTable = sql.prepare("SELECT count(*) FROM sqlite_master WHERE type='table' AND name = 'ranks';").get();

  //如果不存在的話 => 創建ranks表格 => .run運行資料庫且不回傳值
  //(ranks表格內新增:id TEXT屬性+賦予PRIMARY KEY主鍵,
  //user TEXT屬性,guild TEXT屬性,xp INTEGER屬性,
  //level INTEGER屬性,totalXP INTEGER屬性)
  if (!rankTable['count(*)']) {
    sql.prepare("CREATE TABLE ranks (id TEXT PRIMARY KEY, user TEXT, guild TEXT, xp INTEGER, level INTEGER, totalXP INTEGER);").run();
  }

  //從ranks表格中 抓取user,guild
  user_get = sql.prepare("SELECT * FROM ranks WHERE user = ? AND guild = ?");
  
  //設定ranks表格 => 輸入或複寫到ranks表格中 => 
  //id,user,guild,xp,level,totalXP值為
  //@id,@user,@guild,@xp,@level,@totalXP
  userinfo_set = sql.prepare("INSERT OR REPLACE INTO ranks (id, user, guild, xp, level, totalXP) VALUES (@id, @user, @guild, @xp, @level, @totalXP);");
  
  //最後處理
  console.log(`載入${client.user.username}\n已登入 ${client.user.username} 機器人`);
  await client.user.setActivity("流行音樂", {
    type: "LISTENING",//can be LISTENING, WATCHING, PLAYING, STREAMING
  });
  
};
