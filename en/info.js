module.exports.run = async (bot, message, args) => {
    	const embed = {
  			"title": "BOT \"Mimiron\"",
  			"description": "A Bot created by Yenaman, containing some commands (some ideas are from <@246807099332362240> too :eyes:)",
  			"color": 1675721,
  			"footer": {
    			"icon_url": "https://cdn.discordapp.com/emojis/280092975407562752.png",
    			"text": "Goodbye ! TCHAO TCHAO TCHAO"
  			},
  			"thumbnail": {
    			"url": "https://cdn.discordapp.com/attachments/389904952656658432/391005256131018762/Mimiron.jpg"
  			},
  			"author": {
    			"name": "Creator: Yenaman#4134",
    			"icon_url": "https://cdn.discordapp.com/avatars/267357209187450884/a_10003bc4d8cfd24aab15ad4719009c1d.gif"
  			},
  			"fields": [
    		{
      		"name": "Features",
      		"value": "This is a bot which reacts to sentences that **you** must find!"
    		},
    		{
     		 "name": "Uptime",
      		"value": "The bot will be online from 9 AM to 3 AM at your service! <:blobheart:390132491106779136> Why? Because the bot needs to be offline 6 hours a day."
    		}
  			]
		};
		message.channel.send({embed});
		var date = new Date().toLocaleTimeString()
		bot.channels.get("391601508158013440").send(`${date}(GMT+0) >> Command !info`)
        console.log(`>> Commande !info`)
	}