module.exports.run = async (bot, message, args) => {
if(message.content === "!restart") {
    if(message.author.id !== config.ownerID) return;
    message.channel.send("test réussi");
}
}