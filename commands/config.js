module.exports.run = async (bot, message, args) => {
if(message.content.includes("restart")) {
    if(message.author.id !== '267357209187450884') return;
    process.exit(1);
}
}