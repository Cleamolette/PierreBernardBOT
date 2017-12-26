module.exports.run = async (bot, message, args) => {
    message.channel.send(message.guild.memberCount);
}