const agree = "<:GreenTick:395357069051691018>";
const disagree = "<:RedTick:395357068976062475>";

module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("Votez !");
    await msg.react(agree);
    await msg.react(disagree);  
    const reactions = await msg.awaitReactions(reaction => reaction.emoji.name === agree || reaction.emoji.name === disagree, {time: 15000});
    message.channel.send(`Vote terminé ! \n\n${agree}: ${reactions.get(agree).count-1}\n${disagree}: ${reactions.get(disagree).count-1}`);
}

module.exports.help = {
    name: "await"
}