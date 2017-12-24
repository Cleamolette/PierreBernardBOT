module.exports.run = async (bot, message, args) => {
    	const embed = {
  			"title": "BOT \"Mimiron\"",
  			"description": "Un bot créé par Yenaman, rassemblant quelques commandes (quelques idées de <@246807099332362240> aussi :eyes:)",
  			"color": 1675721,
  			"footer": {
    			"icon_url": "https://cdn.discordapp.com/emojis/280092975407562752.png",
    			"text": "À demain ! TCHAO TCHAO TCHAO"
  			},
  			"thumbnail": {
    			"url": "https://cdn.discordapp.com/attachments/389904952656658432/391005256131018762/Mimiron.jpg"
  			},
  			"author": {
    			"name": "Créateur : Yenaman#4134",
    			"icon_url": "https://cdn.discordapp.com/avatars/267357209187450884/a_10003bc4d8cfd24aab15ad4719009c1d.gif"
  			},
  			"fields": [
    		{
      		"name": "Fonctionnalités",
      		"value": "C'est un bot qui réagit à certaines phrases que **vous** devrez trouver !"
    		},
    		{
     		 "name": "Uptime",
      		"value": "Le bot sera en ligne de 9h du matin à 03h du matin pour votre plus grand bonheur <:blobheart:390132491106779136> Pourquoi ? Parce que le bot a besoin d'être hors-ligne 6 heures par jour."
    		}
  			]
		};
		message.channel.send({embed});
		var date = new Date().toLocaleTimeString()
		bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Commande !info`)
	}