module.exports.run = async (bot, message, args) => {
if(message.content === "!role+ Garde de Hurlevent") {
    let role = message.guild.roles.find("name", "La Garde de Hurlevent");
    let member = message.member;
    member.addRole(role).catch(console.error);
    message.channel.send("``Rôle ajouté`` :white_check_mark:")
    message.delete(6000)
}
}