module.exports.run = async (bot, message, args) => {
    if(message.content === "!role+") {
        message.channel.send("Merci de préciser le rôle que vous voulez vous assigner. \n(Une liste complète est disponible en faisant ``!rolelist``)")
        var date = new Date().toLocaleTimeString()
        bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Commande !role+`)
            console.log(`>> Commande !role+`)
    }
    if(message.content.includes("Garde de Hurlevent")) {
        let role = message.guild.roles.find("name", "🔰 La Garde de Hurlevent");
        let member = message.member;
        member.removeRole(role).catch(console.error);
        message.channel.send("``Rôle ajouté`` :white_check_mark:")
        message.delete(6000)
        var date = new Date().toLocaleTimeString()
        bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Commande !role+ **Garde de Hurlevent**`)
            console.log(`>> Commande !role+ Garde de Hurlevent`)
    }
    if(message.content.includes("Crocs de Wrynn")) {
        let role = message.guild.roles.find("name", "Crocs de Wrynn");
        let member = message.member;
        member.removeRole(role).catch(console.error);
        message.channel.send("``Rôle ajouté`` :white_check_mark:")
        message.delete(6000)
        var date = new Date().toLocaleTimeString()
        bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Commande !role+ **Crocs de Wrynn**`)
            console.log(`>> Commande !role+ Crocs de Wrynn`)
    }
    if(message.content.includes("Main de Lordaeron")) {
        let role = message.guild.roles.find("name", "⚔ Main de Lordaeron");
        let member = message.member;
        member.removeRole(role).catch(console.error);
        message.channel.send("``Rôle ajouté`` :white_check_mark:")
        message.delete(6000)
        var date = new Date().toLocaleTimeString()
        bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Commande !role+ **Main de Lordaeron**`)
            console.log(`>> Commande !role+ Main de Lordaeron`)
    }
    if(message.content.includes("Escadron Loups-de-guerre")) {
        let role = message.guild.roles.find("name", "🐺 Escadron Loups-de-guerre");
        let member = message.member;
        member.addRole(role).catch(console.error);
        message.channel.send("``Rôle ajouté`` :white_check_mark:")
        message.delete(6000)
        var date = new Date().toLocaleTimeString()
        bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Commande !role+ **Escadron Loups-de-guerre**`)
            console.log(`>> Commande !role+ Escadron Loups-de-guerre`)
    }
    if(message.content.includes("Maison Coeur de Lion")) {
        let role = message.guild.roles.find("name", "🐅 Maison Cœur de Lion");
        let member = message.member;
        member.addRole(role).catch(console.error);
        message.channel.send("``Rôle ajouté`` :white_check_mark:")
        message.delete(6000)
        var date = new Date().toLocaleTimeString()
        bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Commande !role+ **Maison Coeur de Lion**`)
            console.log(`>> Commande !role+ Maison Coeur de Lion`)
    }
    if(message.content.includes("Rempart du Roi")) {
        let role = message.guild.roles.find("name", "⚔ Rempart du Roi");
        let member = message.member;
        member.addRole(role).catch(console.error);
        message.channel.send("``Rôle ajouté`` :white_check_mark:")
        message.delete(6000)
        var date = new Date().toLocaleTimeString()
        bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Commande !role+ **Rempart du Roi**`)
            console.log(`>> Commande !role+ Rempart du Roi`)
    }
    if(message.content.includes("Fondation Ethernae")) {
        let role = message.guild.roles.find("name", "Fondation Ethernae");
        let member = message.member;
        member.addRole(role).catch(console.error);
        message.channel.send("``Rôle ajouté`` :white_check_mark:")
        message.delete(6000)
        var date = new Date().toLocaleTimeString()
        bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Commande !role+ **Fondation Ethernae**`)
            console.log(`>> Commande !role+ Fondation Ethernae`)
    }
    }