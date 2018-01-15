module.exports.run = async (bot, message, args) => {
    const embed = {
        "title": "Changelog / Nouveautés",
        "description": "Mimiron BOT **v1.3.48**",
        "color": 5560853,
        "timestamp": "2018-01-15T19:25:00.000Z",
        "footer": {
          "text": "Dernière mise à jour le"
        },
        "thumbnail": {
          "url": "https://cdn.discordapp.com/avatars/272416422444007424/c5f309543416a382339859addb4af97e.png"
        },
        "fields": [
          {
            "name": "Discord.JS v11.3.0",
            "value": `Mise à jour`
          }
        ]
      };
      message.channel.send({embed});
      var date = new Date().toLocaleTimeString()
      bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Commande !changelog`)
        console.log(`>> Commande !changelog`)
}