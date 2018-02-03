module.exports.run = async (bot, message, args) => {
    if(message.content === "!invite 1") {
        message.channel.createInvite({maxAge: 0, maxUses: 1})
        .then(invite => message.channel.send(`1 invitation à ce channel : ${invite.code}`))
        .catch(console.error);
    }
    if(message.content === "!invite 5") {
        message.channel.createInvite({maxAge: 0, maxUses: 5})
        .then(invite => message.channel.send(`5 invitations à ce channel : ${invite.code}`))
        .catch(console.error);
    }
    if(message.content === "!invite 10") {
        message.channel.createInvite({maxAge: 0, maxUses: 10})
        .then(invite => message.channel.send(`10 invitations à ce channel : ${invite.code}`))
        .catch(console.error);
    }
    if(message.content === "!invite 25") {
        message.channel.createInvite({maxAge: 0, maxUses: 25})
        .then(invite => message.channel.send(`25 invitations à ce channel : ${invite.code}`))
        .catch(console.error);
    }
    if(message.content === "!invite 30") {
        message.channel.createInvite({maxAge: 0, maxUses: 30})
        .then(invite => message.channel.send(`30 invitations à ce channel : ${invite.code}`))
        .catch(console.error);
    }
}