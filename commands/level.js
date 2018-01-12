module.exports.run = async (bot, message, args) => {
    message.reply(`You are currently level ${userData.level}, with ${userData.points} points.`);
  }
  const fs = require("fs");
  let points = JSON.parse(fs.readFileSync("./points.json", "utf8"));
  let userData = points[message.author.id];
  let curLevel = Math.floor(0.1 * Math.sqrt(userData.points));
  fs.writeFile("./points.json", JSON.stringify(points), (err) => {
    if (err) console.error(err)
  });