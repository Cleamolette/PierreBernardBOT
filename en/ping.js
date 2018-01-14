module.exports.run = async (bot, message, args) => {
    message.channel.send('Pinging the bot...').then(sent => {
        sent.edit(`**Ping :** \`${sent.createdTimestamp - message.createdTimestamp} ms\``);
    });
    var date = new Date().toLocaleTimeString()
    bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Command !ping`)
        console.log(`>> Command !ping`)
}