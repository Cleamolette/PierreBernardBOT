module.exports.run = async (bot, message, args) => {
    message.reply(`You are currently level ${userData.level}, with ${userData.points} points.`);
  }
  const fs = require("fs");
  let points = JSON.parse(fs.readFileSync("./points.json", "utf8"));
  let curLevel = Math.floor(0.1 * Math.sqrt(userData.points));
  let userData = points[message.author.id];
  fs.writeFile("./points.json", JSON.stringify(points), (err) => {
    if (err) console.error(err)
  });