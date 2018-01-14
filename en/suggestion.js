module.exports.run = async (bot, message, args) => {
    let text = args.slice(0).join(" ");
    let author = message.author;
    message.delete(2000)
    message.channel.send("Suggestion sent! :tada:")
    bot.channels.get("395362240523665408").send(`<@267357209187450884> New suggestion !\n\n\`${text}\`\nBy ${author}`);
}