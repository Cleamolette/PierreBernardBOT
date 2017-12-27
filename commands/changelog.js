module.exports.run = async (bot, message, args) => {
    const embed = {
        "title": "Changelog / Nouveautés",
        "description": "Mimiron BOT **v1.2.47**",
        "color": 5560853,
        "timestamp": "2017-12-27T00:19:00.000Z",
        "footer": {
          "text": "Dernière mise à jour le"
        },
        "thumbnail": {
          "url": "https://cdn.discordapp.com/avatars/272416422444007424/c5f309543416a382339859addb4af97e.png"
        },
        "fields": [
          {
            "name": "!suggestion",
            "value": `Commande qui permet de savoir ce que vous voulez voir dans le bot ! Merci de ne pas en abuser toutefois.`
          },
          {
            "name": "!say",
            "value": "Le bot dit une phrase que vous voulez"
          },
          {
            "name": "!membres",
            "value": "Affiche le nombre de membres du serveur"
          }
        ]
      };
      message.channel.send({embed});
      var date = new Date().toLocaleTimeString()
      bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Commande !changelog`)
        console.log(`>> Commande !changelog`)
}