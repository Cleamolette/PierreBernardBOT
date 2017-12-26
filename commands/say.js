module.exports.run = async (bot, message, args) => {
    let text = args.slice(0).join(" ");
    message.delete(200);
    message.channel.send(text);
}