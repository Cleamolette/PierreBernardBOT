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
                "name": "!spam",
                "value": "Affiche un rappel des règles quant au spam"
            },
            {
                "name": "!changelog",
                "value": "Affiche les dernières nouveautés en date du bot"
            },
            {
                "name": "!config",
                "value": ":spy:"
            },
            {
                "name": "!role+ / !role- / !rolelist",
                "value": "Système d'auto-assignation de rôles de guildes ou d'organisation (faire !rolelist en premier)"
            },
            {
                "name": "!membres",
                "value": "Affiche le nombre de membres du serveur."
            },
            {
                "name": "!purge",
                "value": "Terrestre et + uniquement, permet de supprimer des messages."
            },
            {
                "name": "!say",
                "value": "Fait dire au bot ce que vous voulez !"
            },
            {
                "name": "!suggestion",
                "value": "M'envoie directement une suggestion. Toutefois, n'en abusez pas sous peine de sanctions."
            }
            ]
        };
        message.author.send({embed});
        var date = new Date().toLocaleTimeString()
        bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Commande !help`)
        console.log(`>> Commande !help`)
}