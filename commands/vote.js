const agree = "395357069051691018";
const disagree = "395357068976062475";

module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("Votez !");
    await msg.react(agree);
    await msg.react(disagree);  
    const reactions = await msg.awaitReactions(reaction => reaction.emoji.name === agree || reaction.emoji.name === disagree, {time: 15000});
    message.channel.send(`Vote terminé ! \n\n:GreenTick: ${reactions.get(agree)}\n:RedTick: ${reactions.get(disagree)}`);
}

module.exports.help = {
    name: "await"
}