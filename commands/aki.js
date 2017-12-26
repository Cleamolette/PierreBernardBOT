module.exports.run = async (bot, message, args) => {
if(message.content.includes("start")) {
    const embed = {
        "title": "Information",
        "description": "La <@356065937318871041> peut parler **Français** :flag_fr: ! Si vous n'avez pas défini vos paramètres de langue, il suffit de lancer **la commande** ``!aki lang fr`` dans <#388170884722196490> ou <#388844665111183360> puis de lancer une **nouvelle partie** avec ``!aki start``. Amusez-vous bien !",
        "color": 4783882,
        "thumbnail": {
          "url": "https://cdn.discordapp.com/avatars/356065937318871041/58bd0ecfce3f3b90ef4cedd440e2ce5d.png"
        }
      };
      message.reply({embed});
      var date = new Date().toLocaleTimeString()
    bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Commande !aki start`)
        console.log(`>> Commande !aki **start**`)
}
}