module.exports.run = async (bot, message, args) => {
    if(message.content === "!invite") {
        channel.createInvite({maxUses:50})
        .then(invite => message.channel.send(`Invitation à ce channel : ${invite.code}`))
        .catch(console.error);
    }
}