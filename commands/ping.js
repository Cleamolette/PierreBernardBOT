exports.run = (bot, message, args) => {
    message.channel.send('Ping du bot en cours...').then(sent => {
        sent.edit(`**Ping :** \`${sent.createdTimestamp - message.createdTimestamp} ms\``);
    });
    var date = new Date().toLocaleTimeString()
    bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Commande !ping`)
}

exports.run = (bot, message, args) => {
    if(!args || args.size < 1) return message.reply("Un nom de commande doit être spécifié.");
    delete require.cache[require.resolve(`./${args[0]}.js`)];
    message.reply(`La commande ${args[0]} a été rechargée !`);
;}