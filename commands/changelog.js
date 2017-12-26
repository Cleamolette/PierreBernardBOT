module.exports.run = async (bot, message, args) => {
    const embed = {
        "title": "Changelog / Nouveautés",
        "description": "Mimiron BOT :tada: **v1.__2__.001** :tada:",
        "color": 5560853,
        "timestamp": "2017-12-26T00:51:00.000Z",
        "footer": {
          "text": "Dernière mise à jour le"
        },
        "thumbnail": {
          "url": "https://cdn.discordapp.com/avatars/272416422444007424/c5f309543416a382339859addb4af97e.png"
        },
        "fields": [
          {
            "name": "!config",
            "value": `Commande réservée à la haute administration du bot`
          },
          {
            "name": "!help",
            "value": "Ajout des dernières commandes"
          }
        ]
      };
      message.channel.send({embed});
}
//mémo: faire en sorte que !help soit faite en MP