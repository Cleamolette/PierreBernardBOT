module.exports.run = async (bot, message, args) => {
        const embed = {
            "title": "Rappel des règles quant au *spam*",
            "color": 15472173,
            "thumbnail": {
              "url": "https://cdn.discordapp.com/emojis/332985690075693059.png"
            },
            "fields": [
            {
            "name": "Règle 2",
            "value": "Pas d'insultes/**Spam**/**Flood** ni racisme, homophobie"
            },
            {
            "name": "Règle 5",
            "value": "Conversations bordel nawak : #club-vip (accessible sur demande) ou <#388170884722196490>. **Sanction : Rétrogradation**"
            }
            ]
        };
        message.channel.send({embed});
        var date = new Date().toLocaleTimeString()
        bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Commande !spam`)
        console.log(`>> Commande !spam`)
    }