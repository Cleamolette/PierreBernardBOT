module.exports.run = async (bot, message, args) => {
            const embed = {
            "title": "__Commandes__",
            "description": "Liste des commandes *\"publiques\"* disponibles. Il y en a peu pour le moment.",
            "color": 12195794,
            "thumbnail": {
            "url": "https://cdn.discordapp.com/emojis/315210423223713802.png"
            },
            "fields": [
            {
            "name": "!help",
            "value": "Affiche ce message"
            },
            {
            "name": "!ping",
            "value": "Envoie une requête au bot et affiche le temps qu'elle a pris pour être renvoyée (le ping du bot en soi)"
            },
            {
            "name": "!info",
            "value": "Affiche tout un tas d'informations au sujet du bot, dont son utilité"
            },
            {
            "name": "!s",
            "value": "Affiche un rappel des règles quand au **s**pam"
            }
            ]
        };
        message.channel.send({embed});
        var date = new Date().toLocaleTimeString()
        bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Commande !help`)
}