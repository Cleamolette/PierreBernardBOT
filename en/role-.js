module.exports.run = async (bot, message, args) => {
if(message.content === "!role-") {
    message.channel.send("Please precise the role you want to auto-remove. \n(A complete list is available by running ``!rolelist``)")
    var date = new Date().toLocaleTimeString()
    bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Command !role-`)
        console.log(`>> Command !role-`)
}
if(message.content.includes("Garde de Hurlevent")) {
    let role = message.guild.roles.find("name", "🔰 La Garde de Hurlevent");
    let member = message.member;
    member.removeRole(role).catch(console.error);
    message.channel.send("``Role removed`` :white_check_mark:")
    message.delete(6000)
    var date = new Date().toLocaleTimeString()
    bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Command !role- **Garde de Hurlevent**`)
        console.log(`>> Command !role- Garde de Hurlevent`)
}
if(message.content.includes("Crocs de Wrynn")) {
    let role = message.guild.roles.find("name", "Crocs de Wrynn");
    let member = message.member;
    member.removeRole(role).catch(console.error);
    message.channel.send("``Role removed`` :white_check_mark:")
    message.delete(6000)
    var date = new Date().toLocaleTimeString()
    bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Command !role- **Crocs de Wrynn**`)
        console.log(`>> Commande !role- Crocs de Wrynn`)
}
if(message.content.includes("Main de Lordaeron")) {
    let role = message.guild.roles.find("name", "⚔ Main de Lordaeron");
    let member = message.member;
    member.removeRole(role).catch(console.error);
    message.channel.send("``Rôle retiré`` :white_check_mark:")
    message.delete(6000)
    var date = new Date().toLocaleTimeString()
    bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Commande !role- **Main de Lordaeron**`)
        console.log(`>> Commande !role- Main de Lordaeron`)
}
if(message.content.includes("Escadron Loups-de-guerre")) {
    let role = message.guild.roles.find("name", "🐺 Escadron Loups-de-guerre");
    let member = message.member;
    member.removeRole(role).catch(console.error);
    message.channel.send("``Rôle retiré`` :white_check_mark:")
    message.delete(6000)
    var date = new Date().toLocaleTimeString()
    bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Commande !role- **Escadron Loups-de-guerre**`)
        console.log(`>> Commande !role- Escadron Loups-de-guerre`)
}
if(message.content.includes("Maison Coeur de Lion")) {
    let role = message.guild.roles.find("name", "🐅 Maison Cœur de Lion");
    let member = message.member;
    member.removeRole(role).catch(console.error);
    message.channel.send("``Rôle retiré`` :white_check_mark:")
    message.delete(6000)
    var date = new Date().toLocaleTimeString()
    bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Commande !role- **Maison Coeur de Lion**`)
        console.log(`>> Commande !role- Maison Coeur de Lion`)
}
if(message.content.includes("Rempart du Roi")) {
    let role = message.guild.roles.find("name", "⚔ Rempart du Roi");
    let member = message.member;
    member.removeRole(role).catch(console.error);
    message.channel.send("``Rôle retiré`` :white_check_mark:")
    message.delete(6000)
    var date = new Date().toLocaleTimeString()
    bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Commande !role- **Rempart du Roi**`)
        console.log(`>> Commande !role- Rempart du Roi`)
}
if(message.content.includes("Fondation Ethernae")) {
    let role = message.guild.roles.find("name", "Fondation Ethernae");
    let member = message.member;
    member.removeRole(role).catch(console.error);
    message.channel.send("``Rôle retiré`` :white_check_mark:")
    message.delete(6000)
    var date = new Date().toLocaleTimeString()
    bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Commande !role- **Fondation Ethernae**`)
        console.log(`>> Commande !role- Fondation Ethernae`)
}
if(message.content.includes("Veilleurs")) {
    let role = message.guild.roles.find("name", "Veilleurs");
    let member = message.member;
    member.removeRole(role).catch(console.error);
    message.channel.send("``Rôle retiré`` :white_check_mark:")
    message.delete(6000)
    var date = new Date().toLocaleTimeString()
    bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Commande !role- **Veilleurs**`)
        console.log(`>> Commande !role- Veilleurs`)
}
if(message.content.includes("Chope Sucrée")) {
    let role = message.guild.roles.find("name", "Chope Sucrée");
    let member = message.member;
    member.removeRole(role).catch(console.error);
    message.channel.send("``Rôle retiré`` :white_check_mark:")
    message.delete(6000)
    var date = new Date().toLocaleTimeString()
    bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Commande !role- **Chope Sucrée**`)
        console.log(`>> Commande !role- Chope Sucrée`)
}
if(message.content.includes("Famille Malfrey")) {
    let role = message.guild.roles.find("name", "Famille Malfrey");
    let member = message.member;
    member.removeRole(role).catch(console.error);
    message.channel.send("``Rôle retiré`` :white_check_mark:")
    message.delete(6000)
    var date = new Date().toLocaleTimeString()
    bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Commande !role- **Famille Malfrey**`)
        console.log(`>> Commande !role- Famille Malfrey`)
}
if(message.content.includes("Traque Nocturne")) {
    let role = message.guild.roles.find("name", "Traque Nocturne");
    let member = message.member;
    member.removeRole(role).catch(console.error);
    message.channel.send("``Rôle retiré`` :white_check_mark:")
    message.delete(6000)
    var date = new Date().toLocaleTimeString()
    bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Commande !role- **Traque Nocturne**`)
        console.log(`>> Commande !role- Traque Nocturne`)
}
if(message.content.includes("Aaronverse")) {
    let role = message.guild.roles.find("name", "Aaronverse");
    let member = message.member;
    member.removeRole(role).catch(console.error);
    message.channel.send("``Rôle retiré`` :white_check_mark:")
    message.delete(6000)
    var date = new Date().toLocaleTimeString()
    bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Commande !role- **Aaronverse**`)
        console.log(`>> Commande !role- Aaronverse`)
}
}