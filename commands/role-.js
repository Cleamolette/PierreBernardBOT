module.exports.run = async (bot, message, args) => {
if(message.content === "!role- Garde de Hurlevent") {
    let role = message.guild.roles.find("name", "La Garde de Hurlevent");
    let member = message.member;
    member.removeRole(role).catch(console.error);
    message.channel.send("``Rôle retiré`` :white_check_mark:")
    message.delete(6000)
}
if(message.content === "!role- Crocs de Wrynn") {
    let role = message.guild.roles.find("name", "Crocs de Wrynn");
    let member = message.member;
    member.removeRole(role).catch(console.error);
    message.channel.send("``Rôle retiré`` :white_check_mark:")
    message.delete(6000)
}
if(message.content === "!role- Main de Lordaeron") {
    let role = message.guild.roles.find("name", "Main de Lordaeron");
    let member = message.member;
    member.removeRole(role).catch(console.error);
    message.channel.send("``Rôle retiré`` :white_check_mark:")
    message.delete(6000)
}
if(message.content === "!role- Escadron Loups-de-guerre") {
    let role = message.guild.roles.find("name", "🐺 Escadron Loups-de-guerre");
    let member = message.member;
    member.addRole(role).catch(console.error);
    message.channel.send("``Rôle retiré`` :white_check_mark:")
    message.delete(6000)
}
if(message.content === "!role- Maison Coeur de Lion") {
    let role = message.guild.roles.find("name", "🐅 Maison Cœur de Lion");
    let member = message.member;
    member.addRole(role).catch(console.error);
    message.channel.send("``Rôle retiré`` :white_check_mark:")
    message.delete(6000)
}
}