module.exports.run = async (bot, message, args) => {
    message.channel.send(`\`Il y a ${message.guild.memberCount} membres dans le serveur\``);
}