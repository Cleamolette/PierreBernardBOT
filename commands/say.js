module.exports.run = async (bot, message, args) => {
    let text = args.slice(0).join(" ");
    message.delete(500);
    message.channel.send(text);
}