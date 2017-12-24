module.exports.run = async (bot, message, args) => {
    const embed = {
        "title": "Changelog / Nouveautés",
        "description": "Mimiron BOT **v1.185**",
        "color": 5560853,
        "timestamp": "2017-12-24T19:30:00.000Z",
        "footer": {
          "text": "Dernière mise à jour le"
        },
        "thumbnail": {
          "url": "https://cdn.discordapp.com/avatars/272416422444007424/c5f309543416a382339859addb4af97e.png"
        },
        "fields": [
          {
            "name": "!rolelist",
            "value": `"Maison Coeur de Lion" et "Escadron Loups-de-Guerre" ajoutés`
          },
          {
            "name": "[INTERNE] Dossier ./commands/",
            "value": "Pour ceux ayant l'envie de regarder le code du bot sur GitHub :\nIl existe à présent un dossier ``commands`` pour alléger le nombre de lignes du fichier principal."
          }
        ]
      };
      message.channel.send({embed});
}