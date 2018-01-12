module.exports.run = async (bot, message, args) => {
    message.reply(`You are currently level ${userData.level}, with ${userData.points} points.`);
  }
  const fs = require("fs");
  fs.writeFile("./points.json", JSON.stringify(points), (err) => {
    if (err) console.error(err)
  });