module.exports.run = async (bot, message, args) => {
    const embed = {
        "title": "Changelog / Nouveautés",
        "description": "Mimiron BOT :tada: **v1.__2__.16** :tada:",
        "color": 5560853,
        "timestamp": "2017-12-26T16:21:00.000Z",
        "footer": {
          "text": "Dernière mise à jour le"
        },
        "thumbnail": {
          "url": "https://cdn.discordapp.com/avatars/272416422444007424/c5f309543416a382339859addb4af97e.png"
        },
        "fields": [
          {
            "name": "!purge",
            "value": `Commande réservée aux admins du Discord pour supprimer un nombre de messages.`
          },
          {
            "name": "!say",
            "value": "Le bot dit une phrase que vous voulez"
          }
        ]
      };
      message.channel.send({embed});
      bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Commande !changelog`)
        console.log(`>> Commande !changelog`)
}