module.exports.run = async (bot, message, args) => {
    const embed = {
        "title": "Changelog / Nouveautés",
        "description": "Mimiron BOT **v1.164**",
        "color": 5560853,
        "timestamp": "2017-12-23T16:22:00.000Z",
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
            "name": "!rolelist",
            "value": "Affiche la liste des rôles disponibles"
          },
          {
            "name": "!changelog",
            "value": "Affiche cette commande, qui rend compte des dernières nouveautés du bot <:blobcheer:393127479470063616>"
          }
        ]
      };
      message.channel.send({embed});
}