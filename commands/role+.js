module.exports.run = async (bot, message, args) => {
if(message.content === "!role+") {
    message.channel.send("Merci de préciser le rôle que vous voulez vous assigner. \n(Une liste complète est disponible en faisant ``!rolelist``)")
}
if(message.content.includes("Garde de Hurlevent")) {
    let role = message.guild.roles.find("name", "🔰 La Garde de Hurlevent");
    let member = message.member;
    member.addRole(role).catch(console.error);
    message.channel.send("``Rôle ajouté`` :white_check_mark:")
    message.delete(6000)
}
if(message.content.includes("Crocs de Wrynn")) {
    let role = message.guild.roles.find("name", "Crocs de Wrynn");
    let member = message.member;
    member.addRole(role).catch(console.error);
    message.channel.send("``Rôle ajouté`` :white_check_mark:")
    message.delete(6000)
}
if(message.content.includes("Main de Lordaeron")) {
    let role = message.guild.roles.find("name", "⚔ Main de Lordaeron");
    let member = message.member;
    member.addRole(role).catch(console.error);
    message.channel.send("``Rôle ajouté`` :white_check_mark:")
    message.delete(6000)
}
if(message.content.includes("Escadron Loups-de-guerre")) {
    let role = message.guild.roles.find("name", "🐺 Escadron Loups-de-guerre");
    let member = message.member;
    member.addRole(role).catch(console.error);
    message.channel.send("``Rôle ajouté`` :white_check_mark:")
    message.delete(6000)
}
if(message.content.includes("Maison Coeur de Lion")) {
    let role = message.guild.roles.find("name", "🐅 Maison Cœur de Lion");
    let member = message.member;
    member.addRole(role).catch(console.error);
    message.channel.send("``Rôle ajouté`` :white_check_mark:")
    message.delete(6000)
}
if(message.content.includes("Rempart du Roi")) {
    let role = message.guild.roles.find("name", "⚔ Rempart du Roi");
    let member = message.member;
    member.addRole(role).catch(console.error);
    message.channel.send("``Rôle ajouté`` :white_check_mark:")
    message.delete(6000)
}
if(message.content.includes("Fondation Ethernae")) {
    let role = message.guild.roles.find("name", "Fondation Ethernae");
    let member = message.member;
    member.addRole(role).catch(console.error);
    message.channel.send("``Rôle ajouté`` :white_check_mark:")
    message.delete(6000)
}
}