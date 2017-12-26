module.exports.run = async (bot, message, args) => {
    message.channel.send(`\`Il y a ${message.guild.memberCount} membres dans le serveur\``);
    var date = new Date().toLocaleTimeString()
    bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Commande !membres`)
    console.log(`>> Commande !membres`)
}