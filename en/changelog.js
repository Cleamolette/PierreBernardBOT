module.exports.run = async (bot, message, args) => {
    const embed = {
        "title": "Changelog",
        "description": "Mimiron BOT **v1.2.82**",
        "color": 5560853,
        "timestamp": "2018-01-13T16:17:00.000Z",
        "footer": {
          "text": "Last update"
        },
        "thumbnail": {
          "url": "https://cdn.discordapp.com/avatars/272416422444007424/c5f309543416a382339859addb4af97e.png"
        },
        "fields": [
          {
            "name": "!rolelist / !role- / !role+",
            value": `List update`
          },
          {
            "name": "!help",
            value": `List update`
          }
        ]
      };
      message.channel.send({embed});
      var date = new Date().toLocaleTimeString()
      bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Command !changelog`)
        console.log(`>> Command !changelog`)
}