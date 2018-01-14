module.exports.run = async (bot, message, args) => {
        const embed = {
            "title": "Rules reminder about *spam*",
            "color": 15472173,
            "thumbnail": {
              "url": "https://cdn.discordapp.com/emojis/332985690075693059.png"
            },
            "fields": [
            {
            "name": "Rule 2",
            "value": "No insults/**Spam**/**Flood** racism, or homophobia"
            },
            {
            "name": "Rule 5",
            "value": "Shitpost : <#388170884722196490> or <#388844665111183360>. **Sanction : Demotion**"
            }
            ]
        };
        message.channel.send({embed});
        var date = new Date().toLocaleTimeString()
        bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Command !spam`)
        console.log(`>> Command !spam`)
    }
