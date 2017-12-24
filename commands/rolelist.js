module.exports.run = async (bot, message, args) => {
    const embed = {
        "title": "Liste des rôles attribuables",
        "description": "Voici une liste des rôles que vous pouvez vous attribuer en faisant ``!role+`` pour l'ajouter ou ``!role-`` pour le retirer.",
        "color": 8764472,
        "thumbnail": {
          "url": "https://canary.discordapp.com/assets/ffcdb50ce310bfbe221f01a8e72034a8.svg"
        },
        "fields": [
          {
            "name": "Garde de Hurlevent",
            "value": "``!role+ Garde de Hurlevent`` ou ``!role- Garde de Hurlevent``"
          },
          {
            "name": "Crocs de Wrynn",
            "value": "``!role+ Crocs de Wrynn`` ou ``!role- Crocs de Wrynn``"
          },
          {
            "name": "Main de Lordaeron",
            "value": "``!role+ Main de Lordaeron`` ou ``!role- Main de Lordaeron``"
          },
          {
            "name": "Escadron Loups-de-guerre",
            "value": "``!role+ Escadron Loups-de-guerre`` ou ``!role- Escadron Loups-de-guerre``"
          },
          {
            "name": "Maison Coeur de Lion",
            "value": "``!role+ Maison Coeur de Lion`` ou ``!role- Maison Coeur de Lion``"
          },
          {
            "name": "<:attention:393127478799106061> ATTENTION ! <:attention:393127478799106061>",
            "value": "Tout membre retrouvé avec un grade ne lui appartenant pas subira des sanctions de la part du Conseil des neuf."
          }
        ]
      };
      message.channel.send({embed});
}