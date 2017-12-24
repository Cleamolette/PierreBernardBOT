module.exports.run = async (bot, message, args) => {
    const embed = {
        "title": "Changelog / Nouveautés",
        "description": "Mimiron BOT **v1.184**",
        "color": 5560853,
        "timestamp": "2017-12-24T16:55:00.000Z",
        "footer": {
          "text": "Dernière mise à jour le"
        },
        "thumbnail": {
          "url": "https://cdn.discordapp.com/avatars/272416422444007424/c5f309543416a382339859addb4af97e.png"
        },
        "fields": [
          {
            "name": "!role+ & !role-",
            "value": "Permet d'ajouter un rôle correspondant à votre guilde"
          },
          {
            "name": "[INTERNE] Dossier ./commands/",
            "value": "Pour ceux ayant l'envie de regarder le code du bot sur GitHub :\nIl existe à présent un dossier ``commands`` pour alléger le nombre de lignes du fichier principal."
          }
        ]
      };
      message.channel.send({embed});
}