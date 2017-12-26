module.exports.run = async (bot, message, args) => {
    const embed = {
        "title": "Changelog / Nouveautés",
        "description": "Mimiron BOT :tada: **v1.__2__.005** :tada:",
        "color": 5560853,
        "timestamp": "2017-12-26T14:49:00.000Z",
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
            "value": "Ajout des dernières commandes + Fait que la commande s'envoie en MP au vu de sa taille"
          }
        ]
      };
      message.channel.send({embed});
      bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Commande !changelog`)
        console.log(`>> Commande !changelog`)
}
//mémo: faire en sorte que !help soit faite en MP