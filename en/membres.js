module.exports.run = async (bot, message, args) => {
    message.channel.send(`\`There are ${message.guild.memberCount} members in the server\``);
    var date = new Date().toLocaleTimeString()
    bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Command !members`)
    console.log(`>> Command !members`)
}