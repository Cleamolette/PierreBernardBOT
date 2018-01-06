module.exports.run = async (bot, message, args) => {
if(message.content === "!config") {
    if(message.author.id !== '267357209187450884') return;
    const embed = {
        "title": "Config Admin",
        "description": "Cette commande est réservée à la haute administration du Bot. \nC'est à dire uniquement à <@267357209187450884>.\nCe message ne vous est donc forcément pas destiné.",
        "color": 16711680,
        "fields": [
          {
            "name": ":arrow_down: Commandes disponibles :arrow_down: ",
            "value": ":arrow_down:                                               :arrow_down:"
          },
          {
            "name": "restart",
            "value": "Redémarre le bot (10 secondes environ)"
          }
        ]
      };
      message.channel.send({embed});
      var date = new Date().toLocaleTimeString()
      bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Commande !config`)
        console.log(`>> Commande !config`)
}
if(message.content.includes("restart")) {
    if(message.author.id !== '267357209187450884') return;
    const embed = {
        "title": "Redémarrage",
        "description": "Retour dans 10 secondes.",
        "color": 16711680
      };
      message.channel.send({embed});
      var date = new Date().toLocaleTimeString()
      bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Commande !config **restart**`)
        console.log(`>> Commande !config restart`).then(process.exit(0));
}
}
