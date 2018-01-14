module.exports.run = async (bot, message, args) => {
if(message.content === "!config") {
    if(message.author.id !== '267357209187450884') return;
    const embed = {
        "title": "Admin Config",
        "description": "This command is reserved to the high administration of the Bot. \nThis means, only for <@267357209187450884>.\nSo, this message is obviously not for you.",
        "color": 16711680,
        "fields": [
          {
            "name": ":arrow_down: Available commands :arrow_down: ",
            "value": ":arrow_down:                                               :arrow_down:"
          },
          {
            "name": "restart",
            "value": "Restarts the bot (10 seconds approximatively)"
          }
        ]
      };
      message.channel.send({embed});
      var date = new Date().toLocaleTimeString()
      bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Command !config`)
        console.log(`>> Command !config`)
}
if(message.content.includes("restart")) {
    if(message.author.id !== '267357209187450884') return;
    const embed = {
        "title": "Restarting",
        "description": "Coming back in 10 seconds.",
        "color": 16711680
      };
      message.channel.send({embed});
      message.channel.send("A bot restart has been triggered.")
      var date = new Date().toLocaleTimeString()
      bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Command !config **restart**`)
        console.log(`>> Command !config restart`).then(process.exit(0));
}
}
