module.exports.run = async (bot, message, args) => {
if(message.content === "!restart") {
    if(message.author.id !== '267357209187450884') return;
    message.channel.send("test réussi");
}
}