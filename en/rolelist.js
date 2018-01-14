module.exports.run = async (bot, message, args) => {
    const embed = {
        "title": "Auto-assignement rolelist",
        "description": "Here is a list of roles you can auto-assigne/remove. ``!role+`` to auto-assign or ``!role-`` to auto-remove.",
        "color": 8764472,
        "thumbnail": {
          "url": "https://canary.discordapp.com/assets/ffcdb50ce310bfbe221f01a8e72034a8.svg"
        },
        "fields": [
          {
            "name": "Garde de Hurlevent",
            "value": "``!role+ Garde de Hurlevent`` or ``!role- Garde de Hurlevent``"
          },
          {
            "name": "Crocs de Wrynn",
            "value": "``!role+ Crocs de Wrynn`` or ``!role- Crocs de Wrynn``"
          },
          {
            "name": "Main de Lordaeron",
            "value": "``!role+ Main de Lordaeron`` or ``!role- Main de Lordaeron``"
          },
          {
            "name": "Escadron Loups-de-guerre",
            "value": "``!role+ Escadron Loups-de-guerre`` or ``!role- Escadron Loups-de-guerre``"
          },
          {
            "name": "Maison Coeur de Lion",
            "value": "``!role+ Maison Coeur de Lion`` or ``!role- Maison Coeur de Lion``"
          },
          {
            "name": "Rempart du Roi",
            "value": "``!role+ Rempart du Roi`` or ``!role- Rempart du Roi``"
          },
          {
            "name": "Fondation Ethernae",
            "value": "``!role+ Fondation Ethernae`` or ``!role- Fondation Ethernae``"
          },
          {
            "name": "Veilleurs",
            "value": "``!role+ Veilleurs`` or ``!role- Veilleurs``"
          },
          {
            "name": "Chope Sucrée",
            "value": "``!role+ Chope Sucrée`` or ``!role- Chope Sucrée``"
          },
          {
            "name": "Famille Malfrey",
            "value": "``!role+ Famille Malfrey`` or ``!role- Famille Malfrey``"
          },
          {
            "name": "Traque Nocturne",
            "value": "``!role+ Traque Nocturne`` or ``!role- Traque Nocturne``"
          },
          {
            "name": "Aaronverse",
            "value": "``!role+ Aaronverse`` or ``!role- Aaronverse``"
          },
          {
            "name": "<:attention:393127478799106061> ATTENTION ! <:attention:393127478799106061>",
            "value": "If a member is found with a role which doesn't match with his RP character, he will receive sanctions from the Staff."
          }
        ]
      };
      message.author.send({embed});
      var date = new Date().toLocaleTimeString()
      bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Command !rolelist`)
        console.log(`>> Command !rolelist`)
}