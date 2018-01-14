module.exports.run = async (bot, message, args) => {
if(message.content.includes("start")) {
    const embed = {
        "title": "Information",
        "description": "<@356065937318871041> can speak **English** :flag_us: ! If you haven't defined your language settings, you need to run **the command** ``!aki lang en`` in <#388170884722196490> or <#388844665111183360> then, you have to start a **new game** with ``!aki start``. Have fun!",
        "color": 4783882,
        "thumbnail": {
          "url": "https://cdn.discordapp.com/avatars/356065937318871041/58bd0ecfce3f3b90ef4cedd440e2ce5d.png"
        }
      };
      message.reply({embed});
      var date = new Date().toLocaleTimeString()
    bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Command !aki start`)
        console.log(`>> Command !aki **start**`)
}
}