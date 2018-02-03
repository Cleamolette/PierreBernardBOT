module.exports.run = async (bot, message, args) => {
    channel.createInvite({maxUses:50})
    .then(invite => message.channel.send(`Invitation à ce channel : ${invite.code}`))
    .catch(console.error);
}
