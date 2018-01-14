module.exports.run = async (bot, message, args) => {
            const embed = {
            "title": "__Commands__",
            "description": "List of all *\"public\"* commands available. ",
            "color": 12195794,
            "thumbnail": {
            "url": "https://cdn.discordapp.com/emojis/315210423223713802.png"
            },
            "fields": [
            {
                "name": "!help",
                "value": "Displays this message"
            },
            {
                "name": "!ping",
                "value": "Pings the bot"
            },
            {
                "name": "!info",
                "value": "Displays some information about the bot"
            },
            {
                "name": "!spam",
                "value": "Shows the rules about spamming"
            },
            {
                "name": "!changelog",
                "value": "Displays the new features of the bot"
            },
            {
                "name": "!config",
                "value": ":spy:"
            },
            {
                "name": "!role+ / !role- / !rolelist",
                "value": "Auto-assignation system of guild roles or organizations (do !rolelist first of all)"
            },
            {
                "name": "!members",
                "value": "Displays the number of members in the server."
            },
            {
                "name": "!purge",
                "value": "Terrestre role and above only, can delete multiple messages."
            },
            {
                "name": "!say",
                "value": "Say whatever you want to say to the bot, it will respond the same!"
            },
            {
                "name": "!suggestion",
                "value": "Sends me directly a suggestion. Although, don't abuse it, or I will sanction."
            }
            ]
        };
        message.author.send({embed});
        var date = new Date().toLocaleTimeString()
        bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Command !help`)
        console.log(`>> Command !help`)
}